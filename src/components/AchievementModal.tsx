// 成就窗口组件
import React from 'react';
import { CategorizedAchievement, getAchievementCategories, getCategoryDisplayName } from '../data/achievements';

interface AchievementModalProps {
  achievements: CategorizedAchievement[];
  closeModal: () => void;
  uiStyle?: string;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ achievements, closeModal, uiStyle = 'default' }) => {
  // 获取所有成就分类
  const categories = getAchievementCategories();
  
  // 根据分类获取颜色
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'regular': return '#4CAF50';
      case 'rare': return '#2196F3';
      case 'epic': return '#9C27B0';
      case 'legendary': return '#FF9800';
      case 'hidden': return '#F44336';
      default: return '#666';
    }
  };
  
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
      {/* 虚化背景 */}
      <div 
        className="absolute inset-0 bg-transparent backdrop-blur-sm"
        data-tag="图形"
      ></div>
      {/* 成就窗口内容 */}
      <div 
        className={`rounded-xl p-6 shadow-2xl relative z-10 w-[90vw] h-[90vh] max-w-[1200px] ${
          uiStyle === 'liquid-glass' 
            ? 'bg-white/16.5 border border-white/20 backdrop-blur-sm' 
            : uiStyle === 'acrylic' 
              ? 'bg-white/69 backdrop-blur-md' 
              : 'bg-white'
        }`}
        style={{
          ...(uiStyle === 'liquid-glass' && {
            background: '#FFFFFF2A',
            border: '1px solid #FFFFFF33',
            backdropFilter: 'blur(10px) saturate(1.35)',
            boxShadow: `
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `
          }),
          ...(uiStyle === 'acrylic' && {
            background: '#FFFFFFB0',
            backdropFilter: 'blur(20px)',
            border: 'none',
            boxShadow: '0px 2px 12px rgba(0,0,0,.1)'
          }),
          ...(uiStyle === 'default' && {
            background: 'white',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          })
        }}
        data-tag="图形"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900" data-tag="常规文本">成就系统</h3>
          <button 
            className="text-gray-500 hover:text-gray-900 transition-colors text-xl"
            onClick={closeModal}
            data-tag="按钮"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-80px)] pr-2">
          {/* 按分类显示成就 */}
          {categories.map((category) => {
            const categoryAchievements = achievements.filter(a => a.category === category);
            if (categoryAchievements.length === 0) return null;
            
            const categoryColor = getCategoryColor(category);
            
            return (
              <div key={category} className="mb-6">
                <h4 
                  className="text-xl font-bold mb-3 flex items-center"
                  style={{ color: categoryColor }}
                  data-tag="常规文本"
                >
                  {getCategoryDisplayName(category)}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryAchievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className="p-4 rounded-lg"
                      style={{
                        ...(uiStyle === 'liquid-glass' ? {
                          background: '#FFFFFF2A',
                          border: `1px solid ${categoryColor}33`,
                          backdropFilter: 'blur(10px) saturate(1.35)',
                          boxShadow: `
                            0 8px 24px #20268833,
                            inset 0px 0px 10px #FFFFFF1A,
                            inset -3px 3px 4px #FFFFFF10,
                            inset -0.5px 0.5px 0px #FFFFFF60
                          `,
                          borderRadius: '8px'
                        } : uiStyle === 'acrylic' ? {
                          background: '#FFFFFFB0',
                          border: `1px solid ${categoryColor}33`,
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0px 2px 12px rgba(0,0,0,.1)',
                          borderRadius: '8px'
                        } : {
                          background: '#f8f9fa',
                          border: `1px solid ${categoryColor}33`,
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                          borderRadius: '8px'
                        })
                      }}
                      data-tag="图形"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 text-lg" data-tag="常规文本">{achievement.title}</h5>
                          <p 
                            className="mt-1"
                            style={{
                              ...(uiStyle === 'liquid-glass' ? {
                                background: `${categoryColor}80`,
                                color: 'white',
                                padding: '8px',
                                borderRadius: '4px',
                                border: `1px solid ${categoryColor}33`,
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                backdropFilter: 'blur(5px)'
                              } : uiStyle === 'acrylic' ? {
                                background: `${categoryColor}90`,
                                color: 'white',
                                padding: '8px',
                                borderRadius: '4px',
                                border: `1px solid ${categoryColor}33`,
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                backdropFilter: 'blur(3px)'
                              } : {
                                background: categoryColor,
                                color: 'white',
                                padding: '8px',
                                borderRadius: '4px',
                                border: `1px solid ${categoryColor}33`,
                                fontWeight: 500,
                                fontSize: '0.9rem'
                              })
                            }}
                            data-tag="常规文本"
                          >
                            {achievement.description}
                          </p>
                          <p 
                            className={`mt-2 ${achievement.completed ? 'text-green-600' : 'text-gray-400'} font-medium`}
                            data-tag="常规文本"
                          >
                            {achievement.completed ? '✓ 已完成' : '✗ 未完成'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
