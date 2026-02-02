// 定义游戏事件（暑假、军训、学期事件）
export interface GameEvent {
  id: string;
  title: string;
  description: string;
  type: 'summer' | 'military' | 'semester' | 'special';
  choices: EventChoice[];
  effect?: EventEffect;
}

export interface EventChoice {
  id: string;
  text: string;
  effect: EventEffect;
}

export interface EventEffect {
  mental?: number;
  health?: number;
  academic?: number;
  social?: number;
  money?: number;
  study_time?: number;
}

// 游戏事件列表
export const gameEvents: GameEvent[] = [
  {
    id: 'summer_start',
    title: '暑假开始',
    description: '期待已久的暑假终于开始了，你打算如何度过？',
    type: 'summer',
    choices: [
      {
        id: 'study',
        text: '认真学习',
        effect: { academic: 10, mental: -5, study_time: 40 }
      },
      {
        id: 'relax',
        text: '放松休息',
        effect: { mental: 15, health: 5 }
      },
      {
        id: 'social',
        text: '社交活动',
        effect: { social: 10, money: -50 }
      }
    ]
  },
  {
    id: 'military_training',
    title: '军训',
    description: '高中生活的第一课，军训开始了。',
    type: 'military',
    choices: [
      {
        id: 'participate',
        text: '积极参与',
        effect: { health: 10, mental: -10, social: 5 }
      },
      {
        id: 'slack',
        text: '摸鱼划水',
        effect: { mental: -5, social: -5 }
      }
    ]
  },
  {
    id: 'semester_start',
    title: '新学期开始',
    description: '新学期新气象，你制定了什么计划？',
    type: 'semester',
    choices: [
      {
        id: 'study_hard',
        text: '努力学习',
        effect: { academic: 5, study_time: 20 }
      },
      {
        id: 'join_club',
        text: '参加社团',
        effect: { social: 8, money: -30 }
      }
    ]
  }
];
