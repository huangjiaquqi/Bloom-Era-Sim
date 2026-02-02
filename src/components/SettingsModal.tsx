// 设置窗口组件
import React from 'react';

interface SettingsModalProps {
  closeModal: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
      {/* 虚化背景 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        data-tag="图形"
      ></div>
      {/* 窗口内容 */}
      <div 
        className="bg-white rounded-xl p-6 shadow-2xl relative z-10 w-full max-w-md"
        data-tag="图形"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900" data-tag="常规文本">设置</h3>
          <button 
            className="text-gray-500 hover:text-gray-900 transition-colors"
            onClick={closeModal}
            data-tag="按钮"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-700 mb-4" data-tag="常规文本">
          这是设置窗口内容。
        </p>
        <div className="flex justify-end">
          <button 
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            onClick={closeModal}
            data-tag="按钮"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};
