// 成就数据
import { Achievement } from '../types';

// 成就分类接口
export interface CategorizedAchievement extends Achievement {
  icon: string;
  category: 'regular' | 'rare' | 'epic' | 'legendary' | 'hidden';
}

export const achievements: CategorizedAchievement[] = [
  // 常规成就
  {
    id: 'regular-placeholder',
    title: '常规成就',
    description: '常规品质成就占位',
    completed: false,
    icon: '🌱',
    category: 'regular'
  },
  
  // 稀有成就
  {
    id: 'rare-placeholder',
    title: '稀有成就',
    description: '稀有品质成就占位',
    completed: false,
    icon: '⭐',
    category: 'rare'
  },
  
  // 史诗成就
  {
    id: 'epic-placeholder',
    title: '史诗成就',
    description: '史诗品质成就占位',
    completed: false,
    icon: '🌟',
    category: 'epic'
  },
  
  // 传说成就
  {
    id: 'legendary-placeholder',
    title: '传说成就',
    description: '传说品质成就占位',
    completed: false,
    icon: '💎',
    category: 'legendary'
  },
  
  // 隐藏成就
  {
    id: 'hidden-placeholder',
    title: '隐藏成就',
    description: '隐藏品质成就占位',
    completed: false,
    icon: '🔒',
    category: 'hidden'
  }
];

// 按分类获取成就
export const getAchievementsByCategory = (category: string) => {
  return achievements.filter(achievement => achievement.category === category);
};

// 获取所有成就分类
export const getAchievementCategories = () => {
  return ['regular', 'rare', 'epic', 'legendary', 'hidden'];
};

// 获取分类的中文名称
export const getCategoryDisplayName = (category: string) => {
  const categoryNames = {
    regular: '常规成就',
    rare: '稀有成就',
    epic: '史诗成就',
    legendary: '传说成就',
    hidden: '隐藏成就'
  };
  return categoryNames[category as keyof typeof categoryNames] || category;
};
