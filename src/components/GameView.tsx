import React, { useState } from 'react';

// 游戏主界面组件

interface GameViewProps {
  onBackToHome: () => void;
  uiStyle?: string;
}

const GameView: React.FC<GameViewProps> = ({ uiStyle = 'default' }) => {
  const [showAcademicModal, setShowAcademicModal] = useState(false);
  const [showOIModal, setShowOIModal] = useState(false);

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
          {/* 左侧容器内容 - 使用flex布局 */}
          <div className="left-content-wrapper">
            {/* 属性显示区域 */}
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

            {/* 状态显示区域 */}
            <div className="status-container">
              <h2 className="status-title">状态</h2>
              <div className="status-list">
                <div className="status-item">
                  <span className="status-name">游戏天数</span>
                  <span className="status-value">1</span>
                </div>
                <div className="status-item">
                  <span className="status-name">游戏时间</span>
                  <span className="status-value">0小时</span>
                </div>
                <div className="status-item">
                  <span className="status-name">难度</span>
                  <span className="status-value">普通</span>
                </div>
              </div>
            </div>

            {/* 详细信息区域 */}
            <div className="details-container">
              <h2 className="details-title">详细信息</h2>
              <div className="details-buttons">
                <button 
                  className="detail-button academic-button"
                  onClick={() => setShowAcademicModal(true)}
                >
                  文化课
                </button>
                <button 
                  className="detail-button oi-button"
                  onClick={() => setShowOIModal(true)}
                >
                  OI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 文化课弹出窗口 */}
      {showAcademicModal && (
        <div className="modal-overlay" style={{ zIndex: 1000 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>文化课详情</h3>
              <button className="modal-close" onClick={() => setShowAcademicModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>文化课详细信息将在此显示</p>
            </div>
          </div>
        </div>
      )}

      {/* OI弹出窗口 */}
      {showOIModal && (
        <div className="modal-overlay" style={{ zIndex: 1000 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>OI详情</h3>
              <button className="modal-close" onClick={() => setShowOIModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>OI详细信息将在此显示</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .game-view {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 2rem;
          background: transparent;
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
          overflow-y: auto;
          scroll-behavior: smooth;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: rgba(158, 158, 158, 0.5) rgba(232, 232, 232, 0.5);
        }

        .left-rectangle-content::-webkit-scrollbar {
          width: 6px;
        }

        .left-rectangle-content::-webkit-scrollbar-track {
          background: rgba(232, 232, 232, 0.5);
          border-radius: 3px;
        }

        .left-rectangle-content::-webkit-scrollbar-thumb {
          background: rgba(158, 158, 158, 0.5);
          border-radius: 3px;
        }

        .left-rectangle-content::-webkit-scrollbar-thumb:hover {
          background: rgba(158, 158, 158, 0.8);
        }

        /* 左侧内容包装器 */
        .left-content-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          gap: 1rem;
        }

        /* 属性显示区域 */
        .stats-container {
          flex: 1;
          border-radius: 12px;
          padding: 1rem;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF2A;
            backdrop-filter: blur(10px) saturate(1.35);
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
          ` : `
            background: #f8f9fa;
          `}
        }

        .stats-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.8rem;
          text-align: center;
        }

        .stats-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .stat-name {
          font-size: 0.8rem;
          font-weight: bold;
          color: #555;
          display: flex;
          justify-content: space-between;
        }

        .stat-value {
          font-size: 0.7rem;
          font-weight: normal;
          color: #666;
        }

        .stat-bar-container {
          height: 6px;
          background: #e0e0e0;
          border-radius: 3px;
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
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        /* 状态显示区域 */
        .status-container {
          border-radius: 12px;
          padding: 1rem;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF2A;
            backdrop-filter: blur(10px) saturate(1.35);
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
          ` : `
            background: #f8f9fa;
          `}
        }

        .status-title {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.6rem;
          text-align: center;
        }

        .status-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .status-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .status-name {
          font-size: 0.8rem;
          font-weight: bold;
          color: #555;
        }

        .status-value {
          font-size: 0.8rem;
          font-weight: normal;
          color: #666;
        }

        /* 详细信息区域 */
        .details-container {
          border-radius: 12px;
          padding: 1rem;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF2A;
            backdrop-filter: blur(10px) saturate(1.35);
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
          ` : `
            background: #f8f9fa;
          `}
        }

        .details-title {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.8rem;
          text-align: center;
        }

        .details-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .detail-button {
          padding: 0.8rem;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF40;
            backdrop-filter: blur(5px);
            color: #333;
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFF60;
            backdrop-filter: blur(5px);
            color: #333;
          ` : `
            background: #e0e0e0;
            color: #333;
          `}
        }

        .detail-button:hover {
          transform: translateY(-2px);
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF60;
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFF80;
          ` : `
            background: #d0d0d0;
          `}
        }

        .academic-button {
          ${uiStyle === 'liquid-glass' ? `
            border-left: 4px solid #4CAF50;
          ` : uiStyle === 'acrylic' ? `
            border-left: 4px solid #4CAF50;
          ` : `
            border-left: 4px solid #4CAF50;
          `}
        }

        .oi-button {
          ${uiStyle === 'liquid-glass' ? `
            border-left: 4px solid #2196F3;
          ` : uiStyle === 'acrylic' ? `
            border-left: 4px solid #2196F3;
          ` : `
            border-left: 4px solid #2196F3;
          `}
        }

        /* 模态窗口样式 */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          width: 80%;
          max-width: 600px;
          max-height: 80vh;
          overflow-y: auto;
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
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h3 {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background-color: #f0f0f0;
          color: #333;
        }

        .modal-body {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
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

          .modal-content {
            width: 90%;
            padding: 1.5rem;
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

          .modal-content {
            width: 95%;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GameView;