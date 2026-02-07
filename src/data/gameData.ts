// 游戏核心数据
import { GameData, GameState, PlayerState } from '../types';
import { getAchievements } from './achievements';
import { versions } from './versions';

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
  game_day: 1,
  play_time: 0,
  difficulty: '普通'
};

// 初始游戏状态
const initialState: GameState = {
  currentPage: 'home',
  showModal: false,
  currentModal: null,
  currentEvent: null,
  userName: null,
  showNameInput: false,
  nicknameInput: '',
  achievements: getAchievements(''),
  versions,
  playerState: initialPlayerState,
  examResults: [],
  isGameOver: false
};

// 游戏数据
export const gameData: GameData = {
  achievements: getAchievements(''),
  versions,
  events: [],
  talents: [],
  clubs: [],
  weekendActivities: [],
  shopItems: [],
  oiCompetitions: [],
  oiTrainings: [],
  difficultySettings: [],
  gameRules: {
    max_study_time_per_day: 480,
    max_weekend_time: 600,
    exam_frequency: 30,
    event_cooldown: 3,
    mental_recovery_rate: 5,
    health_recovery_rate: 3,
    academic_decay_rate: 1,
    social_decay_rate: 1,
    money_decay_rate: 5
  },
  initialState
};
