// 设置窗口组件
import React from 'react';

interface SettingsModalProps {
  closeModal: () => void;
  uiStyle: string;
  setUiStyle: (style: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ closeModal, uiStyle, setUiStyle }) => {
  const handleStyleChange = (style: string) => {
    setUiStyle(style);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
      {/* 虚化背景 */}
      <div 
        className="absolute inset-0 bg-transparent backdrop-blur-sm"
        data-tag="图形"
      ></div>
      {/* 窗口内容 */}
      <div 
        className={`rounded-xl p-6 shadow-2xl relative z-10 w-full max-w-md ${
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
          <h3 className="text-xl font-bold text-gray-900" data-tag="常规文本">设置</h3>
          <button 
            className="transition-colors text-gray-500 hover:text-gray-900"
            onClick={closeModal}
            data-tag="按钮"
          >
            ✕
          </button>
        </div>
        
        {/* UI风格选择 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3" data-tag="常规文本">UI风格</h4>
          <div className="space-y-2">
            <div 
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                uiStyle === 'default' 
                  ? 'bg-blue-100 border-2 border-blue-500' 
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
              onClick={() => handleStyleChange('default')}
              data-tag="按钮"
            >
              <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${uiStyle === 'default' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                {uiStyle === 'default' && <span className="text-xs">✓</span>}
              </div>
              <span className="text-gray-800" data-tag="常规文本">默认</span>
            </div>
            
            <div 
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                uiStyle === 'liquid-glass' 
                  ? 'bg-blue-100 border-2 border-blue-500' 
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
              onClick={() => handleStyleChange('liquid-glass')}
              data-tag="按钮"
            >
              <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${uiStyle === 'liquid-glass' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                {uiStyle === 'liquid-glass' && <span className="text-xs">✓</span>}
              </div>
              <span className="text-gray-800" data-tag="常规文本">液态玻璃</span>
            </div>
            
            <div 
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                uiStyle === 'acrylic' 
                  ? 'bg-blue-100 border-2 border-blue-500' 
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
              onClick={() => handleStyleChange('acrylic')}
              data-tag="按钮"
            >
              <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${uiStyle === 'acrylic' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                {uiStyle === 'acrylic' && <span className="text-xs">✓</span>}
              </div>
              <span className="text-gray-800" data-tag="常规文本">亚克力</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            className="px-4 py-2 rounded-md transition-colors bg-gray-100 hover:bg-gray-200"
            style={{
              background: '#f3f4f6',
              border: 'none',
              color: '#333'
            }}
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
