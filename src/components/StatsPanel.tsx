import React from 'react';
import { GameStats } from '../types';

interface StatsPanelProps {
  stats: GameStats;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats }) => {
  const statCategories = [
    {
      name: '常规属性',
      stats: [
        { key: '心态', label: '心态', value: stats.心态 },
        { key: '健康', label: '健康', value: stats.健康 },
        { key: '效率', label: '效率', value: stats.效率 },
        { key: '经验', label: '经验', value: stats.经验 },
        { key: '金钱', label: '金钱', value: stats.金钱 },
        { key: '运气', label: '运气', value: stats.运气 },
        { key: '魅力', label: '魅力', value: stats.魅力 },
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">个人属性</h2>
      <div className="space-y-6">
        {statCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-md font-medium text-gray-700 mb-2">{category.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.stats.map((stat) => (
                <div key={stat.key} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                    <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getStatColor(stat.value)}`}
                      style={{ width: `${Math.min(100, stat.value)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getStatColor = (value: number): string => {
  if (value >= 80) return 'bg-green-500';
  if (value >= 60) return 'bg-blue-500';
  if (value >= 40) return 'bg-yellow-500';
  return 'bg-red-500';
};

export default StatsPanel;