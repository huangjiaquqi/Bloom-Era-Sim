// 事件生成器（如随机学习事件、OI事件）
import { GameEvent } from './events';

// 随机学习事件生成器
export const generateStudyEvent = (): GameEvent => {
  const studyTopics = [
    { subject: '数学', difficulty: 'easy' },
    { subject: '物理', difficulty: 'medium' },
    { subject: '化学', difficulty: 'medium' },
    { subject: '英语', difficulty: 'easy' },
    { subject: '语文', difficulty: 'medium' },
    { subject: '生物', difficulty: 'easy' }
  ];

  const randomTopic = studyTopics[Math.floor(Math.random() * studyTopics.length)];
  const studyHours = Math.floor(Math.random() * 3) + 1;

  return {
    id: `study_${randomTopic.subject.toLowerCase()}_${Date.now()}`,
    title: `${randomTopic.subject}学习`,
    description: `你花了${studyHours}小时学习${randomTopic.subject}，感觉如何？`,
    type: 'semester',
    choices: [
      {
        id: 'focus',
        text: '全神贯注',
        effect: {
          academic: randomTopic.difficulty === 'easy' ? 8 : 12,
          mental: -studyHours * 2,
          study_time: studyHours * 60
        }
      },
      {
        id: 'distracted',
        text: '分心走神',
        effect: {
          academic: randomTopic.difficulty === 'easy' ? 3 : 5,
          mental: -studyHours,
          study_time: studyHours * 60
        }
      },
      {
        id: 'give_up',
        text: '半途而废',
        effect: {
          academic: 1,
          mental: -studyHours * 3
        }
      }
    ]
  };
};

// OI事件生成器
export const generateOIEvents = (): GameEvent[] => {
  return [
    {
      id: 'oi_competition',
      title: 'OI竞赛',
      description: '学校组织OI竞赛，你报名参加了。',
      type: 'special',
      choices: [
        {
          id: 'prepare',
          text: '认真准备',
          effect: { academic: 20, mental: -15, study_time: 100 }
        },
        {
          id: 'casual',
          text: '轻松参赛',
          effect: { academic: 5, mental: 5 }
        },
        {
          id: 'skip',
          text: '不参加',
          effect: { mental: -5 }
        }
      ]
    },
    {
      id: 'oi_training',
      title: 'OI训练',
      description: '每周的OI训练时间到了。',
      type: 'semester',
      choices: [
        {
          id: 'attend',
          text: '参加训练',
          effect: { academic: 10, mental: -8, study_time: 60 }
        },
        {
          id: 'skip_training',
          text: '跳过训练',
          effect: { mental: 3, academic: -2 }
        }
      ]
    }
  ];
};

// 随机生成事件
export const generateRandomEvent = (): GameEvent => {
  const generators = [generateStudyEvent];
  const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
  return randomGenerator();
};
