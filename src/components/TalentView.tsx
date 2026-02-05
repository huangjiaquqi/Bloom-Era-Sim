// 天赋选择界面
import React from 'react';

interface TalentViewProps {
  onBack: () => void;
  onContinue: () => void;
  uiStyle?: string;
}

const TalentView: React.FC<TalentViewProps> = ({ 
  onBack, 
  onContinue,
  uiStyle = 'default'
}) => {

  return (
    <div className="talent-view">
      <div className="talent-content">
        <h1>天赋选择</h1>
        <p className="placeholder-text">暂未做完</p>
        <div className="button-container">
          <button className="back-button" onClick={onBack}>
            返回主页
          </button>
          <button className="continue-button" onClick={onContinue}>
            前往游戏页
          </button>
        </div>
      </div>

      <style>{`
        .talent-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .talent-content {
          text-align: center;
          padding: 4rem;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
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

        .talent-content h1 {
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

        .button-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .continue-button {
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border: none;
        }

        .continue-button:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .talent-content {
            padding: 2rem;
          }

          .talent-content h1 {
            font-size: 2rem;
          }

          .placeholder-text {
            font-size: 1.2rem;
          }

          .button-container {
            flex-direction: column;
            align-items: center;
          }

          .back-button,
          .continue-button {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default TalentView;
