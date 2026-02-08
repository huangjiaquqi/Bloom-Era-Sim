import { useState, useEffect } from 'react';
import HomeView from './components/HomeView';
import TalentView from './components/TalentView';
import ExamView from './components/ExamView';
import GameView from './components/GameView';
import EndingScreen from './components/EndingScreen';
import { NicknameInput } from './components/NicknameInput';
import { SettingsModal } from './components/SettingsModal';
import { AchievementModal } from './components/AchievementModal';
import { AchievementNotification } from './components/AchievementNotification';
import { VersionModal } from './components/VersionModal';
import { AboutModal } from './components/AboutModal';
import BackgroundRenderer from './components/BackgroundRenderer';
import { useGameLogic } from './hooks/useGameLogic';
import { getAchievements, unlockAchievement } from './data/achievements';
import { CategorizedAchievement } from './data/achievements';
import { versions } from './data/versions';
import { ModalType } from './types';

function App() {
  // 使用游戏逻辑钩子
  const {
    currentPage,
    showModal,
    currentModal,
    playerState,
    examResults,
    setCurrentPage,
    openModal,
    closeModal,
    handleDifficultySelect,
    handleTalentSelect,
    handleExamComplete,
    handleRestart,
    handleMainMenu,
    availableTalents
  } = useGameLogic();

  // 状态管理：用户昵称
  const [userName, setUserName] = useState<string | null>(null);
  const [showNameInput, setShowNameInput] = useState(false);
  const [nicknameInput, setNicknameInput] = useState('');
  
  // 状态管理：成就
  const [achievements, setAchievements] = useState(getAchievements(''));
  
  // 状态管理：成就通知
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<CategorizedAchievement | null>(null);
  
  // 状态管理：UI风格
  const [uiStyle, setUiStyle] = useState<string>('default'); // 默认风格
  
  // 当用户昵称变化时，更新成就
  useEffect(() => {
    if (userName) {
      setAchievements(getAchievements(userName));
    }
  }, [userName]);
  
  // 处理成就解锁
  const handleAchievementUnlock = (achievementId: string, difficulty: string) => {
    if (userName) {
      const unlocked = unlockAchievement(userName, achievementId, difficulty);
      if (unlocked) {
        // 更新成就列表
        setAchievements(getAchievements(userName));
        // 找到解锁的成就
        const updatedAchievements = getAchievements(userName);
        const unlockedAchievement = updatedAchievements.find(a => a.id === achievementId);
        if (unlockedAchievement) {
          // 显示通知
          setCurrentNotification(unlockedAchievement);
          setShowNotification(true);
          // 3秒后自动关闭通知
          setTimeout(() => {
            setShowNotification(false);
          }, 3000);
        }
      }
    }
  };
  
  // 监听页面变化，当进入游戏界面时触发成就解锁
  useEffect(() => {
    if (currentPage === 'game' && playerState.difficulty === '现实') {
      handleAchievementUnlock('regular-first', playerState.difficulty);
    }
  }, [currentPage, playerState.difficulty]);

  // 初始化：检查localStorage中的用户昵称
  useEffect(() => {
    const savedName = localStorage.getItem('bloomEraSimUserName');
    if (savedName) {
      setUserName(savedName);
    } else {
      setShowNameInput(true);
    }
  }, []);

  // 处理保存用户昵称
  const handleSaveName = (name: string) => {
    if (name.trim()) {
      setUserName(name.trim());
      localStorage.setItem('bloomEraSimUserName', name.trim());
      setShowNameInput(false);
    }
  };

  // 处理加载游戏
  const handleLoadGame = () => {
    // 这里可以添加加载游戏的逻辑
    setCurrentPage('game');
  };

  // 渲染不同页面
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            onDifficultySelect={handleDifficultySelect}
            onLoadGame={handleLoadGame}
            onStartGame={() => {
              // 成就解锁逻辑已移至useEffect监听currentPage变化时处理
            }}
            userName={userName || ''}
            uiStyle={uiStyle}
            onOpenModal={(modal: string) => openModal(modal as ModalType)}
          />
        );
      case 'talent':
        return (
          <TalentView
            onBack={() => setCurrentPage('home')}
            onContinue={() => setCurrentPage('game')}
            onTalentSelect={handleTalentSelect}
            talents={availableTalents}
            availableTalentPoints={playerState.talent_points}
            selectedTalents={playerState.selected_talents}
            uiStyle={uiStyle}
          />
        );
      case 'exam':
        return (
          <ExamView
            subject="综合"
            difficulty="medium"
            academicLevel={playerState.academic}
            studyTime={playerState.study_time}
            onExamComplete={handleExamComplete}
            onCancel={() => setCurrentPage('game')}
            uiStyle={uiStyle}
          />
        );
      case 'ending':
        return (
          <EndingScreen
            finalStats={playerState}
            achievements={achievements}
            examResults={examResults}
            playTime={playerState.play_time}
            onRestart={handleRestart}
            onMainMenu={handleMainMenu}
            uiStyle={uiStyle}
          />
        );
      case 'game':
        return (
          <GameView 
            onBackToHome={handleMainMenu} 
            uiStyle={uiStyle} 
          />
        );
      default:
        return (
          <HomeView 
            onDifficultySelect={handleDifficultySelect} 
            onLoadGame={handleLoadGame} 
            onStartGame={() => {
              // 成就解锁逻辑已移至useEffect监听currentPage变化时处理
            }}
            userName={userName || ''} 
            uiStyle={uiStyle} 
          />
        );
    }
  };

  return (
    <div className="app-container">
      {/* 使用Three.js背景渲染器 */}
      <BackgroundRenderer uiStyle={uiStyle} />
      
      {/* 全局设置按钮 */}
      <button
        className="global-settings-button"
        onClick={() => openModal('settings')}
        data-tag="按钮"
        aria-label="设置"
      >
        <span className="text-3xl" data-tag="按钮">⚙️</span>
      </button>
      
      {/* 渲染当前页面 */}
      {renderPage()}
      
      {/* 昵称输入窗口 */}
      {showNameInput && (
        <NicknameInput 
          nicknameInput={nicknameInput}
          setNicknameInput={setNicknameInput}
          saveUserName={handleSaveName}
          uiStyle={uiStyle}
        />
      )}
      
      {/* 设置窗口 */}
      {showModal && currentModal === 'settings' && (
        <SettingsModal 
          closeModal={closeModal} 
          uiStyle={uiStyle}
          setUiStyle={setUiStyle}
        />
      )}
      
      {/* 成就窗口 */}
      {showModal && currentModal === 'achievements' && (
        <AchievementModal 
          achievements={achievements} 
          closeModal={closeModal} 
          uiStyle={uiStyle}
        />
      )}
      
      {/* 版本窗口 */}
      {showModal && currentModal === 'version' && (
        <VersionModal 
          versions={versions} 
          closeModal={closeModal} 
          uiStyle={uiStyle}
        />
      )}
      
      {/* 简介窗口 */}
      {showModal && (currentModal as string) === 'about' && (
        <AboutModal 
          closeModal={closeModal} 
          uiStyle={uiStyle}
        />
      )}
      
      {/* 成就解锁通知 */}
      {showNotification && currentNotification && (
        <AchievementNotification 
          achievement={currentNotification} 
          onClose={() => setShowNotification(false)} 
          uiStyle={uiStyle}
        />
      )}
      
      <style>{`
        .app-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        

        
        .global-settings-button {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: transparent;
          border: none;
          z-index: 10;
          cursor: pointer;
          padding: 8px;
          transition: transform 0.3s ease;
        }
        
        .global-settings-button:hover {
          transform: scale(1.1);
        }
        
        .text-3xl {
          font-size: 1.8rem;
        }
      `}</style>
    </div>
  );
}

export default App