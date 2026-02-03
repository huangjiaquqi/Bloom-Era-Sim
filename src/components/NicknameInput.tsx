// 昵称输入窗口组件
import React from 'react';

interface NicknameInputProps {
  nicknameInput: string;
  setNicknameInput: React.Dispatch<React.SetStateAction<string>>;
  saveUserName: (name: string) => void;
  uiStyle?: string;
}

export const NicknameInput: React.FC<NicknameInputProps> = ({
  nicknameInput,
  setNicknameInput,
  saveUserName,
  uiStyle = 'default'
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" data-tag="图形">
      {/* 虚化背景 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        data-tag="图形"
      ></div>
      {/* 输入窗口内容 */}
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4" data-tag="常规文本">欢迎来到青春纪元模拟器</h3>
        <p className="text-gray-700 mb-4" data-tag="常规文本">请输入你的昵称：</p>
        <input 
          type="text" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="输入你的昵称"
          maxLength={20}
          data-tag="常规文本"
          autoFocus
          value={nicknameInput}
          onChange={(e) => {
            setNicknameInput(e.target.value);
          }}
        />
        <div className="flex justify-end">
          <button 
            className={`px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-white ${uiStyle === 'liquid-glass' ? 'bg-blue-500/80 backdrop-blur-sm border border-white/30' : uiStyle === 'acrylic' ? 'bg-blue-500/90 backdrop-blur-md border-none' : 'bg-blue-500 border-none'}`}
            style={{
              ...(uiStyle === 'liquid-glass' && {
                background: 'rgba(59, 130, 246, 0.8)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }),
              ...(uiStyle === 'acrylic' && {
                background: 'rgba(59, 130, 246, 0.9)',
                backdropFilter: 'blur(10px)',
                border: 'none'
              }),
              ...(uiStyle === 'default' && {
                background: 'bg-blue-500',
                border: 'none'
              })
            }}
            onClick={() => {
              saveUserName(nicknameInput);
            }}
            data-tag="按钮"
            disabled={!nicknameInput.trim()}
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
};
