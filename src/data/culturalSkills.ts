// 文化课属性系统 - 题型和学科能力值定义

// 题型能力值接口
export interface CulturalQuestionTypeSkills {
  // 语文题型
  modernReading1: number;      // 现代文阅读Ⅰ
  modernReading2: number;      // 现代文阅读Ⅱ
  classicalChinese: number;     // 文言文阅读
  ancientPoetry: number;        // 古代诗歌阅读
  famousQuotes: number;         // 名篇名句默写
  languageUse: number;          // 语言文字运用
  writingChinese: number;       // 写作（语文）
  
  // 数学题型
  singleChoiceMath: number;     // 单选题（数学）
  multipleChoiceMath: number;   // 多选题（数学）
  fillBlankMath: number;        // 填空题（数学）
  problemSolving: number;       // 解答题（数学）
  
  // 英语题型
  listeningEnglish: number;      // 听力（英语）
  readingEnglish: number;        // 阅读理解（英语）
  sevenChooseFive: number;       // 七选五（英语）
  clozeTest: number;             // 完形填空/语法填空
  errorCorrection: number;       // 短文改错
  writingEnglish: number;        // 写作（英语）
  
  // 物理题型
  choicePhysics: number;         // 选择题（物理）
  experimentPhysics: number;     // 实验题（物理）
  calculationPhysics: number;    // 计算题（物理）
  
  // 理科综合题型（选择/非选择）
  choiceScience: number;         // 选择题（理综通用）
  nonChoiceScience: number;      // 非选择题（理综通用）
  
  // 文科综合题型（选择/非选择）
  choiceLiberal: number;         // 选择题（文综通用）
  nonChoiceLiberal: number;      // 非选择题（文综通用）
}

// 学科能力值接口
export interface CulturalSubjectAbilities {
  chinese: number;      // 语文
  math: number;         // 数学
  english: number;      // 英语
  physics: number;      // 物理
  chemistry: number;    // 化学
  biology: number;      // 生物
  history: number;      // 历史
  politics: number;     // 政治
  geography: number;    // 地理
}

// 默认初始值（所有题型能力值都是50）
export const DEFAULT_CULTURAL_SKILLS: CulturalQuestionTypeSkills = {
  modernReading1: 50,
  modernReading2: 50,
  classicalChinese: 50,
  ancientPoetry: 50,
  famousQuotes: 50,
  languageUse: 50,
  writingChinese: 50,
  
  singleChoiceMath: 50,
  multipleChoiceMath: 50,
  fillBlankMath: 50,
  problemSolving: 50,
  
  listeningEnglish: 50,
  readingEnglish: 50,
  sevenChooseFive: 50,
  clozeTest: 50,
  errorCorrection: 50,
  writingEnglish: 50,
  
  choicePhysics: 50,
  experimentPhysics: 50,
  calculationPhysics: 50,
  
  choiceScience: 50,
  nonChoiceScience: 50,
  
  choiceLiberal: 50,
  nonChoiceLiberal: 50,
};

// 学科能力值计算公式
export const calculateCulturalAbilities = (skills: CulturalQuestionTypeSkills): CulturalSubjectAbilities => {
  return {
    // 语文：(17现Ⅰ + 18现Ⅱ + 20文言 + 9古诗 + 6默写 + 20语言 + 60写作) / 150
    chinese: Math.round(
      (17 * skills.modernReading1 + 
       18 * skills.modernReading2 + 
       20 * skills.classicalChinese + 
       9 * skills.ancientPoetry + 
       6 * skills.famousQuotes + 
       20 * skills.languageUse + 
       60 * skills.writingChinese) / 150
    ),
    
    // 数学：(40单选 + 20多选 + 20填空 + 70解答) / 150
    math: Math.round(
      (40 * skills.singleChoiceMath + 
       20 * skills.multipleChoiceMath + 
       20 * skills.fillBlankMath + 
       70 * skills.problemSolving) / 150
    ),
    
    // 英语：(30听力 + 40阅读 + 10七选五 + 15完形 + 10改错 + 45写作) / 150
    english: Math.round(
      (30 * skills.listeningEnglish + 
       40 * skills.readingEnglish + 
       10 * skills.sevenChooseFive + 
       15 * skills.clozeTest + 
       10 * skills.errorCorrection + 
       45 * skills.writingEnglish) / 150
    ),
    
    // 物理：(42选择 + 18实验 + 40计算) / 100
    physics: Math.round(
      (42 * skills.choicePhysics + 
       18 * skills.experimentPhysics + 
       40 * skills.calculationPhysics) / 100
    ),
    
    // 化学：(42选择 + 58非选择) / 100
    chemistry: Math.round(
      (42 * skills.choiceScience + 
       58 * skills.nonChoiceScience) / 100
    ),
    
    // 生物：(40选择 + 60非选择) / 100
    biology: Math.round(
      (40 * skills.choiceScience + 
       60 * skills.nonChoiceScience) / 100
    ),
    
    // 历史：(48选择 + 52非选择) / 100
    history: Math.round(
      (48 * skills.choiceLiberal + 
       52 * skills.nonChoiceLiberal) / 100
    ),
    
    // 政治：(48选择 + 52非选择) / 100
    politics: Math.round(
      (48 * skills.choiceLiberal + 
       52 * skills.nonChoiceLiberal) / 100
    ),
    
    // 地理：(48选择 + 52非选择) / 100
    geography: Math.round(
      (48 * skills.choiceLiberal + 
       52 * skills.nonChoiceLiberal) / 100
    ),
  };
};

// 题型显示名称
export const CULTURAL_QUESTION_TYPE_NAMES: Record<keyof CulturalQuestionTypeSkills, string> = {
  modernReading1: '现代文阅读Ⅰ',
  modernReading2: '现代文阅读Ⅱ',
  classicalChinese: '文言文阅读',
  ancientPoetry: '古代诗歌阅读',
  famousQuotes: '名篇名句默写',
  languageUse: '语言文字运用',
  writingChinese: '写作',
  
  singleChoiceMath: '单选题',
  multipleChoiceMath: '多选题',
  fillBlankMath: '填空题',
  problemSolving: '解答题',
  
  listeningEnglish: '听力',
  readingEnglish: '阅读理解',
  sevenChooseFive: '七选五',
  clozeTest: '完形填空',
  errorCorrection: '短文改错',
  writingEnglish: '写作',
  
  choicePhysics: '选择题',
  experimentPhysics: '实验题',
  calculationPhysics: '计算题',
  
  choiceScience: '选择题',
  nonChoiceScience: '非选择题',
  
  choiceLiberal: '选择题',
  nonChoiceLiberal: '非选择题',
};

// 学科显示名称
export const CULTURAL_SUBJECT_NAMES: Record<keyof CulturalSubjectAbilities, string> = {
  chinese: '语文',
  math: '数学',
  english: '英语',
  physics: '物理',
  chemistry: '化学',
  biology: '生物',
  history: '历史',
  politics: '政治',
  geography: '地理',
};
