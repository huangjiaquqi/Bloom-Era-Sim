// 游戏主页（难度选择、开始/加载按钮）
import React from 'react';
import { difficultySettings } from '../data/constants';

interface HomeViewProps {
  onDifficultySelect: (difficulty: string) => void;
  onLoadGame: () => void;
  userName: string;
}

const HomeView: React.FC<HomeViewProps> = ({ onDifficultySelect, onLoadGame, userName }) => {
  return (
    <div className="home-view">
      <div className="home-header">
        <h1>Bloom Era Sim</h1>
        <p className="home-subtitle">Made by JasperHuang</p>
        {userName && (
          <div className="user-greeting">
            你好，{userName}
          </div>
        )}
      </div>
      
      <div className="home-content">
        <div className="difficulty-selection">
          <h2>选择难度</h2>
          <div className="difficulty-cards">
            {difficultySettings.map((difficulty) => (
              <div 
                key={difficulty.name}
                className="difficulty-card"
                onClick={() => onDifficultySelect(difficulty.name)}
              >
                <h3>{difficulty.name}</h3>
                <p>{difficulty.description}</p>
                <div className="difficulty-stats">
                  <p>初始心态: {difficulty.starting_stats.mental}</p>
                  <p>初始健康: {difficulty.starting_stats.health}</p>
                  <p>初始学术: {difficulty.starting_stats.academic}</p>
                  <p>天赋点: {difficulty.talent_points}</p>
                </div>
                <button className="select-button">开始游戏</button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="load-game-section">
          <button className="load-button" onClick={onLoadGame}>
            加载游戏
          </button>
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
        
        .home-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .home-header h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
        }
        
        .difficulty-selection h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }
        
        .difficulty-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .difficulty-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        
        .difficulty-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        
        .difficulty-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #333;
        }
        
        .difficulty-card p {
          margin-bottom: 1rem;
          color: #666;
        }
        
        .difficulty-stats {
          margin-bottom: 1.5rem;
          text-align: left;
          font-size: 0.9rem;
        }
        
        .difficulty-stats p {
          margin-bottom: 0.3rem;
        }
        
        .select-button {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        
        .select-button:hover {
          transform: scale(1.05);
        }
        
        .load-game-section {
          text-align: center;
        }
        
        .load-button {
          background: #3498db;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }
        
        .load-button:hover {
          background: #2980b9;
          transform: scale(1.05);
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
