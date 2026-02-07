// 成就数据
import { Achievement } from '../types';

// 成就分类接口
export interface CategorizedAchievement extends Achievement {
  icon: string;
  category: 'regular' | 'rare' | 'epic' | 'legendary' | 'hidden';
}

// 基础成就数据
const baseAchievements: CategorizedAchievement[] = [
  // 常规成就
  {
    id: 'regular-first',
    title: '入学!',
    description: '进入游戏界面',
    completed: false,
    icon: '🎓',
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

// 获取用户的成就存储键
export const getAchievementsStorageKey = (userName: string): string => {
  return `bloomEraSimAchievements_${userName}`;
};

// 获取用户的成就
export const getAchievements = (userName: string): CategorizedAchievement[] => {
  if (!userName) return baseAchievements;
  
  try {
    const storageKey = getAchievementsStorageKey(userName);
    const savedAchievements = localStorage.getItem(storageKey);
    
    if (savedAchievements) {
      const parsedAchievements = JSON.parse(savedAchievements);
      // 合并基础成就数据和保存的成就状态
      return baseAchievements.map(baseAchievement => {
        const savedAchievement = parsedAchievements.find(
          (a: CategorizedAchievement) => a.id === baseAchievement.id
        );
        return savedAchievement || baseAchievement;
      });
    }
  } catch (error) {
    console.error('Error loading achievements:', error);
  }
  
  return baseAchievements;
};

// 保存用户的成就
export const saveAchievements = (userName: string, achievements: CategorizedAchievement[]): void => {
  if (!userName) return;
  
  try {
    const storageKey = getAchievementsStorageKey(userName);
    localStorage.setItem(storageKey, JSON.stringify(achievements));
  } catch (error) {
    console.error('Error saving achievements:', error);
  }
};

// 解锁成就
export const unlockAchievement = (userName: string, achievementId: string, difficulty: string): boolean => {
  // 只有现实难度才能解锁成就
  if (difficulty !== '现实') return false;
  
  const achievements = getAchievements(userName);
  const achievementIndex = achievements.findIndex(a => a.id === achievementId);
  
  if (achievementIndex !== -1 && !achievements[achievementIndex].completed) {
    achievements[achievementIndex].completed = true;
    saveAchievements(userName, achievements);
    return true;
  }
  
  return false;
};

// 按分类获取成就
export const getAchievementsByCategory = (userName: string, category: string): CategorizedAchievement[] => {
  const userAchievements = getAchievements(userName);
  return userAchievements.filter(achievement => achievement.category === category);
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
