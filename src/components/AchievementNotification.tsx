// 成就解锁通知组件
import React from 'react';
import { CategorizedAchievement } from '../data/achievements';

interface AchievementNotificationProps {
  achievement: CategorizedAchievement;
  onClose: () => void;
  uiStyle?: string;
}

export const AchievementNotification: React.FC<AchievementNotificationProps> = ({ achievement, onClose }) => {
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
          background: '#f8f9fa',
          border: `1px solid ${categoryColor}33`,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          maxWidth: '300px'
        }}
        data-tag="图形"
      >
        <div className="text-2xl">{achievement.icon}</div>
        <div className="flex-1">
          <h5 className="font-bold text-gray-900 text-lg" data-tag="常规文本">{achievement.title}</h5>
          <p 
            className="mt-1"
            style={{
              background: categoryColor,
              color: 'white',
              padding: '6px',
              borderRadius: '4px',
              border: `1px solid ${categoryColor}33`,
              fontWeight: 500,
              fontSize: '0.85rem'
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
