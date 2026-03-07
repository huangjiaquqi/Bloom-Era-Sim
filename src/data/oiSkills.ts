// 信息竞赛属性系统 - OI竞赛相关属性定义

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

// OI能力属性接口
export interface OIAbilities {
  // 基础能力
  thinking: number;              // 思维，影响思考成功率
  coding: number;                // 代码，减少写代码时间
  carefulness: number;           // 细心，增加成功率，降低出错率
  experience: number;            // 经验，增加查看模糊题目属性的概率
  quickness: number;             // 迅捷，减少思考时间
  mental: number;                // 心理素质，减少心态下降
  determination: number;         // 决心，用于商店购买
  mood: number;                  // 心态，影响所有操作成功率（0-32）
  
  // 学生属性 - 基础能力
  thinkingAbility: number;       // 思维能力：决定解题思路的形成能力
  codingAbility: number;         // 编码能力：决定代码实现的速度和准确性
  psychologicalQuality: number;  // 心理素质：影响比赛发挥的稳定性
  
  // 学生属性 - 知识结构
  dataStructureKnowledge: number;   // 数据结构知识：数据结构相关题目得分
  graphTheoryKnowledge: number;      // 图论知识：图论相关题目得分
  stringKnowledge: number;            // 字符串知识：字符串相关题目得分
  mathKnowledge: number;              // 数学知识：数学相关题目得分
  dpKnowledge: number;                // 动态规划知识：动态规划相关题目得分
  
  // 学生属性 - 状态属性
  pressure: number;               // 压力值：过高会降低效率、增加退队风险
  comfort: number;                // 舒适度：影响压力恢复速度
  sickWeeks: number;              // 生病周数：生病时训练效率大幅降低
  
  // 学生属性 - 其他属性
  burnoutWeeks: number;           // 倦怠周数：连续高压的周数
  depressionCount: number;        // 抑郁次数：抑郁状态累计次数
  highPressureWeeks: number;      // 高压周数：压力过高的周数
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

// 默认初始值（所有能力属性都是50）
export const DEFAULT_OI_ABILITIES: OIAbilities = {
  thinking: 50,
  coding: 50,
  carefulness: 50,
  experience: 50,
  quickness: 50,
  mental: 50,
  determination: 50,
  mood: 16, // 中间值
  
  thinkingAbility: 50,
  codingAbility: 50,
  psychologicalQuality: 50,
  
  dataStructureKnowledge: 50,
  graphTheoryKnowledge: 50,
  stringKnowledge: 50,
  mathKnowledge: 50,
  dpKnowledge: 50,
  
  pressure: 20, // 初始压力较低
  comfort: 50,
  sickWeeks: 0,
  
  burnoutWeeks: 0,
  depressionCount: 0,
  highPressureWeeks: 0,
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

// OI能力显示名称
export const OI_ABILITY_NAMES: Record<keyof OIAbilities, string> = {
  thinking: '思维',
  coding: '代码',
  carefulness: '细心',
  experience: '经验',
  quickness: '迅捷',
  mental: '心理素质',
  determination: '决心',
  mood: '心态',
  
  thinkingAbility: '思维能力',
  codingAbility: '编码能力',
  psychologicalQuality: '心理素质',
  
  dataStructureKnowledge: '数据结构知识',
  graphTheoryKnowledge: '图论知识',
  stringKnowledge: '字符串知识',
  mathKnowledge: '数学知识',
  dpKnowledge: '动态规划知识',
  
  pressure: '压力值',
  comfort: '舒适度',
  sickWeeks: '生病周数',
  
  burnoutWeeks: '倦怠周数',
  depressionCount: '抑郁次数',
  highPressureWeeks: '高压周数',
};

// 计算OI综合能力
export const calculateOIOverallSkills = (skills: OIQuestionTypeSkills, abilities: OIAbilities): OIOverallSkills => {
  // 简单平均计算综合能力
  const questionTypeAvg = Math.round(
    (skills.dynamicProgramming + 
     skills.dataStructure + 
     skills.combinatorics + 
     skills.stringAlgo + 
     skills.graphTheory + 
     skills.thinkingMisc) / 6
  );
  
  const abilityAvg = Math.round(
    (abilities.thinking + 
     abilities.coding + 
     abilities.carefulness + 
     abilities.experience + 
     abilities.quickness) / 5
  );
  
  return {
    overall: Math.round((questionTypeAvg + abilityAvg) / 2)
  };
};
