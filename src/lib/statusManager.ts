// 状态管理工具函数
import { GameStatus, PlayerState } from '../types';
import { createStatusInstance } from '../data/statuses';

// 添加状态到玩家状态
export const addStatus = (
  playerState: PlayerState,
  statusId: string,
  duration?: number
): PlayerState => {
  const newStatus = createStatusInstance(statusId, duration);
  if (!newStatus) return playerState;
  
  // 检查是否已存在相同状态
  const existingStatusIndex = playerState.activeStatuses.findIndex(
    status => status.id === newStatus.id
  );
  
  let updatedStatuses;
  if (existingStatusIndex >= 0) {
    // 刷新现有状态的持续时间
    updatedStatuses = [...playerState.activeStatuses];
    updatedStatuses[existingStatusIndex] = {
      ...updatedStatuses[existingStatusIndex],
      duration: newStatus.duration
    };
  } else {
    // 添加新状态
    updatedStatuses = [...playerState.activeStatuses, newStatus];
  }
  
  return {
    ...playerState,
    activeStatuses: updatedStatuses
  };
};

// 更新状态持续时间
export const updateStatuses = (playerState: PlayerState): PlayerState => {
  // 减少所有状态的持续时间
  const updatedStatuses = playerState.activeStatuses
    .map(status => ({
      ...status,
      duration: status.duration - 1
    }))
    // 移除持续时间为0的状态
    .filter(status => status.duration > 0);
  
  return {
    ...playerState,
    activeStatuses: updatedStatuses
  };
};

// 移除指定状态
export const removeStatus = (
  playerState: PlayerState,
  statusId: string
): PlayerState => {
  const updatedStatuses = playerState.activeStatuses.filter(
    status => status.id !== statusId
  );
  
  return {
    ...playerState,
    activeStatuses: updatedStatuses
  };
};

// 检查玩家是否有特定状态
export const hasStatus = (playerState: PlayerState, statusId: string): boolean => {
  return playerState.activeStatuses.some(status => status.id === statusId);
};

// 获取玩家的特定状态
export const getStatus = (
  playerState: PlayerState,
  statusId: string
): GameStatus | undefined => {
  return playerState.activeStatuses.find(status => status.id === statusId);
};

// 获取玩家的所有状态
export const getAllActiveStatuses = (playerState: PlayerState): GameStatus[] => {
  return playerState.activeStatuses;
};

// 根据类型获取玩家的状态
export const getStatusesByType = (
  playerState: PlayerState,
  type: 'BUFF' | 'DEBUFF' | 'NEUTRAL'
): GameStatus[] => {
  return playerState.activeStatuses.filter(status => status.type === type);
};

// 检查并更新债务状态
export const updateDebtStatus = (playerState: PlayerState): PlayerState => {
  const money = playerState.money;
  
  // 移除所有债务状态
  let updatedState = {
    ...playerState,
    activeStatuses: playerState.activeStatuses.filter(
      status => !status.id.startsWith('debt_')
    )
  };
  
  // 根据负债程度添加对应等级的债务状态
  if (money < 0) {
    if (money >= -100) {
      // 轻微债务
      updatedState = addStatus(updatedState, 'debt_level_1');
    }
    // 可以根据需要添加更多债务等级
  }
  
  return updatedState;
};

// 初始化玩家状态的状态列表
export const initializeStatuses = (playerState: PlayerState): PlayerState => {
  return {
    ...playerState,
    activeStatuses: []
  };
};