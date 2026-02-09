// 游戏主界面组件

interface GameViewProps {
  onBackToHome: () => void;
  uiStyle?: string;
}

const GameView: React.FC<GameViewProps> = ({ uiStyle = 'default' }) => {
  return (
    <div className="game-view">
      {/* 上方圆角矩形 */}
      <div className="top-rectangle" style={{ zIndex: 1 }}>
        <div className="top-rectangle-content">
          {/* 上方矩形内容 */}
        </div>
      </div>
      
      {/* 左侧圆角矩形 */}
      <div className="left-rectangle" style={{ zIndex: 1 }}>
        <div className="left-rectangle-content">
          {/* 属性显示区域 - y轴方向长的圆角矩形 */}
          <div className="stats-container">
            <h2 className="stats-title">属性</h2>
            <div className="stats-list">
              <div className="stat-item">
                <span className="stat-name">心态</span>
                <div className="stat-bar-container">
                  <div className="stat-bar" style={{ width: '70%', backgroundColor: '#4CAF50' }}></div>
                </div>
                <span className="stat-value">70</span>
              </div>
              <div className="stat-item">
                <span className="stat-name">健康</span>
                <div className="stat-bar-container">
                  <div className="stat-bar" style={{ width: '65%', backgroundColor: '#2196F3' }}></div>
                </div>
                <span className="stat-value">65</span>
              </div>
              <div className="stat-item">
                <span className="stat-name">学术</span>
                <div className="stat-bar-container">
                  <div className="stat-bar" style={{ width: '80%', backgroundColor: '#9C27B0' }}></div>
                </div>
                <span className="stat-value">80</span>
              </div>
              <div className="stat-item">
                <span className="stat-name">社交</span>
                <div className="stat-bar-container">
                  <div className="stat-bar" style={{ width: '55%', backgroundColor: '#FF9800' }}></div>
                </div>
                <span className="stat-value">55</span>
              </div>
              <div className="stat-item">
                <span className="stat-name">金钱</span>
                <div className="stat-bar-container">
                  <div className="stat-bar" style={{ width: '60%', backgroundColor: '#FFC107' }}></div>
                </div>
                <span className="stat-value">60</span>
              </div>
            </div>
          </div>
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

        /* 属性显示区域 */
        .stats-container {
          width: 100%;
          height: calc(100% - 2rem);
          border-radius: 12px;
          padding: 1.5rem;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF2A;
            backdrop-filter: blur(10px) saturate(1.35);
            box-shadow:
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60;
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
            box-shadow: inset 0px 1px 4px rgba(0,0,0,.05);
          ` : `
            background: #f8f9fa;
            box-shadow: inset 0px 1px 4px rgba(0,0,0,.05);
          `}
        }

        .stats-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 1rem;
          text-align: center;
        }

        .stats-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat-name {
          font-size: 1rem;
          font-weight: bold;
          color: #555;
          display: flex;
          justify-content: space-between;
        }

        .stat-value {
          font-size: 0.9rem;
          font-weight: normal;
          color: #666;
        }

        .stat-bar-container {
          height: 12px;
          background: #e0e0e0;
          border-radius: 6px;
          overflow: hidden;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF40;
            backdrop-filter: blur(5px);
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFF60;
            backdrop-filter: blur(5px);
          ` : `
            background: #e0e0e0;
          `}
        }

        .stat-bar {
          height: 100%;
          border-radius: 6px;
          transition: width 0.3s ease;
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