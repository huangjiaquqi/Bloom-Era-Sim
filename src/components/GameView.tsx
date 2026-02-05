// 游戏主界面组件

interface GameViewProps {
  onBackToHome: () => void;
  uiStyle?: string;
}

const GameView: React.FC<GameViewProps> = ({ onBackToHome, uiStyle = 'default' }) => {
  return (
    <div className="game-view">
      <div className="game-content">
        <h1>游戏界面</h1>
        <p className="placeholder-text">暂未做完</p>
        <button className="back-button" onClick={onBackToHome}>
          返回主页
        </button>
      </div>

      <style>{`
        .game-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .game-content {
          text-align: center;
          padding: 4rem;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF2A;
            border: 1px solid #FFFFFF33;
            backdrop-filter: blur(10px) saturate(1.35);
            box-shadow:
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60;
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
            border: none;
            box-shadow: 0px 2px 12px rgba(0,0,0,.1);
          ` : `
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }

        .game-content h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 2rem;
        }

        .placeholder-text {
          font-size: 1.5rem;
          color: #666;
          margin-bottom: 3rem;
        }

        .back-button {
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          background: #3498db;
          border: none;
        }

        .back-button:hover {
          background: #2980b9;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .game-content {
            padding: 2rem;
          }

          .game-content h1 {
            font-size: 2rem;
          }

          .placeholder-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GameView;