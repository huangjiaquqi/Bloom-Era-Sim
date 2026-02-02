// 昵称输入窗口组件
import React from 'react';

interface NicknameInputProps {
  nicknameInput: string;
  setNicknameInput: React.Dispatch<React.SetStateAction<string>>;
  saveUserName: (name: string) => void;
}

export const NicknameInput: React.FC<NicknameInputProps> = ({
  nicknameInput,
  setNicknameInput,
  saveUserName
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
        className="bg-white rounded-xl p-6 shadow-2xl relative z-10 w-full max-w-md"
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
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
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
