  // 版本信息窗口组件
import React from 'react';
import { Version } from '../types';

interface VersionModalProps {
  versions: Version[];
  closeModal: () => void;
}

export const VersionModal: React.FC<VersionModalProps> = ({ versions, closeModal }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
      {/* 虚化背景 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        data-tag="图形"
      ></div>
      {/* 版本窗口内容 */}
      <div 
        className="bg-white rounded-xl p-6 shadow-2xl relative z-10 w-[90vw] h-[90vh] max-w-[800px]"
        data-tag="图形"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900" data-tag="常规文本">版本信息</h3>
          <button 
            className="text-gray-500 hover:text-gray-900 transition-colors text-xl"
            onClick={closeModal}
            data-tag="按钮"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-80px)] pr-2">
          {/* 版本信息列表 */}
          <div className="space-y-6">
            {versions.map((version) => (
              <div key={version.version} className="p-4 bg-gray-100 rounded-lg" data-tag="图形">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-900 text-lg" data-tag="常规文本">{version.version}</h4>
                  <span className="text-gray-600" data-tag="常规文本">{version.date}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {version.features.map((feature, idx) => (
                    <li key={idx} data-tag="常规文本">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
