// 状态管理工具
import { GameStatus } from '../types';
import { getStatusById, getDebtStatusLevel } from '../data/statuses';

// 添加状态到活跃状态数组
export const addStatus = (
  activeStatuses: GameStatus[],
  statusId: string,
  duration?: number
): GameStatus[] => {
  const status = getStatusById(statusId);
  if (!status) return activeStatuses;

  // 检查是否已存在相同状态
