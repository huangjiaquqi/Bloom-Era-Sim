// 游戏主页（难度选择、开始/加载按钮）
import React, { useState } from 'react';

interface HomeViewProps {
  onDifficultySelect: (difficulty: string) => void;
  onLoadGame: () => void;
  onStartGame: () => void;
  userName: string;
  uiStyle?: string;
  onOpenModal?: (modal: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onDifficultySelect, onStartGame, userName, uiStyle = 'default', onOpenModal }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const handleDifficultyClick = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  const handleModeClick = (mode: string) => {
    setSelectedMode(mode);
  };

  const handleStartGame = () => {
    if (selectedDifficulty && selectedMode === '快速模式') {
      onStartGame();
      onDifficultySelect(selectedDifficulty);
    }
  };
  return (
    <div className="home-view">
      <div className="home-header">
        <div className="title-container">
          <h1 className="animated-title">
            {"Bloom Era Sim".split('').map((char, index) => (
              <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <h2 className="chinese-title">青春纪元模拟器</h2>
        </div>
        <p className="home-subtitle">Made by JasperHuang</p>
        {userName && (
          <div className="user-greeting">
            你好，{userName}
          </div>
        )}
      </div>
      
      <div className="home-content">
        <div className="difficulty-selection">
          <div className="layout-container">
            {/* 左侧按钮列 */}
            <div className="left-rectangle">
              <div className="side-buttons">
                <button className="side-button achievement-button" onClick={() => onOpenModal?.('achievements')}>
                  🏆 成就
                </button>
                <button className="side-button version-button" onClick={() => onOpenModal?.('version')}>
                  📜 版本
                </button>
                <button className="side-button settings-button" onClick={() => onOpenModal?.('settings')}>
                  ⚙️ 设置
                </button>
                <button className="side-button about-button" onClick={() => onOpenModal?.('about')}>
                  ℹ️ 简介
                </button>
                <button className="side-button github-button" onClick={() => window.open('https://github.com/huangjiaquqi/bloom-era-sim', '_blank')}>
                  &lt;/&gt; GitHub
                </button>
              </div>
            </div>
            
            {/* 中央内容 */}
            <div className="center-content">
              <div className="difficulty-container">
                <div className="difficulty-title">难度</div>
                <div className="difficulty-options">
                  <div 
                    className={`difficulty-option easy ${selectedDifficulty === '普通' ? 'selected' : ''}`}
                    onClick={() => handleDifficultyClick('普通')}
                  >
                    <span className="difficulty-name">🌱 普通</span>
                  </div>
                  <div 
                    className={`difficulty-option medium ${selectedDifficulty === '中等' ? 'selected' : ''}`}
                    onClick={() => handleDifficultyClick('中等')}
                  >
                    <span className="difficulty-name">⚡ 中等</span>
                  </div>
                  <div 
                    className={`difficulty-option hard ${selectedDifficulty === '现实' ? 'selected' : ''}`}
                    onClick={() => handleDifficultyClick('现实')}
                  >
                    <span className="difficulty-name">🏆 现实</span>
                  </div>
                </div>
                
                {selectedDifficulty !== '现实' && (
                  <div className="achievement-note" style={{ color: '#FFC107', fontSize: '0.85rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
                    ⚠️ 只有现实难度才能解锁成就
                  </div>
                )}
                
                <div className="difficulty-title">模式</div>
                <div className="difficulty-options">
                  <div 
                    className={`difficulty-option mode-fast ${selectedMode === '快速模式' ? 'selected' : ''}`}
                    onClick={() => handleModeClick('快速模式')}
                  >
                    <span className="difficulty-name">🚀 快速模式</span>
                  </div>
                  <div 
                    className={`difficulty-option mode-deep disabled ${selectedMode === '深度模式' ? 'selected' : ''}`}
                    onClick={() => {}}
                    style={{ cursor: 'not-allowed', opacity: 0.6 }}
                  >
                    <span className="difficulty-name">🌊 深度模式</span>
                  </div>
                </div>
              </div>
              
              <div className="start-game-container">
                <button 
                  className="start-button" 
                  onClick={handleStartGame}
                  disabled={!selectedDifficulty || selectedMode !== '快速模式'}
                >
                  开始游戏
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="home-footer">
        <p>© 2024 Bloom Era Sim</p>
      </div>
      
      <style>{`
        .home-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .layout-container {
          display: flex;
          align-items: stretch;
          gap: 2rem;
          width: 100%;
          max-width: 1600px;
          justify-content: center;
        }
        
        .left-rectangle {
          width: 200px;
          border-radius: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF2A; /* 16.5% 透明度白色 */
            border: 1px solid #FFFFFF33; /* 20% 透明度白色边框 */
            backdrop-filter: blur(10px) saturate(1.35); /* 较浅模糊 + 饱和度增强 */
            box-shadow:
              0 8px 24px #20268833, /* 主阴影：淡蓝色（20%透明度） */
              inset 0px 0px 10px #FFFFFF1A, /* 内发光：白色（10%透明度） */
              inset -3px 3px 4px #FFFFFF10, /* 内阴影：白色（6%透明度）- 模拟玻璃厚度 */
              inset -0.5px 0.5px 0px #FFFFFF60; /* 高光边缘：白色（37.5%透明度）- 模拟玻璃边缘反射 */
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFFB0; /* 69% 透明度白色 */
            backdrop-filter: blur(20px); /* 中度模糊 */
            border: none; /* 无边框 */
            box-shadow: 0px 2px 12px rgba(0,0,0,.1); /* 简洁的黑色阴影 */
          ` : `
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }
        
        .side-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding: 1.2rem;
          width: 100%;
        }
        
        .side-button {
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .achievement-button {
          background: #ffc107;
          color: white;
        }
        
        .achievement-button:hover {
          transform: translateY(-2px);
          background: #e0a800;
          box-shadow: 0 4px 8px rgba(255, 193, 7, 0.3);
        }
        
        .version-button {
          background: #3498db;
          color: white;
        }
        
        .version-button:hover {
          transform: translateY(-2px);
          background: #2980b9;
          box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
        }
        
        .settings-button {
          background: #343a40;
          color: white;
        }
        
        .settings-button:hover {
          transform: translateY(-2px);
          background: #23272b;
          box-shadow: 0 4px 8px rgba(52, 58, 64, 0.3);
        }
        
        .github-button {
          background: #000000;
          color: white;
        }
        
        .github-button:hover {
          transform: translateY(-2px);
          background: #333333;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .about-button {
          background: #9c27b0;
          color: white;
        }
        
        .about-button:hover {
          transform: translateY(-2px);
          background: #7b1fa2;
          box-shadow: 0 4px 8px rgba(156, 39, 176, 0.3);
        }
        
        .center-content {
          flex: 1;
          min-width: 500px;
          max-width: 800px;
        }
        
        .start-game-container {
          width: 98%;
          max-width: 1300px;
          display: flex;
          justify-content: flex-start;
          margin-top: 1.5rem;
          align-self: center;
        }
        
        .start-button {
          width: 100%;
        }
        
        .home-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .title-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .animated-title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        
        .chinese-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #000000;
          text-align: center;
        }
        
        .animated-title .letter {
          display: inline-block;
          animation: colorShift 8s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        @keyframes colorShift {
          0% { color: #ff6b6b; text-shadow: 0 0 20px 3px #ff6b6b, 0 0 40px #ff6b6b; }
          20% { color: #4ecdc4; text-shadow: 0 0 20px 3px #4ecdc4, 0 0 40px #4ecdc4; }
          35% { color: #45b7d1; text-shadow: 0 0 20px 3px #45b7d1, 0 0 40px #45b7d1; }
          50% { color: #feca57; text-shadow: 0 0 20px 3px #feca57, 0 0 40px #feca57; }
          65% { color: #1dd1a1; text-shadow: 0 0 20px 3px #1dd1a1, 0 0 40px #1dd1a1; }
          80% { color: #5f27cd; text-shadow: 0 0 20px 3px #5f27cd, 0 0 40px #5f27cd; }
          95% { color: #ff9ff3; text-shadow: 0 0 20px 3px #ff9ff3, 0 0 40px #ff9ff3; }
          100% { color: #ff6b6b; text-shadow: 0 0 20px 3px #ff6b6b, 0 0 40px #ff6b6b; }
        }
        

        
        .home-subtitle {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1rem;
        }
        
        .user-greeting {
          font-size: 1.2rem;
          color: #3498db;
          font-weight: bold;
          margin-top: 1rem;
        }
        
        .home-content {
          width: 100%;
          max-width: 1600px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .difficulty-selection {
          text-align: center;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .difficulty-container {
          width: 100%;
          max-width: 1500px;
          aspect-ratio: 3/2;
          border-radius: 20px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          margin-bottom: 2rem;
          gap: 1.5rem;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF2A; /* 16.5% 透明度白色 */
            border: 1px solid #FFFFFF33; /* 20% 透明度白色边框 */
            backdrop-filter: blur(10px) saturate(1.35); /* 较浅模糊 + 饱和度增强 */
            box-shadow:
              0 8px 24px #20268833, /* 主阴影：淡蓝色（20%透明度） */
              inset 0px 0px 10px #FFFFFF1A, /* 内发光：白色（10%透明度） */
              inset -3px 3px 4px #FFFFFF10, /* 内阴影：白色（6%透明度）- 模拟玻璃厚度 */
              inset -0.5px 0.5px 0px #FFFFFF60; /* 高光边缘：白色（37.5%透明度）- 模拟玻璃边缘反射 */
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFFB0; /* 69% 透明度白色 */
            backdrop-filter: blur(20px); /* 中度模糊 */
            border: none; /* 无边框 */
            box-shadow: 0px 2px 12px rgba(0,0,0,.1); /* 简洁的黑色阴影 */
          ` : `
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }
        
        .difficulty-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
          text-align: left;
          width: 100%;
        }
        
        .difficulty-options {
          display: flex;
          gap: 1.5rem;
          width: 100%;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-top: 0;
        }
        
        .difficulty-option {
          flex: 0 0 auto;
          min-width: 80px;
          max-width: 120px;
          padding: 0.8rem 0.6rem;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .difficulty-option:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.easy {
          background: #4CAF50;
          color: white;
        }
        
        .difficulty-option.medium {
          background: #FFC107;
          color: #333;
        }
        
        .difficulty-option.hard {
          background: #F44336;
          color: white;
        }
        
        .difficulty-option.mode-fast {
          background: linear-gradient(135deg, #4CAF50 0%, #F44336 100%);
          color: white;
        }
        
        .difficulty-option.mode-deep {
          background: linear-gradient(135deg, #2196F3 0%, #9C27B0 100%);
          color: white;
        }
        
        .difficulty-option.selected {
          transform: translateY(-3px);
        }
        
        .difficulty-option.easy.selected {
          box-shadow: 0 0 20px 3px #4CAF50, 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.medium.selected {
          box-shadow: 0 0 20px 3px #FFC107, 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.hard.selected {
          box-shadow: 0 0 20px 3px #F44336, 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.mode-fast.selected {
          box-shadow: 0 0 20px 3px rgba(76, 175, 80, 0.7), 0 0 20px 3px rgba(244, 67, 54, 0.7), 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.mode-deep.selected {
          box-shadow: 0 0 20px 3px rgba(33, 150, 243, 0.7), 0 0 20px 3px rgba(156, 39, 176, 0.7), 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-name {
          font-size: 0.9rem;
          font-weight: bold;
          position: relative;
          z-index: 1;
        }
        
        .start-game-container {
          width: 100%;
          max-width: 1500px;
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
          padding: 0;
        }
        
        .start-button {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          padding: 1rem 0;
          border-radius: 10px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }
        
        .start-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .start-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .home-footer {
          margin-top: 3rem;
          color: #666;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .home-header h1 {
            font-size: 2.5rem;
          }
          
          .difficulty-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeView;
