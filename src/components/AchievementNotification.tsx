// 成就解锁通知组件
import React from 'react';
import { CategorizedAchievement } from '../data/achievements';

interface AchievementNotificationProps {
  achievement: CategorizedAchievement;
  onClose: () => void;
  uiStyle?: string;
}

export const AchievementNotification: React.FC<AchievementNotificationProps> = ({ achievement, onClose, uiStyle = 'default' }) => {
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

  const categoryColor = getCategoryColor(achievement.category);

  return (
    <div className="achievement-notification" data-tag="图形">
      <div 
        className="achievement-notification-content"
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
            borderRadius: '8px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '300px'
          } : uiStyle === 'acrylic' ? {
            background: '#FFFFFFB0',
            border: `1px solid ${categoryColor}33`,
            backdropFilter: 'blur(20px)',
            boxShadow: '0px 2px 12px rgba(0,0,0,.1)',
            borderRadius: '8px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '300px'
          } : {
            background: '#f8f9fa',
            border: `1px solid ${categoryColor}33`,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '300px'
          })
        }}
        data-tag="图形"
      >
        <div className="text-2xl">{achievement.icon}</div>
        <div className="flex-1">
          <h5 className="font-bold text-gray-900 text-lg" data-tag="常规文本">{achievement.title}</h5>
          <p 
            className="mt-1"
            style={{
              ...(uiStyle === 'liquid-glass' ? {
                background: `${categoryColor}80`,
                color: 'white',
                padding: '6px',
                borderRadius: '4px',
                border: `1px solid ${categoryColor}33`,
                fontWeight: 500,
                fontSize: '0.85rem',
                backdropFilter: 'blur(5px)'
              } : uiStyle === 'acrylic' ? {
                background: `${categoryColor}90`,
                color: 'white',
                padding: '6px',
                borderRadius: '4px',
                border: `1px solid ${categoryColor}33`,
                fontWeight: 500,
                fontSize: '0.85rem',
                backdropFilter: 'blur(3px)'
              } : {
                background: categoryColor,
                color: 'white',
                padding: '6px',
                borderRadius: '4px',
                border: `1px solid ${categoryColor}33`,
                fontWeight: 500,
                fontSize: '0.85rem'
              })
            }}
            data-tag="常规文本"
          >
            {achievement.description}
          </p>
          <p 
            className="mt-2 text-green-600 font-medium"
            data-tag="常规文本"
          >
            ✓ 已解锁
          </p>
        </div>
        <button 
          className="close-button"
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#666',
            fontSize: '1rem'
          }}
          data-tag="按钮"
        >
          ×
        </button>
      </div>
      
      <style>{`
        .achievement-notification {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 50;
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
