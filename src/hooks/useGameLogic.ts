// 游戏主逻辑
import { useState, useEffect, useCallback } from 'react';
import { 
  PageType, 
  ModalType, 
  GameEvent, 
  EventChoice, 
  PlayerState, 
  ExamResult
} from '../types';
import { talents } from '../data/mechanics';
import { difficultySettings } from '../data/constants';
import { generateRandomEvent } from '../data/event_generators';
import { addStatus, updateStatuses, updateDebtStatus } from '../lib/statusManager';

interface UseGameLogicReturn {
  // 游戏状态
  currentPage: PageType;
  showModal: boolean;
  currentModal: ModalType | null;
  currentEvent: GameEvent | null;
  playerState: PlayerState;
  examResults: ExamResult[];
  isGameOver: boolean;
  
  // 操作方法
  setCurrentPage: React.Dispatch<React.SetStateAction<PageType>>;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
  handleStartGame: (difficulty: string) => void;
  handleBackToHome: () => void;
  handleDifficultySelect: (difficulty: string) => void;
  handleTalentSelect: (selectedTalents: string[]) => void;
  handleEventChoice: (choice: EventChoice) => void;
  handleExamComplete: (score: number, rank: string) => void;
  handleWeekendActivity: () => void;
  handleRestart: () => void;
  handleMainMenu: () => void;
  advanceGameDay: () => void;
  
  // 状态管理方法
  addStatus: (statusId: string, duration?: number) => void;
  
  // 游戏数据
  availableTalents: typeof talents;
  availableDifficulties: typeof difficultySettings;
}

// 初始玩家状态
const initialPlayerState: PlayerState = {
  mental: 80,
  health: 80,
  academic: 60,
  social: 60,
  money: 300,
  study_time: 0,
  talent_points: 3,
  selected_talents: [],
  joined_clubs: [],
  activeStatuses: [],
  game_day: 1,
  play_time: 0,
  difficulty: '普通'
};

export const useGameLogic = (): UseGameLogicReturn => {
  // 状态管理：游戏页面
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  // 状态管理：模态窗口
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState<ModalType | null>(null);
  // 状态管理：当前事件
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);
  // 状态管理：玩家状态
  const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);
  // 状态管理：考试结果
  const [examResults, setExamResults] = useState<ExamResult[]>([]);
  // 状态管理：游戏结束
  const [isGameOver, setIsGameOver] = useState(false);

  // 打开模态窗口
  const openModal = useCallback((modal: ModalType) => {
    setCurrentModal(modal);
    setShowModal(true);
  }, []);

  // 关闭模态窗口
  const closeModal = useCallback(() => {
    setShowModal(false);
    setCurrentModal(null);
  }, []);

  // 处理难度选择
  const handleDifficultySelect = useCallback((difficultyName: string) => {
    const difficulty = difficultySettings.find(d => d.name === difficultyName);
    if (difficulty) {
      setPlayerState({
        ...initialPlayerState,
        mental: difficulty.starting_stats.mental,
        health: difficulty.starting_stats.health,
        academic: difficulty.starting_stats.academic,
        social: difficulty.starting_stats.social,
        money: difficulty.starting_stats.money,
        talent_points: difficulty.talent_points,
        difficulty: difficulty.name
      });
      setCurrentPage('talent');
    }
  }, []);

  // 处理天赋选择
  const handleTalentSelect = useCallback((selectedTalents: string[]) => {
    setPlayerState(prev => ({
      ...prev,
      selected_talents: selectedTalents
    }));
  }, []);

  // 处理开始游戏
  const handleStartGame = useCallback((difficulty: string) => {
    handleDifficultySelect(difficulty);
  }, [handleDifficultySelect]);

  // 处理返回主页
  const handleBackToHome = useCallback(() => {
    setCurrentPage('home');
    setPlayerState(initialPlayerState);
    setExamResults([]);
    setIsGameOver(false);
    setCurrentEvent(null);
  }, []);

  // 应用事件效果
  const applyEventEffect = useCallback((effect: any) => {
    setPlayerState(prev => ({
      ...prev,
      mental: Math.max(0, Math.min(100, prev.mental + (effect.mental || 0))),
      health: Math.max(0, Math.min(100, prev.health + (effect.health || 0))),
      academic: Math.max(0, Math.min(200, prev.academic + (effect.academic || 0))),
      social: Math.max(0, Math.min(100, prev.social + (effect.social || 0))),
      money: Math.max(0, prev.money + (effect.money || 0)),
      study_time: prev.study_time + (effect.study_time || 0)
    }));
  }, []);

  // 处理事件选择
  const handleEventChoice = useCallback((choice: EventChoice) => {
    applyEventEffect(choice.effect);
    setCurrentEvent(null);
    advanceGameDay();
  }, [applyEventEffect]);

  // 处理考试完成
  const handleExamComplete = useCallback((score: number, rank: string) => {
    const newExamResult: ExamResult = {
      subject: '综合',
      score,
      rank,
      date: new Date().toISOString().split('T')[0]
    };
    
    setExamResults(prev => [...prev, newExamResult]);
    setCurrentPage('game');
  }, []);

  // 处理周末活动
  const handleWeekendActivity = useCallback(() => {
    // 暂时使用随机效果模拟
    const randomEffect = {
      mental: Math.floor(Math.random() * 10) - 2,
      health: Math.floor(Math.random() * 10) - 2,
      academic: Math.floor(Math.random() * 10) - 2,
      social: Math.floor(Math.random() * 10) - 2,
      money: Math.floor(Math.random() * 50) - 20,
      study_time: Math.floor(Math.random() * 120)
    };
    
    applyEventEffect(randomEffect);
    advanceGameDay();
  }, [applyEventEffect]);

  // 推进游戏天数
  const advanceGameDay = useCallback(() => {
    setPlayerState(prev => {
      const newDay = prev.game_day + 1;
      
      // 每天的自然衰减和恢复
      let newState = {
        ...prev,
        game_day: newDay,
        mental: Math.max(0, Math.min(100, prev.mental + 2 - 1)),
        health: Math.max(0, Math.min(100, prev.health + 1 - 0.5)),
        academic: Math.max(0, prev.academic - 0.5),
        social: Math.max(0, prev.social - 0.5),
        money: Math.max(0, prev.money - 5)
      };
      
      // 更新状态持续时间（每周更新）
      if (newDay % 7 === 0) {
        newState = updateStatuses(newState);
        // 检查并更新债务状态
        newState = updateDebtStatus(newState);
      }
      
      // 检查游戏结束条件
      if (newDay > 365) {
        setIsGameOver(true);
        setCurrentPage('ending');
      }
      
      // 随机事件触发
      if (Math.random() < 0.3 && !currentEvent) {
        const randomEvent = generateRandomEvent();
        setCurrentEvent(randomEvent);
      }
      
      // 考试触发
      if (newDay % 30 === 0) {
        setCurrentPage('exam');
      }
      
      return newState;
    });
  }, [currentEvent]);

  // 处理重新开始
  const handleRestart = useCallback(() => {
    setCurrentPage('home');
    setPlayerState(initialPlayerState);
    setExamResults([]);
    setIsGameOver(false);
    setCurrentEvent(null);
  }, []);

  // 处理返回主菜单
  const handleMainMenu = useCallback(() => {
    handleBackToHome();
  }, [handleBackToHome]);

  // 添加状态
  const addStatusToPlayer = useCallback((statusId: string, duration?: number) => {
    setPlayerState(prev => {
      return addStatus(prev, statusId, duration);
    });
  }, []);

  // 游戏时间追踪
  useEffect(() => {
    const timer = setInterval(() => {
      setPlayerState(prev => ({
        ...prev,
        play_time: prev.play_time + 1
      }));
    }, 60000); // 每分钟更新一次

    return () => clearInterval(timer);
  }, []);

  return {
    currentPage,
    showModal,
    currentModal,
    currentEvent,
    playerState,
    examResults,
    isGameOver,
    setCurrentPage,
    openModal,
    closeModal,
    handleStartGame,
    handleBackToHome,
    handleDifficultySelect,
    handleTalentSelect,
    handleEventChoice,
    handleExamComplete,
    handleWeekendActivity,
    handleRestart,
    handleMainMenu,
    advanceGameDay,
    addStatus: addStatusToPlayer,
    availableTalents: talents,
    availableDifficulties: difficultySettings
  };
};
