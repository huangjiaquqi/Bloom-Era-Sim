// 简介窗口组件
import React from 'react';

interface AboutModalProps {
  closeModal: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
      {/* 虚化背景 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        data-tag="图形"
      ></div>
      {/* 简介窗口内容 */}
      <div 
        className="rounded-xl p-6 shadow-2xl relative z-10 w-[90vw] h-[90vh] max-w-[800px] bg-white"
        style={{
          background: 'white',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}
        data-tag="图形"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900" data-tag="常规文本">游戏简介</h3>
          <button 
            className="text-gray-500 hover:text-gray-900 transition-colors text-xl"
            onClick={closeModal}
            data-tag="按钮"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-80px)] pr-2">
          {/* 游戏简介内容 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">关于 Bloom Era Sim</h4>
              <p className="text-gray-700 leading-relaxed">
                Bloom Era Simulator 是一款生活模拟游戏，让你重写自己的青少年时代。在这个沉浸式的第二次机会故事中，你将面对学校的压力，在考试中取得优异成绩，建立友谊，并让每一个选择都发挥重要作用。你的时代，由你掌控。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                游戏特色：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>真实的青少年生活模拟</li>
                <li>多样化的选择和后果</li>
                <li>学习和考试系统</li>
                <li>社交关系管理</li>
                <li>成就系统</li>
                <li>多种难度设置</li>
                <li>精美而流畅的用户界面</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">游戏目标</h4>
              <p className="text-gray-700 leading-relaxed">
                在 Bloom Era Sim 中，你的目标是通过明智的选择和努力，创造一个成功而充实的青少年时代。你可以专注于学业，成为一名学术精英；或者发展广泛的社交网络，建立深厚的友谊；或者在各个方面取得平衡，追求全面发展。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                每一个决定都会影响你的未来，所以请谨慎选择，创造属于你的完美时代！
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">鸣谢</h4>
              <p className="text-gray-700 leading-relaxed">
                感谢OIerZhang制作的css脚本Smart Hoj 26带来的ui风格设计
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">许可证</h4>
              <p className="text-gray-700 leading-relaxed">
                Bloom Era Sim 是一个开源项目，使用 MIT 许可证。你可以自由地使用、修改和分发这个项目，只要保留原始的许可证和版权声明。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};