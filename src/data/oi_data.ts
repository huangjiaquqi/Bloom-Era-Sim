// OI竞赛相关数据
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

export interface OIProblem {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'difficult';
  topics: string[];
  time_limit: number;
  memory_limit: number;
  score: number;
}

// OI竞赛列表
export const oiCompetitions: OICompetition[] = [
  {
    id: 'school_oi',
    name: '校内OI选拔赛',
    level: 'school',
    description: '学校组织的OI选拔赛，选拔参加市级比赛的选手',
    difficulty: 3,
    required_skill: 60,
    rewards: {
      academic: 20,
      social: 10,
      money: 100
    },
    time_cost: 180,
    date: '2024-10-15'
  },
  {
    id: 'city_oi',
    name: '市级OI竞赛',
    level: 'city',
    description: '市级OI竞赛，竞争激烈',
    difficulty: 5,
    required_skill: 80,
    rewards: {
      academic: 30,
      social: 15,
      money: 200
    },
    time_cost: 240,
    date: '2024-11-20'
  },
  {
    id: 'province_oi',
    name: '省级OI竞赛',
    level: 'province',
    description: '省级OI竞赛，高手云集',
    difficulty: 7,
    required_skill: 100,
    rewards: {
      academic: 40,
      social: 20,
      money: 500,
      talent_points: 1
    },
    time_cost: 300,
    date: '2025-01-10'
  },
  {
    id: 'national_oi',
    name: '全国OI竞赛',
    level: 'national',
    description: '全国OI竞赛，顶级赛事',
    difficulty: 9,
    required_skill: 120,
    rewards: {
      academic: 50,
      social: 30,
      money: 1000,
      talent_points: 2
    },
    time_cost: 360,
    date: '2025-03-15'
  },
  {
    id: 'international_oi',
    name: '国际OI竞赛',
    level: 'international',
    description: '国际OI竞赛，全球顶尖选手对决',
    difficulty: 10,
    required_skill: 150,
    rewards: {
      academic: 60,
      social: 40,
      money: 2000,
      talent_points: 3
    },
    time_cost: 420,
    date: '2025-07-20'
  }
];

// OI训练列表
export const oiTrainings: OITraining[] = [
  {
    id: 'daily_practice',
    name: '每日刷题',
    description: '每天刷几道OI题，保持手感',
    difficulty: 2,
    effect: {
      academic: 5,
      mental: -5,
      study_time: 60
    },
    time_cost: 60,
    frequency: 'daily'
  },
  {
    id: 'weekly_contest',
    name: '每周模拟赛',
    description: '每周参加一次模拟赛，提高实战能力',
    difficulty: 4,
    effect: {
      academic: 15,
      mental: -15,
      study_time: 180
    },
    time_cost: 180,
    frequency: 'weekly'
  },
  {
    id: 'monthly_review',
    name: '月度总结',
    description: '每月总结学习成果，查漏补缺',
    difficulty: 3,
    effect: {
      academic: 10,
      mental: 5,
      study_time: 120
    },
    time_cost: 120,
    frequency: 'monthly'
  }
];

// OI题目示例
export const oiProblems: OIProblem[] = [
  {
    id: 'oi_problem_1',
    title: 'A+B Problem',
    description: '计算两个数的和',
    difficulty: 'easy',
    topics: ['基础'],
    time_limit: 1,
    memory_limit: 128,
    score: 100
  },
  {
    id: 'oi_problem_2',
    title: '最大子数组和',
    description: '找出数组中最大的连续子数组和',
    difficulty: 'medium',
    topics: ['动态规划'],
    time_limit: 1,
    memory_limit: 128,
    score: 200
  },
  {
    id: 'oi_problem_3',
    title: '最短路径',
    description: '计算图中两点之间的最短路径',
    difficulty: 'hard',
    topics: ['图论', '最短路径'],
    time_limit: 1,
    memory_limit: 256,
    score: 300
  },
  {
    id: 'oi_problem_4',
    title: '线段树优化',
    description: '使用线段树解决区间查询问题',
    difficulty: 'difficult',
    topics: ['数据结构', '线段树'],
    time_limit: 1,
    memory_limit: 256,
    score: 400
  }
];
