// 全局类型定义

// 游戏页面类型
export type PageType = 'home' | 'game' | 'talent' | 'exam' | 'ending';

// 成就类型
export interface Achievement {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

// 版本信息类型
export interface Version {
  version: string;
  date: string;
  features: string[];
}

// 用户类型
export interface User {
  name: string | null;
}

// 模态窗口类型
export type ModalType = 'settings' | 'achievements' | 'version' | 'nickname' | 'event';

// 游戏事件相关类型
export interface EventEffect {
  mental?: number;
  health?: number;
  academic?: number;
  social?: number;
  money?: number;
  study_time?: number;
}

export interface EventChoice {
  id: string;
  text: string;
  effect: EventEffect;
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  type: 'summer' | 'military' | 'semester' | 'special';
  choices: EventChoice[];
  effect?: EventEffect;
}

// 天赋相关类型
export interface Talent {
  id: string;
  name: string;
  description: string;
  effect: {
    mental?: number;
    health?: number;
    academic?: number;
    social?: number;
    money?: number;
    study_efficiency?: number;
  };
  cost: number;
}

// 商店物品类型
export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  effect: {
    mental?: number;
    health?: number;
    academic?: number;
    social?: number;
  };
  type: 'consumable' | 'permanent';
}

// 社团类型
export interface Club {
  id: string;
  name: string;
  description: string;
  requirements: {
    academic?: number;
    social?: number;
    health?: number;
  };
  benefits: {
    mental?: number;
    social?: number;
    academic?: number;
    money?: number;
    health?: number;
  };
  time_cost: number;
}

// 周末活动类型
export interface WeekendActivity {
  id: string;
  name: string;
  description: string;
  effect: {
    mental?: number;
    health?: number;
    academic?: number;
    social?: number;
    money?: number;
    study_time?: number;
  };
  time_cost: number;
}

// 难度设置类型
export interface DifficultySettings {
  name: string;
  description: string;
  starting_stats: {
    mental: number;
    health: number;
    academic: number;
    social: number;
    money: number;
  };
  talent_points: number;
  event_frequency: number;
  study_efficiency: number;
  mental_decay: number;
}

// 游戏规则类型
export interface GameRules {
  max_study_time_per_day: number;
  max_weekend_time: number;
  exam_frequency: number;
  event_cooldown: number;
  mental_recovery_rate: number;
  health_recovery_rate: number;
  academic_decay_rate: number;
  social_decay_rate: number;
  money_decay_rate: number;
}

// OI竞赛相关类型
export interface OICompetition {
  id: string;
  name: string;
  level: 'school' | 'city' | 'province' | 'national' | 'international';
  description: string;
  difficulty: number;
  required_skill: number;
  rewards: {
    academic: number;
    social: number;
    money: number;
    talent_points?: number;
  };
  time_cost: number;
  date: string;
}

export interface OITraining {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  effect: {
    academic: number;
    mental: number;
    study_time: number;
  };
  time_cost: number;
  frequency: 'daily' | 'weekly' | 'monthly';
}

// 游戏状态类型
export interface GameStatus {
  id: string;
  name: string;
  description: string;
  type: 'BUFF' | 'DEBUFF' | 'NEUTRAL';
  duration: number; // 以周为单位
  icon: string;
  effectDescription: string;
}

// 玩家状态类型
export interface PlayerState {
  mental: number;
  health: number;
  academic: number;
  social: number;
  money: number;
  study_time: number;
  talent_points: number;
  selected_talents: string[];
  joined_clubs: string[];
  activeStatuses: GameStatus[];
  game_day: number;
  play_time: number;
  difficulty: string;
}

// 考试结果类型
export interface ExamResult {
  subject: string;
  score: number;
  rank: string;
  date: string;
}

// 游戏状态类型
export interface GameState {
  currentPage: PageType;
  showModal: boolean;
  currentModal: ModalType | null;
  currentEvent: GameEvent | null;
  userName: string | null;
  showNameInput: boolean;
  nicknameInput: string;
  achievements: Achievement[];
  versions: Version[];
  playerState: PlayerState;
  examResults: ExamResult[];
  isGameOver: boolean;
}

// 游戏数据类型
export interface GameData {
  achievements: Achievement[];
  versions: Version[];
  events: GameEvent[];
  talents: Talent[];
  clubs: Club[];
  weekendActivities: WeekendActivity[];
  shopItems: ShopItem[];
  oiCompetitions: OICompetition[];
  oiTrainings: OITraining[];
  difficultySettings: DifficultySettings[];
  gameRules: GameRules;
  initialState: GameState;
}

// 游戏结束数据类型
export interface GameEndData {
  finalStats: PlayerState;
  achievements: Achievement[];
  examResults: ExamResult[];
  playTime: number;
  finalRank: {
    rank: string;
    title: string;
    description: string;
  };
}
