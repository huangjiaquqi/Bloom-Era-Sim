// 常量配置（难度预设、游戏规则参数）

// 难度预设
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

// 游戏规则参数
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

// 难度设置列表
export const difficultySettings: DifficultySettings[] = [
  {
    name: '普通',
    description: '平衡的游戏体验，适合大多数玩家',
    starting_stats: {
      mental: 80,
      health: 80,
      academic: 60,
      social: 60,
      money: 300
    },
    talent_points: 10,
    event_frequency: 1.0,
    study_efficiency: 1.0,
    mental_decay: 1.0
  },
  {
    name: '中等',
    description: '挑战性较高，需要精心规划',
    starting_stats: {
      mental: 60,
      health: 60,
      academic: 50,
      social: 50,
      money: 200
    },
    talent_points: 5,
    event_frequency: 1.3,
    study_efficiency: 0.8,
    mental_decay: 1.2
  },
  {
    name: '现实',
    description: '极限挑战，适合经验丰富的玩家',
    starting_stats: {
      mental: 40,
      health: 40,
      academic: 40,
      social: 40,
      money: 100
    },
    talent_points: 2,
    event_frequency: 1.5,
    study_efficiency: 0.6,
    mental_decay: 1.5
  }
];

// 游戏规则配置
export const gameRules: GameRules = {
  max_study_time_per_day: 480, // 8小时，单位分钟
  max_weekend_time: 600, // 10小时，单位分钟
  exam_frequency: 30, // 每30天一次考试
  event_cooldown: 3, // 事件冷却时间，单位天
  mental_recovery_rate: 5, // 每天精神恢复量
  health_recovery_rate: 3, // 每天健康恢复量
  academic_decay_rate: 1, // 每天学术值衰减量
  social_decay_rate: 1, // 每天社交值衰减量
  money_decay_rate: 5 // 每天花费的钱
};

// 考试分数计算参数
export const examParameters = {
  base_score: 60,
  study_time_weight: 0.05,
  academic_bonus: 0.3,
  difficulty_penalty: 0.1
};

// 成就解锁条件
export const achievementConditions = {
  max_study_time: 10000, // 累计学习时间达到10000分钟
  max_academic: 150, // 学术值达到150
  max_social: 150, // 社交值达到150
  exam_rank: ['A+', 'A', 'B+'], // 考试排名达到要求
  clubs_joined: 3, // 加入3个社团
  events_participated: 20, // 参与20个事件
  money_earned: 5000, // 赚取5000元
  talents_unlocked: 5 // 解锁5个天赋
};

// UI配置
export const uiConfig = {
  modal_animation_duration: 300, // 模态框动画持续时间，单位毫秒
  color_change_speed: 2000, // 颜色变化速度，单位毫秒
  background_blur_strength: 10, // 背景模糊强度
  window_border_radius: 12, // 窗口边框圆角
  button_hover_scale: 1.05, // 按钮悬停缩放比例
};
