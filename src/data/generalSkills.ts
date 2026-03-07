// 常规属性系统 - 非学术相关属性定义

// 常规属性接口
export interface GeneralAbilities {
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
  
  // 学生属性 - 状态属性
  pressure: number;               // 压力值：过高会降低效率、增加退队风险
  comfort: number;                // 舒适度：影响压力恢复速度
  sickWeeks: number;              // 生病周数：生病时训练效率大幅降低
  
  // 学生属性 - 其他属性
  burnoutWeeks: number;           // 倦怠周数：连续高压的周数
  depressionCount: number;        // 抑郁次数：抑郁状态累计次数
  highPressureWeeks: number;      // 高压周数：压力过高的周数
}

// 默认初始值（所有能力属性都是50）
export const DEFAULT_GENERAL_ABILITIES: GeneralAbilities = {
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
  
  pressure: 20, // 初始压力较低
  comfort: 50,
  sickWeeks: 0,
  
  burnoutWeeks: 0,
  depressionCount: 0,
  highPressureWeeks: 0,
};

// 常规属性显示名称
export const GENERAL_ABILITY_NAMES: Record<keyof GeneralAbilities, string> = {
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
  
  pressure: '压力值',
  comfort: '舒适度',
  sickWeeks: '生病周数',
  
  burnoutWeeks: '倦怠周数',
  depressionCount: '抑郁次数',
  highPressureWeeks: '高压周数',
};
