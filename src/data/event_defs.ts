// 详细的事件定义（如科技节、新年晚会）
import { GameEvent } from './events';

// 详细事件定义
export const detailedEvents: GameEvent[] = [
  {
    id: 'tech_festival',
    title: '科技节',
    description: '学校举办科技节，有各种有趣的活动和比赛。',
    type: 'special',
    choices: [
      {
        id: 'participate_competition',
        text: '参加编程竞赛',
        effect: { academic: 15, mental: -5, social: 5 }
      },
      {
        id: 'visit_exhibition',
        text: '参观展览',
        effect: { academic: 5, social: 8 }
      },
      {
        id: 'skip',
        text: '不参加',
        effect: { mental: -3 }
      }
    ]
  },
  {
    id: 'new_year_party',
    title: '新年晚会',
    description: '班级举办新年晚会，大家都在准备节目。',
    type: 'special',
    choices: [
      {
        id: 'perform',
        text: '表演节目',
        effect: { social: 15, mental: 10 }
      },
      {
        id: 'organize',
        text: '组织活动',
        effect: { social: 10, mental: -5 }
      },
      {
        id: 'attend',
        text: '只是参加',
        effect: { social: 5, mental: 5 }
      }
    ]
  },
  {
    id: 'midterm_exam',
    title: '期中考试',
    description: '期中考试即将到来，你需要制定复习计划。',
    type: 'semester',
    choices: [
      {
        id: 'intensive_study',
        text: '高强度复习',
        effect: { academic: 20, mental: -15, health: -5, study_time: 60 }
      },
      {
        id: 'regular_study',
        text: '规律复习',
        effect: { academic: 10, mental: -5, study_time: 30 }
      },
      {
        id: 'last_minute',
        text: '临时抱佛脚',
        effect: { academic: 5, mental: -10 }
      }
    ]
  }
];
