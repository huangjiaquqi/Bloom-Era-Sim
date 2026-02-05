// 成就窗口组件
import React from 'react';
import { Achievement } from '../types';

interface AchievementModalProps {
  achievements: Achievement[];
  closeModal: () => void;
  uiStyle?: string;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ achievements, closeModal, uiStyle = 'default' }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
      {/* 虚化背景 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
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
          {/* 成就内容 */}
          <div className="flex flex-wrap gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className={`p-4 rounded-lg flex-1 min-w-[calc(50%-8px)] ${
                  uiStyle === 'liquid-glass' 
                    ? 'bg-white/16.5 border border-white/20 backdrop-blur-sm' 
                    : uiStyle === 'acrylic' 
                      ? 'bg-white/69 backdrop-blur-md' 
                      : 'bg-gray-100'
                }`}
                style={{
                  ...(uiStyle === 'liquid-glass' && {
                    background: '#FFFFFF2A',
                    border: '1px solid #FFFFFF33',
                    backdropFilter: 'blur(10px) saturate(1.35)',
                    boxShadow: `
                      0 4px 12px #20268820,
                      inset 0px 0px 5px #FFFFFF1A,
                      inset -1px 1px 2px #FFFFFF10,
                      inset -0.25px 0.25px 0px #FFFFFF60
                    `
                  }),
                  ...(uiStyle === 'acrylic' && {
                    background: '#FFFFFFB0',
                    backdropFilter: 'blur(20px)',
                    border: 'none',
                    boxShadow: '0px 2px 6px rgba(0,0,0,.1)'
                  }),
                  ...(uiStyle === 'default' && {
                    background: '#f3f4f6',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                  })
                }}
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
