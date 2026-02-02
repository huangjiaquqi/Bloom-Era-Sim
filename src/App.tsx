


import { useState, useEffect } from 'react';

function App() {
  // 状态管理：控制当前页面，'home' 为主页，'game' 为游戏页
  const [currentPage, setCurrentPage] = useState('home');

  // 处理开始游戏按钮点击
  const handleStartGame = () => {
    setCurrentPage('game');
  };

  // 处理返回主页按钮点击
  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  // 状态管理：控制窗口显示
  const [showWindow, setShowWindow] = useState(false);
  const [showAchievementWindow, setShowAchievementWindow] = useState(false);

  // 处理设置按钮点击
  const handleSettings = () => {
    setShowWindow(true);
  };

  // 处理关闭窗口
  const handleCloseWindow = () => {
    setShowWindow(false);
  };

  // 处理成就按钮点击
  const handleAchievementClick = () => {
    setShowAchievementWindow(true);
  };

  // 处理关闭成就窗口
  const handleCloseAchievementWindow = () => {
    setShowAchievementWindow(false);
  };

  // 状态管理：用户昵称
  const [userName, setUserName] = useState<string | null>(null);
  const [showNameInput, setShowNameInput] = useState(false);
  const [showVersionWindow, setShowVersionWindow] = useState(false);

  // 版本信息数据
  const versions = [
    { version: 'v1.0.0', date: '2026-02-01', features: ['初始版本发布', '基本游戏功能', '成就系统', '用户昵称系统'] },
    { version: 'v0.9.0', date: '2026-01-31', features: ['游戏核心机制完成', '界面设计优化', '设置系统'] },
    { version: 'v0.5.0', date: '2026-01-20', features: ['基础框架搭建', '主页界面设计', '按钮功能实现'] },
    { version: 'v0.1.0', date: '2026-01-15', features: ['项目初始化', '基本文件结构'] }
  ];

  // 初始化：检查localStorage中的用户昵称
  useEffect(() => {
    const savedName = localStorage.getItem('bloomEraSimUserName');
    if (savedName) {
      setUserName(savedName);
    } else {
      setShowNameInput(true);
    }
  }, []);

  // 处理保存用户昵称
  const handleSaveName = (name: string) => {
    if (name.trim()) {
      setUserName(name.trim());
      localStorage.setItem('bloomEraSimUserName', name.trim());
      setShowNameInput(false);
    }
  };

  // 处理版本按钮点击
  const handleVersionClick = () => {
    setShowVersionWindow(true);
  };

  // 处理关闭版本窗口
  const handleCloseVersionWindow = () => {
    setShowVersionWindow(false);
  };

  // 主页组件
  const HomePage = () => (
    <div className="min-h-screen bg-e6f0f8 relative" data-scene="主页">
      {/* 背景文字层 */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <h1 
          className="text-[12vw] font-bold text-center"
          style={{
            letterSpacing: '2px',
            lineHeight: '1.2',
            whiteSpace: 'nowrap',
            background: 'linear-gradient(90deg, rgba(0,0,0,0.05), rgba(0,123,255,0.1), rgba(255,193,7,0.1), rgba(40,167,69,0.1), rgba(0,0,0,0.05))',
            backgroundSize: '400% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient 8s ease infinite'
          }}
          data-tag="常规文本"
        >
          Bloom Era Sim
        </h1>
      </div>
      
      {/* 添加全局CSS动画 */}
      {(() => {
        // 创建样式元素
        const style = document.createElement('style');
        style.textContent = `
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `;
        // 只添加一次
        if (!document.getElementById('gradient-animation')) {
          style.id = 'gradient-animation';
          document.head.appendChild(style);
        }
        return null;
      })()}
      

      
      {/* 全局设置按钮 */}
      <button
        className="p-2 transition-all duration-300 hover:scale-110"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'transparent',
          border: 'none',
          zIndex: 30,
          cursor: 'pointer'
        }}
        onClick={handleSettings}
        data-tag="按钮"
        aria-label="设置"
      >
        <span className="text-3xl" data-tag="按钮">⚙️</span>
      </button>
      
      {/* 界面层：显示基础UI元素 */}
      <div className="min-h-screen flex items-center justify-center px-8 relative z-10">
        {/* 左右矩形容器 */}
        <div className="flex items-center space-x-6 w-full max-w-7xl">
          {/* 左侧窄圆角矩形 */}
        <div 
          className="w-[150px] h-[60vh] rounded-3xl p-4 flex flex-col justify-between"
          style={{ 
            backgroundColor: '#FFFFFF2A',
            border: '1px solid #FFFFFF33',
            backdropFilter: 'blur(10px) saturate(1.35)',
            boxShadow: `
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `
          }}
          data-tag="图形"
        >
          {/* 按钮列 */}
          <button
            className="px-4 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{
              backgroundColor: '#f5d20bff',
              border: 'none',
              boxShadow: '0 2px 8px rgba(245,158,11,0.3)'
            }}
            onClick={handleAchievementClick}
            data-tag="按钮"
          >
            <span className="text-xl" data-tag="按钮">🏆</span>
            <span data-tag="按钮">成就</span>
          </button>

          <button
            className="px-4 py-4 rounded-xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#ffffff',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            data-tag="按钮"
          >
            <span data-tag="按钮">test</span>
          </button>
          <button
            className="px-4 py-4 rounded-xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#ffffff',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            data-tag="按钮"
          >
            <span data-tag="按钮">test</span>
          </button>
          <button
            className="px-4 py-4 rounded-xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#ffffff',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            data-tag="按钮"
          >
            <span data-tag="按钮">test</span>
          </button>
          <button
            className="px-4 py-4 rounded-xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#ffffff',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            data-tag="按钮"
          >
            <span data-tag="按钮">test</span>
          </button>
          <button
            className="px-4 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{
              backgroundColor: '#6c757d',
              border: 'none',
              boxShadow: '0 2px 8px rgba(108,117,125,0.3)'
            }}
            onClick={handleVersionClick}
            data-tag="按钮"
          >
            <span className="text-xl" data-tag="按钮">📱</span>
            <span data-tag="按钮">版本</span>
          </button>
          <button
            className="px-4 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{
              backgroundColor: '#000000',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
            onClick={() => window.open('https://github.com/huangjiaquqi/Bloom-Era-Sim', '_blank')}
            data-tag="按钮"
          >
            <span className="text-xl" data-tag="按钮">&lt;/&gt;</span>
            <span data-tag="按钮">GitHub</span>
          </button>
        </div>
          
          {/* 右侧大圆角矩形 */}
          <div 
            className="flex-1 h-[60vh] rounded-3xl pt-12 pl-16 pr-16 pb-12 flex flex-col justify-between"
            style={{ 
              backgroundColor: '#FFFFFF2A',
              border: '1px solid #FFFFFF33',
              backdropFilter: 'blur(10px) saturate(1.35)',
              boxShadow: `
                0 8px 24px #20268833,
                inset 0px 0px 10px #FFFFFF1A,
                inset -3px 3px 4px #FFFFFF10,
                inset -0.5px 0.5px 0px #FFFFFF60
              `
            }}
            data-tag="图形"
          >
            {/* 标题和其他按钮部分 */}
            <div className="space-y-8">
              {/* 用户欢迎信息 */}
              {userName && (
                <div className="text-right text-blue-600 font-bold text-xl" data-tag="常规文本">
                  你好，{userName}
                </div>
              )}
              {/* 青春纪元模拟器标题和图标 */}
              <div className="flex items-center gap-4">
                <h1 
                  className="text-4xl md:text-5xl font-bold text-gray-900"
                  data-tag="常规文本"
                >
                  青春纪元模拟器
                </h1>
                <div className="transition-all duration-300">
                  <img 
                    src="/favicon.svg" 
                    alt="Bloom Era Sim Icon" 
                    className="w-12 h-12 rounded-2xl object-contain"
                    data-tag="图形"
                  />
                </div>
              </div>
              {/* Bloom Era Sim 标题 */}
              <h2 
                className="text-2xl md:text-3xl font-bold text-gray-900"
                data-tag="常规文本"
              >
                Bloom Era Sim
              </h2>
              
              {/* 作者信息 */}
              <p 
                className="text-gray-500"
                data-tag="常规文本"
              >
                Made by JasperHuang
              </p>
              
              {/* 其他按钮 */}
              <div className="flex flex-wrap gap-4">
                {/* 纯色按钮 2 */}
                <button
                  className="px-6 py-3 rounded-2xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#ffffff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  data-tag="按钮"
                >
                  <span data-tag="按钮">游戏设置</span>
                </button>
                
                {/* 纯色按钮 3 */}
                <button
                  className="px-6 py-3 rounded-2xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#ffffff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  data-tag="按钮"
                >
                  <span data-tag="按钮">关于游戏</span>
                </button>
                
                {/* 纯色按钮 4 */}
                <button
                  className="px-6 py-3 rounded-2xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#ffffff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  data-tag="按钮"
                >
                  <span data-tag="按钮">帮助中心</span>
                </button>
              </div>
            </div>
            
            {/* 开始游戏按钮 - 位于底部并拉长 */}
            <button
              className="px-8 py-5 rounded-2xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3"
              style={{
                backgroundColor: '#4ade80',
                border: 'none',
                boxShadow: '0 2px 8px rgba(74,222,128,0.3)',
                width: '100%'
              }}
              onClick={handleStartGame}
              data-tag="按钮"
            >
              <span className="text-2xl" data-tag="按钮">🚩</span>
              <span className="text-2xl text-white" data-tag="按钮">开始游戏</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. 效果层：可以添加视觉效果，如粒子效果、光效等 */}
      <div className="fixed inset-0 z-20 pointer-events-none" data-tag="图形">
        {/* 这里可以添加各种视觉效果，例如： */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10"></div> */}
        {/* 可以添加粒子效果、光晕效果等 */}
      </div>
      
      {/* 窗口效果 */}
      {showWindow && (
        <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
          {/* 虚化背景 */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseWindow}
            data-tag="图形"
          ></div>
          {/* 窗口内容 */}
          <div 
            className="bg-white rounded-xl p-6 shadow-2xl relative z-10 w-full max-w-md"
            data-tag="图形"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900" data-tag="常规文本">窗口标题</h3>
              <button 
                className="text-gray-500 hover:text-gray-900 transition-colors"
                onClick={handleCloseWindow}
                data-tag="按钮"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700 mb-4" data-tag="常规文本">
              这是窗口内容区域。
            </p>
            <div className="flex justify-end">
              <button 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                onClick={handleCloseWindow}
                data-tag="按钮"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 成就窗口效果 */}
      {showAchievementWindow && (
        <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
          {/* 虚化背景 */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseAchievementWindow}
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
                onClick={handleCloseAchievementWindow}
                data-tag="按钮"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-80px)] pr-2">
              {/* 成就内容示例 */}
              <div className="flex flex-wrap gap-4">
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">首次启动游戏</h4>
                  <p className="text-gray-600" data-tag="常规文本">启动游戏并进入主界面</p>
                  <p className="text-green-600 mt-1" data-tag="常规文本">✓ 已完成</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">探索游戏</h4>
                  <p className="text-gray-600" data-tag="常规文本">进入游戏页面</p>
                  <p className="text-green-600 mt-1" data-tag="常规文本">✓ 已完成</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">查看设置</h4>
                  <p className="text-gray-600" data-tag="常规文本">打开设置窗口</p>
                  <p className="text-gray-400 mt-1" data-tag="常规文本">✗ 未完成</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">访问GitHub</h4>
                  <p className="text-gray-600" data-tag="常规文本">点击GitHub按钮</p>
                  <p className="text-gray-400 mt-1" data-tag="常规文本">✗ 未完成</p>
                </div>
                {/* 更多成就示例，用于测试滚动条 */}
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">成就5</h4>
                  <p className="text-gray-600" data-tag="常规文本">这是一个成就描述</p>
                  <p className="text-gray-400 mt-1" data-tag="常规文本">✗ 未完成</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">成就6</h4>
                  <p className="text-gray-600" data-tag="常规文本">这是一个成就描述</p>
                  <p className="text-gray-400 mt-1" data-tag="常规文本">✗ 未完成</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">成就7</h4>
                  <p className="text-gray-600" data-tag="常规文本">这是一个成就描述</p>
                  <p className="text-gray-400 mt-1" data-tag="常规文本">✗ 未完成</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">成就8</h4>
                  <p className="text-gray-600" data-tag="常规文本">这是一个成就描述</p>
                  <p className="text-gray-400 mt-1" data-tag="常规文本">✗ 未完成</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">成就9</h4>
                  <p className="text-gray-600" data-tag="常规文本">这是一个成就描述</p>
                  <p className="text-gray-400 mt-1" data-tag="常规文本">✗ 未完成</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex-1 min-w-[calc(50%-8px)]" data-tag="图形">
                  <h4 className="font-bold text-gray-900" data-tag="常规文本">成就10</h4>
                  <p className="text-gray-600" data-tag="常规文本">这是一个成就描述</p>
                  <p className="text-gray-400 mt-1" data-tag="常规文本">✗ 未完成</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 昵称输入窗口 */}
      {showNameInput && (
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
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSaveName((e.target as HTMLInputElement).value);
                }
              }}
              data-tag="常规文本"
              autoFocus
            />
            <div className="flex justify-end">
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                onClick={(e) => {
                  const input = (e.currentTarget.parentElement?.previousElementSibling as HTMLInputElement);
                  handleSaveName(input.value);
                }}
                data-tag="按钮"
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 版本窗口效果 */}
      {showVersionWindow && (
        <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
          {/* 虚化背景 */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseVersionWindow}
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
                onClick={handleCloseVersionWindow}
                data-tag="按钮"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-80px)] pr-2">
              {/* 版本信息列表 */}
              <div className="space-y-6">
                {versions.map((version, index) => (
                  <div key={index} className="p-4 bg-gray-100 rounded-lg" data-tag="图形">
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
      )}
    </div>
  );

  // 游戏页组件（空白页）
  const GamePage = () => (
    <div className="min-h-screen bg-e6f0f8 flex flex-col items-center justify-center" data-scene="游戏页">
      {/* 用户昵称显示 */}
      {userName && (
        <div 
          className="fixed top-4 left-4 text-blue-600 font-bold text-lg"
          style={{ zIndex: 30 }}
          data-tag="常规文本"
        >
          {userName}
        </div>
      )}
      
      {/* 全局设置按钮 */}
      <button
        className="p-2 transition-all duration-300 hover:scale-110"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'transparent',
          border: 'none',
          zIndex: 30,
          cursor: 'pointer'
        }}
        onClick={handleSettings}
        data-tag="按钮"
        aria-label="设置"
      >
        <span className="text-3xl" data-tag="按钮">⚙️</span>
      </button>
      
      {/* 空白游戏页 */}
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">游戏页</h1>
        <p className="text-gray-600 mb-8">这是游戏页面，具体UI将在后续实现</p>
        <button
          className="px-6 py-3 rounded-2xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          onClick={handleBackToHome}
          data-tag="按钮"
        >
          <span data-tag="按钮">返回主页</span>
        </button>
      </div>
      
      {/* 窗口效果 */}
      {showWindow && (
        <div className="fixed inset-0 z-40 flex items-center justify-center" data-tag="图形">
          {/* 虚化背景 */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseWindow}
            data-tag="图形"
          ></div>
          {/* 窗口内容 */}
          <div 
            className="bg-white rounded-xl p-6 shadow-2xl relative z-10 w-full max-w-md"
            data-tag="图形"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900" data-tag="常规文本">窗口标题</h3>
              <button 
                className="text-gray-500 hover:text-gray-900 transition-colors"
                onClick={handleCloseWindow}
                data-tag="按钮"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700 mb-4" data-tag="常规文本">
              这是窗口内容区域。
            </p>
            <div className="flex justify-end">
              <button 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                onClick={handleCloseWindow}
                data-tag="按钮"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // 根据当前页面状态渲染对应的组件
  return (
    <>
      {currentPage === 'home' ? <HomePage /> : <GamePage />}
    </>
  );
}

export default App