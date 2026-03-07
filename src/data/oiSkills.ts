// 信息竞赛属性系统 - OI竞赛学术相关属性定义

// OI题型能力值接口
export interface OIQuestionTypeSkills {
  // 解题能力分类
  dynamicProgramming: number;     // 动态规划
  dataStructure: number;         // 数据结构
  combinatorics: number;         // 组合数学
  stringAlgo: number;            // 字符串
  graphTheory: number;           // 图论
  thinkingMisc: number;          // 思维/杂项
  
  // 算法细分属性
  dp: number;                    // 动态规划
  ds: number;                    // 数据结构
  string: number;                // 字符串
  graph: number;                 // 图论
  combinatoricsAlgo: number;     // 组合计数
  geometry: number;              // 计算几何
  linearAlgebra: number;         // 线性代数
  numberTheory: number;          // 数论
  gameTheory: number;            // 博弈论
  construction: number;          // 构造
  polynomial: number;            // 多项式
  adhoc: number;                 // 杂题
}

// OI学术知识结构接口
export interface OIKnowledge {
  dataStructureKnowledge: number;   // 数据结构知识：数据结构相关题目得分
  graphTheoryKnowledge: number;      // 图论知识：图论相关题目得分
  stringKnowledge: number;            // 字符串知识：字符串相关题目得分
  mathKnowledge: number;              // 数学知识：数学相关题目得分
  dpKnowledge: number;                // 动态规划知识：动态规划相关题目得分
}

// OI综合能力计算接口
export interface OIOverallSkills {
  // 综合OI能力（由各分项能力计算得出）
  overall: number;
}

// 默认初始值（所有题型能力值都是50）
export const DEFAULT_OI_SKILLS: OIQuestionTypeSkills = {
  dynamicProgramming: 50,
  dataStructure: 50,
  combinatorics: 50,
  stringAlgo: 50,
  graphTheory: 50,
  thinkingMisc: 50,
  
  dp: 50,
  ds: 50,
  string: 50,
  graph: 50,
  combinatoricsAlgo: 50,
  geometry: 50,
  linearAlgebra: 50,
  numberTheory: 50,
  gameTheory: 50,
  construction: 50,
  polynomial: 50,
  adhoc: 50,
};

// 默认初始值（所有知识属性都是50）
export const DEFAULT_OI_KNOWLEDGE: OIKnowledge = {
  dataStructureKnowledge: 50,
  graphTheoryKnowledge: 50,
  stringKnowledge: 50,
  mathKnowledge: 50,
  dpKnowledge: 50,
};

// OI题型显示名称
export const OI_QUESTION_TYPE_NAMES: Record<keyof OIQuestionTypeSkills, string> = {
  dynamicProgramming: '动态规划',
  dataStructure: '数据结构',
  combinatorics: '组合数学',
  stringAlgo: '字符串',
  graphTheory: '图论',
  thinkingMisc: '思维/杂项',
  
  dp: '动态规划',
  ds: '数据结构',
  string: '字符串',
  graph: '图论',
  combinatoricsAlgo: '组合计数',
  geometry: '计算几何',
  linearAlgebra: '线性代数',
  numberTheory: '数论',
  gameTheory: '博弈论',
  construction: '构造',
  polynomial: '多项式',
  adhoc: '杂题',
};

// OI知识显示名称
export const OI_KNOWLEDGE_NAMES: Record<keyof OIKnowledge, string> = {
  dataStructureKnowledge: '数据结构知识',
  graphTheoryKnowledge: '图论知识',
  stringKnowledge: '字符串知识',
  mathKnowledge: '数学知识',
  dpKnowledge: '动态规划知识',
};
