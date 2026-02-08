// 天赋管理工具函数
import { PlayerState } from '../types';
import { talents } from '../data/mechanics';

// 添加天赋到玩家状态
export const addTalent = (
  playerState: PlayerState,
  talentId: string
): PlayerState => {
  // 检查天赋是否存在
  const talent = talents.find(t => t.id === talentId);
  if (!talent) return playerState;
  
  // 检查是否已拥有该天赋
  if (playerState.selected_talents.includes(talentId)) {
    return playerState;
  }
  
  // 添加天赋
  const updatedTalents = [...playerState.selected_talents, talentId];
  
  return {
    ...playerState,
    selected_talents: updatedTalents
  };
};

// 移除天赋从玩家状态
export const removeTalent = (
  playerState: PlayerState,
  talentId: string
): PlayerState => {
  // 移除天赋
  const updatedTalents = playerState.selected_talents.filter(
    id => id !== talentId
  );
  
  return {
    ...playerState,
    selected_talents: updatedTalents
  };
};

// 检查玩家是否拥有特定天赋
export const hasTalent = (
  playerState: PlayerState,
  talentId: string
): boolean => {
  return playerState.selected_talents.includes(talentId);
};

// 获取玩家拥有的所有天赋
export const getPlayerTalents = (playerState: PlayerState) => {
  return talents.filter(talent => 
    playerState.selected_talents.includes(talent.id)
  );
};

// 检查天赋点数是否足够
export const canAffordTalent = (
  playerState: PlayerState,
  talentId: string
): boolean => {
  const talent = talents.find(t => t.id === talentId);
  if (!talent) return false;
  
  return playerState.talent_points >= talent.cost;
};

// 计算天赋效果的总加成
export const calculateTalentEffects = (playerState: PlayerState) => {
  const playerTalents = getPlayerTalents(playerState);
  
  return playerTalents.reduce((effects, talent) => {
    return {
      mental: (effects.mental || 0) + (talent.effect.mental || 0),
      health: (effects.health || 0) + (talent.effect.health || 0),
      academic: (effects.academic || 0) + (talent.effect.academic || 0),
      social: (effects.social || 0) + (talent.effect.social || 0),
      money: (effects.money || 0) + (talent.effect.money || 0),
      study_efficiency: (effects.study_efficiency || 0) + (talent.effect.study_efficiency || 0)
    };
  }, {} as any);
};