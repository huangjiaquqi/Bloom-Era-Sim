// 游戏主页（难度选择、开始/加载按钮）
import React, { useState } from 'react';
import { difficultySettings } from '../data/constants';

interface HomeViewProps {
  onDifficultySelect: (difficulty: string) => void;
  onLoadGame: () => void;
  userName: string;
}

const HomeView: React.FC<HomeViewProps> = ({ onDifficultySelect, onLoadGame, userName }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const handleDifficultyClick = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  const handleStartGame = () => {
    if (selectedDifficulty) {
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
            {/* 左侧矩形 */}
            <div className="left-rectangle"></div>
            
            {/* 中央内容 */}
            <div className="center-content">
              <div className="difficulty-container">
                <div className="difficulty-title">难度</div>
                <div className="difficulty-options">
                  <div 
                    className={`difficulty-option easy ${selectedDifficulty === '普通' ? 'selected' : ''}`}
                    onClick={() => handleDifficultyClick('普通')}
                  >
                    <span className="difficulty-name">普通</span>
                  </div>
                  <div 
                    className={`difficulty-option medium ${selectedDifficulty === '中等' ? 'selected' : ''}`}
                    onClick={() => handleDifficultyClick('中等')}
                  >
                    <span className="difficulty-name">中等</span>
                  </div>
                  <div 
                    className={`difficulty-option hard ${selectedDifficulty === '现实' ? 'selected' : ''}`}
                    onClick={() => handleDifficultyClick('现实')}
                  >
                    <span className="difficulty-name">现实</span>
                  </div>
                </div>
              </div>
              
              <div className="start-game-container">
                <button 
                  className="start-button" 
                  onClick={handleStartGame}
                  disabled={!selectedDifficulty}
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
          max-width: 1200px;
          justify-content: center;
        }
        
        .left-rectangle {
          width: 150px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        
        .center-content {
          flex: 1;
          min-width: 500px;
          max-width: 800px;
        }
        
        .start-game-container {
          width: 90%;
          max-width: 1000px;
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
          animation: colorShift 4s linear infinite, glow 4s ease-in-out infinite alternate;
          animation-delay: 0s;
        }
        
        @keyframes colorShift {
          0% { color: #ff00ff; }
          25% { color: #00ffff; }
          50% { color: #ffff00; }
          75% { color: #00ff00; }
          100% { color: #ff00ff; }
        }
        
        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(255, 0, 255, 0.7),
                        0 0 40px rgba(255, 0, 255, 0.5),
                        0 0 60px rgba(255, 0, 255, 0.3),
                        0 0 80px rgba(255, 0, 255, 0.1);
          }
          to {
            text-shadow: 0 0 30px rgba(0, 255, 255, 0.9),
                        0 0 60px rgba(0, 255, 255, 0.7),
                        0 0 90px rgba(0, 255, 255, 0.5),
                        0 0 120px rgba(0, 255, 255, 0.3);
          }
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
          max-width: 1200px;
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
          width: 90%;
          max-width: 1000px;
          aspect-ratio: 3/2;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          margin-bottom: 2rem;
          gap: 1rem;
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
        
        .difficulty-name {
          font-size: 0.9rem;
          font-weight: bold;
          position: relative;
          z-index: 1;
        }
        
        .start-game-container {
          width: 100%;
          max-width: 1000px;
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
          padding: 0;
        }
        
        .start-button {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
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
