// 成就窗口组件
import React from 'react';
import { Achievement } from '../types';

interface AchievementModalProps {
  achievements: Achievement[];
  closeModal: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ achievements, closeModal }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
      {/* 虚化背景 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        data-tag="图形"
      ></div>
      {/* 成就窗口内容 */}
      <div 
        className="bg-white rounded-xl p-6 shadow-2xl relative z-10 w-[90vw] h-[90vh] max-w-[1200px]"
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
          {/* 成就内容 */}
          <div className="flex flex-wrap gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]"
                data-tag="图形"
              >
                <h4 className="font-bold text-gray-900" data-tag="常规文本">{achievement.title}</h4>
                <p className="text-gray-600" data-tag="常规文本">{achievement.description}</p>
                <p 
                  className={`mt-1 ${achievement.completed ? 'text-green-600' : 'text-gray-400'}`}
                  data-tag="常规文本"
                >
                  {achievement.completed ? '✓ 已完成' : '✗ 未完成'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
