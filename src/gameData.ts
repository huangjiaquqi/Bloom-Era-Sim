import { Phase, GameEvent } from './types';

export const PHASE_EVENTS: Record<Phase, GameEvent[]> = {
  INIT: [
    {
      id: 'init_start',
      name: '青春的开始',
      description: '你即将开始一段全新的青春旅程，从初中到高中，你将面临各种选择和挑战。',
      phase: 'INIT',
      choices: [
        {
          text: '开始新的旅程',
          outcomes: {
            stats: {
              心态: 250,
              健康: 250,
              效率: 250,
              经验: 0,
              金钱: 1000,
              运气: 250,
              魅力: 250
            },
            nextEvent: 'init_character'
          }
        }
      ]
    },
    {
      id: 'init_character',
      name: '性格设定',
      description: '请选择你的性格特点，这将影响你在游戏中的初始属性和事件触发。',
      phase: 'INIT',
      choices: [
        {
          text: '勤奋好学',
          outcomes: {
            stats: {
              效率: 50,
              经验: 30,
              心态: -20
            },
            talents: ['hard_working']
          }
        },
        {
          text: '活泼开朗',
          outcomes: {
            stats: {
              心态: 50,
              魅力: 30,
              运气: 20
            },
            talents: ['outgoing']
          }
        },
        {
          text: '多才多艺',
          outcomes: {
            stats: {
              魅力: 40,
              经验: 20
            },
            talents: ['talented']
          }
        },
        {
          text: '运动健将',
          outcomes: {
            stats: {
              健康: 50,
              效率: 20
            },
            talents: ['athletic']
          }
        }
      ]
    }
  ],
  JUNIOR_PRE_SUMMER: [],
  JUNIOR_SUMMER: [
    {
      id: 'summer_vacation',
      name: '暑假计划',
      description: '初中的第一个暑假到来了，你打算如何度过这段时光？',
      phase: 'JUNIOR_SUMMER',
      choices: [
        {
          text: '参加补习班',
          outcomes: {
            stats: {
              经验: 40,
              效率: 20,
              心态: -30,
              金钱: -500
            }
          }
        },
        {
          text: '旅游放松',
          outcomes: {
            stats: {
              心态: 50,
              健康: 20,
              运气: 30,
              金钱: -800
            }
          }
        },
        {
          text: '学习特长',
          outcomes: {
            stats: {
              经验: 30,
              魅力: 20,
              金钱: -300
            }
          }
        },
        {
          text: '打工赚钱',
          outcomes: {
            stats: {
              金钱: 600,
              经验: 20,
              健康: -20,
              心态: -10
            }
          }
        }
      ]
    }
  ],
  JUNIOR_FIRST: [
    {
      id: 'first_day',
      name: '初中第一天',
      description: '今天是你初中生活的第一天，你满怀期待地走进了新校园。',
      phase: 'JUNIOR_FIRST',
      choices: [
        {
          text: '主动认识新同学',
          outcomes: {
            stats: {
              魅力: 30,
              心态: 20,
              运气: 10
            }
          }
        },
        {
          text: '专注学习',
          outcomes: {
            stats: {
              经验: 30,
              效率: 20
            }
          }
        },
        {
          text: '观察周围环境',
          outcomes: {
            stats: {
              心态: 10,
              运气: 20
            }
          }
        }
      ]
    },
    {
      id: 'club_recruitment',
      name: '社团招新',
      description: '学校社团开始招新了，你对哪些社团感兴趣？',
      phase: 'JUNIOR_FIRST',
      choices: [
        {
          text: '加入文学社',
          outcomes: {
            clubs: { join: ['literature'] },
            stats: {
              经验: 20,
              心态: 10
            }
          }
        },
        {
          text: '加入体育社团',
          outcomes: {
            clubs: { join: ['basketball'] },
            stats: {
              健康: 20,
              效率: -10
            }
          }
        },
        {
          text: '加入艺术社团',
          outcomes: {
            clubs: { join: ['anime'] },
            stats: {
              魅力: 20,
              心态: 15
            }
          }
        },
        {
          text: '暂时不加入',
          outcomes: {
            stats: {
              心态: 10
            }
          }
        }
      ]
    }
  ],
  JUNIOR_SECOND: [],
  JUNIOR_THIRD: [],
  SENIOR_PRE_SUMMER: [],
  SENIOR_SUMMER: [],
  SENIOR_FIRST: [],
  SENIOR_SECOND: [],
  SENIOR_THIRD: [],
  EXAM: [],
  GRADUATION: [],
  MILITARY: [],
  SUMMER: [],
  WINTER: [],
  END: []
};
