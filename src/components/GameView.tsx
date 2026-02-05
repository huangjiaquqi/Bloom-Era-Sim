// 游戏主界面组件

interface GameViewProps {
  onBackToHome: () => void;
  uiStyle?: string;
}

const GameView: React.FC<GameViewProps> = ({ uiStyle = 'default' }) => {
  return (
    <div className="game-view">
      {/* 背景几何图形 */}
      <div className="bg-shapes">
        <div className="bg-shape bg-circle"></div>
        <div className="bg-shape bg-triangle"></div>
        <div className="bg-shape bg-square"></div>
        <div className="bg-shape bg-bes">
          {"Bloom Era Sim".split('').map((char, index) => (
            <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div className="bg-shape bg-hexagon"></div>
      </div>
      
      {/* 上方圆角矩形 */}
      <div className="top-rectangle" style={{ zIndex: 1 }}>
        <div className="top-rectangle-content">
          {/* 上方矩形内容 */}
        </div>
      </div>
      
      {/* 左侧圆角矩形 */}
      <div className="left-rectangle" style={{ zIndex: 1 }}>
        <div className="left-rectangle-content">
          {/* 左侧矩形内容 */}
        </div>
      </div>

      <style>{`
        .game-view {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          overflow: hidden;
        }

        /* 上方圆角矩形 */
        .top-rectangle {
          position: absolute;
          top: 0;
          left: 260px; /* 为左侧矩形留出空间，确保左上角露出 */
          right: 0;
          height: 150px; /* 增加高度 */
          margin: 10px; /* 为所有边留出空间，确保四个角都露出 */
          border-radius: 20px; /* 四个角都有圆角 */
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

        .top-rectangle-content {
          height: 100%;
          padding: 1rem;
        }

        /* 左侧圆角矩形 */
        .left-rectangle {
          position: absolute;
          top: 0;
          left: 0;
          height: calc(100vh - 20px); /* 为底部留出空间，确保底部圆角露出 */
          width: 250px; /* 增加宽度 */
          margin: 10px; /* 为所有边留出空间，确保四个角都露出 */
          border-radius: 20px; /* 四个角都有圆角 */
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

        .left-rectangle-content {
          height: 100%;
          padding: 1rem;
        }

        /* 背景几何图形 */
        .bg-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .bg-shape {
          position: absolute;
          opacity: 0.15;
        }
        
        .bg-circle {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: #667eea;
          top: 5%;
          left: 5%;
        }
        
        .bg-triangle {
          width: 0;
          height: 0;
          border-left: 220px solid transparent;
          border-right: 220px solid transparent;
          border-bottom: 380px solid #764ba2;
          top: 30%;
          right: 10%;
          transform: rotate(15deg);
        }
        
        .bg-square {
          width: 280px;
          height: 280px;
          background: #f093fb;
          bottom: 10%;
          left: 15%;
          transform: rotate(-10deg);
        }
        
        .bg-bes {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 150px;
          font-weight: 900;
          opacity: 0.15;
          white-space: nowrap;
        }
        
        .bg-bes .letter {
          display: inline-block;
          animation: colorShift 4s ease-in-out infinite, glow 4s ease-in-out infinite alternate;
        }
        
        @keyframes colorShift {
          0% { color: #666; }
          14% { color: #4a63cc; }
          28% { color: #5a3d7a; }
          42% { color: #d36ad8; }
          56% { color: #3498db; }
          70% { color: #2ecc71; }
          84% { color: #f39c12; }
          100% { color: #666; }
        }
        
        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(102, 102, 102, 0.7),
                        0 0 40px rgba(102, 102, 102, 0.5),
                        0 0 60px rgba(102, 102, 102, 0.3),
                        0 0 80px rgba(102, 102, 102, 0.1);
          }
          to {
            text-shadow: 0 0 30px rgba(243, 156, 18, 0.9),
                        0 0 60px rgba(46, 204, 113, 0.7),
                        0 0 90px rgba(52, 152, 219, 0.5),
                        0 0 120px rgba(74, 99, 204, 0.3);
          }
        }
        
        .bg-hexagon {
          width: 200px;
          height: 230px;
          background: #4facfe;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          top: 20%;
          right: 30%;
          transform: rotate(25deg);
        }

        @media (max-width: 768px) {
          .top-rectangle {
            height: 120px;
            left: 210px; /* 为左侧矩形留出空间，包括margin */
            margin: 8px; /* 调整margin以适应小屏幕 */
          }
          
          .left-rectangle {
            width: 200px;
            height: calc(100vh - 16px); /* 调整高度，包括margin */
            margin: 8px; /* 调整margin以适应小屏幕 */
          }
        }
        
        @media (max-width: 576px) {
          .top-rectangle {
            height: 100px;
            left: 160px; /* 为左侧矩形留出空间，包括margin */
            margin: 6px; /* 调整margin以适应小屏幕 */
          }
          
          .left-rectangle {
            width: 150px;
            height: calc(100vh - 12px); /* 调整高度，包括margin */
            margin: 6px; /* 调整margin以适应小屏幕 */
          }
        }
      `}</style>
    </div>
  );
};

export default GameView;