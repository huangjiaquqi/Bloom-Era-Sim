import React, { useState } from 'react';

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
        </div>
      </div>
      
      {/* 左侧圆角矩形 */}
      <div className="left-rectangle" style={{ zIndex: 1 }}>
        <div className="left-rectangle-content">
        </div>
      </div>

      {/* 右侧圆角矩形 */}
      <div className="right-rectangle" style={{ zIndex: 1 }}>
        <div className="right-rectangle-content">
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
          left: 260px;
          right: 260px;
          height: 150px;
          margin: 10px;
          border-radius: 20px;
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
          height: calc(100vh - 20px);
          width: 250px;
          margin: 10px;
          border-radius: 20px;
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

        /* 右侧圆角矩形 */
        .right-rectangle {
          position: absolute;
          top: 0;
          right: 0;
          height: calc(100vh - 20px);
          width: 250px;
          margin: 10px;
          border-radius: 20px;
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

        .right-rectangle-content {
          height: 100%;
          padding: 1rem;
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
            left: 210px;
            right: 210px;
            margin: 8px;
          }
          
          .left-rectangle, .right-rectangle {
            width: 200px;
            height: calc(100vh - 16px);
            margin: 8px;
          }

          .modal-content {
            width: 90%;
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .top-rectangle {
            height: 100px;
            left: 160px;
            right: 160px;
            margin: 6px;
          }
          
          .left-rectangle, .right-rectangle {
            width: 150px;
            height: calc(100vh - 12px);
            margin: 6px;
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
