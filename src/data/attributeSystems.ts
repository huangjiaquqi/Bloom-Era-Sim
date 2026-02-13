// 属性系统数据

/**
 * 感知值计算系统
 */
export interface PerceptionSystem {
  baseFormula: string;
  description: string;
  cognitiveBias: {
    description: string;
    rules: {
      mindsetEqual50: string;
      mindsetBelow50: string;
      mindsetAbove50: string;
      talentEffect: string;
    };
  };
  randomNoise: {
    description: string;
    rules: {
      lowExperience: string;
      highExperience: string;
    };
  };
}

/**
 * 感知值计算系统配置
 */
export const perceptionSystem: PerceptionSystem = {
  baseFormula: '感知值 = 真实值 + 认知偏差 + 随机波动',
  description: '你在面板上看到的文字描述是基于"感知值"而非"真实值"生成的。',
  cognitiveBias: {
    description: '你的心态决定了你如何看待自己:',
    rules: {
      mindsetEqual50: '心态 = 50: 认知准确。',
      mindsetBelow50: '心态 < 50: 冒名者综合征。你会低估自己的能力，觉得"我不行"。',
      mindsetAbove50: '心态 > 50: 达克效应。你会高估自己的能力，觉得"我无敌了"。',
      talentEffect: '对于学科，天赋越高，也越容易产生盲目自信。',
    },
  },
  randomNoise: {
    description: '你的经验决定了你对自己认知的稳定性:',
    rules: {
      lowExperience: '经验越低，你对自己的判断越不稳定，今天觉得"行"，明天觉得"不行"。',
      highExperience: '经验越高，波动越小，你对自己的定位越清晰。',
    },
  },
};

/**
 * 五维属性等级
 */
export interface AttributeLevel {
  name: string;
  min: number;
  max?: number;
  color: string;
}

/**
 * 五维属性系统
 * 适用于：心态、经验、魅力、健康、运气
 */
export const fiveDimensionAttributes: AttributeLevel[] = [
  {
    name: '糟糕透顶',
    min: 0,
    max: 19,
    color: '#FFB6C1', // 浅粉色
  },
  {
    name: '不太妙',
    min: 20,
    max: 39,
    color: '#FFDAB9', // 浅橙色
  },
  {
    name: '平平无奇',
    min: 40,
    max: 59,
    color: '#E0FFFF', // 浅蓝色
  },
  {
    name: '感觉良好',
    min: 60,
    max: 79,
    color: '#98FB98', // 浅绿色
  },
  {
    name: '充满自信',
    min: 80,
    max: 99,
    color: '#87CEFA', // 天蓝色
  },
  {
    name: '超凡脱俗',
    min: 100,
    color: '#FFFACD', // 浅黄色
  },
];

/**
 * 学习效率等级
 * 普通模式下基础值为14，范围约-5 ~ 25
 */
export const learningEfficiencyLevels: AttributeLevel[] = [
  {
    name: '极度涣散',
    min: -5,
    max: -1,
    color: '#FFB6C1', // 浅粉色
  },
  {
    name: '心不在焉',
    min: 0,
    max: 5,
    color: '#FFDAB9', // 浅橙色
  },
  {
    name: '普普通通',
    min: 5,
    max: 10,
    color: '#E0FFFF', // 浅蓝色
  },
  {
    name: '专注',
    min: 10,
    max: 15,
    color: '#87CEFA', // 天蓝色
  },
  {
    name: '高效',
    min: 15,
    max: 20,
    color: '#98FB98', // 浅绿色
  },
  {
    name: '心流',
    min: 20,
    max: 25,
    color: '#FFFACD', // 浅黄色
  },
];

/**
 * 学科掌握等级
 */
export const subjectMasteryLevels: AttributeLevel[] = [
  {
    name: '一窍不通',
    min: 0,
    max: 9,
    color: '#FFB6C1', // 浅粉色
  },
  {
    name: '略懂皮毛',
    min: 10,
    max: 24,
    color: '#FFDAB9', // 浅橙色
  },
  {
    name: '马马虎虎',
    min: 25,
    max: 44,
    color: '#E0FFFF', // 浅蓝色
  },
  {
    name: '渐入佳境',
    min: 45,
    max: 64,
    color: '#87CEFA', // 天蓝色
  },
  {
    name: '得心应手',
    min: 65,
    max: 84,
    color: '#98FB98', // 浅绿色
  },
  {
    name: '登峰造极',
    min: 85,
    color: '#FFFACD', // 浅黄色
  },
];

/**
 * 根据属性值获取对应的等级
 * @param value 属性值
 * @param levels 等级数组
 * @returns 对应的等级
 */
export function getAttributeLevel(value: number, levels: AttributeLevel[]): AttributeLevel {
  return levels.find(level => {
    if (level.max !== undefined) {
      return value >= level.min && value <= level.max;
    } else {
      return value >= level.min;
    }
  }) || levels[0];
}

/**
 * 获取五维属性等级
 * @param value 属性值
 * @returns 对应的等级
 */
export function getFiveDimensionLevel(value: number): AttributeLevel {
  return getAttributeLevel(value, fiveDimensionAttributes);
}

/**
 * 获取学习效率等级
 * @param value 效率值
 * @returns 对应的等级
 */
export function getLearningEfficiencyLevel(value: number): AttributeLevel {
  return getAttributeLevel(value, learningEfficiencyLevels);
}

/**
 * 获取学科掌握等级
 * @param value 掌握值
 * @returns 对应的等级
 */
export function getSubjectMasteryLevel(value: number): AttributeLevel {
  return getAttributeLevel(value, subjectMasteryLevels);
}
