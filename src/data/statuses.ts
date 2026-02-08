// 状态系统数据
import { GameStatus } from '../types';

// 状态数据
export const baseStatuses: GameStatus[] = [
  // 占位状态
  {
    id: 'placeholder',
    name: '占位状态',
    description: '系统占位状态，无实际效果',
    type: 'NEUTRAL',
    duration: 1,
    icon: '❓',
    effectDescription: '无效果'
  },
  // 焦虑状态（DEBUFF）
  {
    id: 'anxiety',
    name: '焦虑',
    description: '持续4周，降低心态和学习效率',
    type: 'DEBUFF',
    duration: 4,
    icon: '😰',
    effectDescription: '心态 -10%，学习效率 -20%'
  },
  // 睡眠强迫状态（NEUTRAL）
  {
    id: 'sleep_compulsion',
    name: '睡眠强迫',
    description: '挑战模式特有，强制睡眠需求',
    type: 'NEUTRAL',
    duration: 999,
    icon: '😴',
    effectDescription: '每周必须选择睡眠活动'
  },
  // 债务状态（DEBUFF）- 等级1
  {
    id: 'debt_level_1',
    name: '轻微债务',
    description: '负债程度较低，轻微影响心态',
    type: 'DEBUFF',
    duration: 999,
    icon: '💸',
    effectDescription: '心态 -5%'
  }
];

// 获取状态数据
export const getStatusById = (statusId: string): GameStatus | undefined => {
  return baseStatuses.find(status => status.id === statusId);
};

// 获取所有状态
export const getAllStatuses = (): GameStatus[] => {
  return baseStatuses;
};

// 获取特定类型的状态
export const getStatusesByType = (type: 'BUFF' | 'DEBUFF' | 'NEUTRAL'): GameStatus[] => {
  return baseStatuses.filter(status => status.type === type);
};

// 创建状态实例（用于添加到玩家状态）
export const createStatusInstance = (statusId: string, duration?: number): GameStatus | undefined => {
  const baseStatus = getStatusById(statusId);
  if (!baseStatus) return undefined;
  
  return {
    ...baseStatus,
    duration: duration || baseStatus.duration
  };
};