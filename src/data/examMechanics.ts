// 考试机制数据

/**
 * 排名计算机制
 * 基于正态分布模型模拟
 */
export interface RankingMechanic {
  averageLevel: number; // 平均水平（满分的百分比）
  standardDeviation: number; // 标准差（满分的百分比）
  totalStudents: number; // 总学生数
  firstPlaceThreshold: number; // 第一名所需的最低分数（满分的百分比）
}

/**
 * 考试类型
 */
export type ExamType = 'midterm' | 'final';

/**
 * 考试机制配置
 */
export const examMechanics: Record<ExamType, RankingMechanic> = {
  midterm: {
    averageLevel: 0.68, // 全校平均分约为试卷满分的68%
    standardDeviation: 0.15, // 标准差约为满分的15%
    totalStudents: 633, // 约有633名学生参加
    firstPlaceThreshold: 0.98, // 想要拿第一名，总分通常需要接近满分（≥98%）
  },
  final: {
    averageLevel: 0.68, // 全校平均分约为试卷满分的68%
    standardDeviation: 0.15, // 标准差约为满分的15%
    totalStudents: 633, // 约有633名学生参加
    firstPlaceThreshold: 0.98, // 想要拿第一名，总分通常需要接近满分（≥98%）
  },
};

/**
 * 计算排名
 * @param totalScore 总分（0-1之间的小数，表示满分的百分比）
 * @param examType 考试类型
 * @returns 排名信息
 */
export function calculateRanking(totalScore: number, examType: ExamType): {
  rank: number;
  percentile: number;
  zScore: number;
} {
  const { averageLevel, standardDeviation, totalStudents } = examMechanics[examType];
  
  // 计算Z-Score
  const zScore = (totalScore - averageLevel) / standardDeviation;
  
  // 使用正态分布累积分布函数的近似计算
  // 基于 Abramowitz and Stegun 近似公式
  function normcdf(x: number): number {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x > 0 ? 1 - prob : prob;
  }
  
  const percentile = normcdf(zScore);
  
  // 计算排名（从1开始）
  const rank = Math.max(1, Math.min(totalStudents, Math.round((1 - percentile) * totalStudents) + 1));
  
  return {
    rank,
    percentile: percentile * 100, // 转换为百分比
    zScore,
  };
}

/**
 * 考试机制说明
 */
export const examMechanicsExplanation = `
排名计算机制
八中每次大考（期中、期末）约有 633 名学生参加。排名基于正态分布模型模拟。

1. 平均水平
全校平均分约为试卷满分的 68%。

2. 标准差
约为满分的 15%。这意味着大部分人的分数集中在平均分上下。

3. 你的排名
系统很据你的总分计算 Z-Score，然后推算出你在 633 人中的百分位排名。

提示:
想要拿第一名，你的总分通常需要接近满分（≥ 98%）。
`;
