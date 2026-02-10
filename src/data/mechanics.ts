// 游戏机制定义（天赋、商店物品、社团、周末活动）

// 天赋定义
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

// 商店物品定义
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

// 社团定义
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

// 周末活动定义
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

// 天赋列表
export const talents: Talent[] = [
  {
    id: 'quick_learner',
    name: '快速学习',
    description: '学习效率提高20%',
    effect: { study_efficiency: 0.2 },
    cost: 3
  },
  {
    id: 'mental_strength',
    name: '意志力强',
    description: '心态下降速度减慢',
    effect: { mental: 10 },
    cost: 2
  },
  {
    id: 'social_butterfly',
    name: '社交达人',
    description: '社交活动效果增强',
    effect: { social: 15 },
    cost: 2
  },
  {
    id: 'healthy_lifestyle',
    name: '健康生活',
    description: '健康值自然恢复速度加快',
    effect: { health: 10 },
    cost: 2
  },
  {
    id: 'frugal',
    name: '勤俭节约',
    description: '花钱更少',
    effect: { money: 50 },
    cost: 1
  },
  // 负面天赋 - 增加天赋值
  {
    id: 'procrastination',
    name: '拖延症',
    description: '学习和社交能力下降，但获得额外天赋点',
    effect: { academic: -10, social: -10 },
    cost: -2
  },
  {
    id: 'laziness',
    name: '懒惰',
    description: '健康和心态下降，但获得额外天赋点',
    effect: { health: -10, mental: -10 },
    cost: -2
  },
  {
    id: 'spendthrift',
    name: '挥霍无度',
    description: '金钱减少，但获得额外天赋点',
    effect: { money: -100 },
    cost: -1
  },
  {
    id: 'perfectionist',
    name: '完美主义',
    description: '心态波动较大，但获得额外天赋点',
    effect: { mental: -15 },
    cost: -3
  }
];

// 商店物品列表
export const shopItems: ShopItem[] = [
  {
    id: 'energy_drink',
    name: '能量饮料',
    description: '临时提高精神状态',
    price: 20,
    effect: { mental: 15 },
    type: 'consumable'
  },
  {
    id: 'study_guide',
    name: '学习指南',
    description: '提高学习效率',
    price: 100,
    effect: { academic: 10 },
    type: 'permanent'
  },
  {
    id: 'gym_membership',
    name: '健身房会员',
    description: '提高健康值',
    price: 150,
    effect: { health: 20 },
    type: 'permanent'
  },
  {
    id: 'social_event_ticket',
    name: '社交活动门票',
    description: '提高社交能力',
    price: 80,
    effect: { social: 20 },
    type: 'consumable'
  }
];

// 社团列表
export const clubs: Club[] = [
  {
    id: 'coding_club',
    name: '编程社',
    description: '学习编程技巧，参加比赛',
    requirements: { academic: 60 },
    benefits: { academic: 10, social: 5 },
    time_cost: 10
  },
  {
    id: 'sports_club',
    name: '体育社',
    description: '锻炼身体，增强体质',
    requirements: { health: 50 },
    benefits: { health: 15, social: 10 },
    time_cost: 15
  },
  {
    id: 'literature_club',
    name: '文学社',
    description: '阅读写作，提高语文水平',
    requirements: {},
    benefits: { mental: 10, academic: 5 },
    time_cost: 8
  },
  {
    id: 'science_club',
    name: '科技社',
    description: '进行科学实验，参加科技节',
    requirements: { academic: 70 },
    benefits: { academic: 15, social: 5 },
    time_cost: 12
  }
];

// 周末活动列表
export const weekendActivities: WeekendActivity[] = [
  {
    id: 'study',
    name: '学习',
    description: '周末认真学习',
    effect: { academic: 15, mental: -10, study_time: 80 },
    time_cost: 8
  },
  {
    id: 'exercise',
    name: '运动',
    description: '周末进行体育锻炼',
    effect: { health: 15, mental: 10 },
    time_cost: 6
  },
  {
    id: 'socialize',
    name: '社交',
    description: '周末和朋友聚会',
    effect: { social: 15, money: -50, mental: 5 },
    time_cost: 4
  },
  {
    id: 'rest',
    name: '休息',
    description: '周末好好休息',
    effect: { mental: 20, health: 10 },
    time_cost: 10
  },
  {
    id: 'part_time',
    name: '兼职',
    description: '周末打工赚钱',
    effect: { money: 100, mental: -5, health: -5 },
    time_cost: 8
  }
];
