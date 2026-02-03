// 天赋选择界面
import React, { useState } from 'react';
import { talents } from '../data/mechanics';

interface TalentViewProps {
  talentPoints: number;
  onTalentSelect: (talentId: string) => void;
  onBack: () => void;
  onContinue: () => void;
  uiStyle?: string;
}

const TalentView: React.FC<TalentViewProps> = ({ 
  talentPoints, 
  onTalentSelect, 
  onBack, 
  onContinue,
  uiStyle = 'default'
}) => {
  const [selectedTalents, setSelectedTalents] = useState<string[]>([]);
  const [remainingPoints, setRemainingPoints] = useState(talentPoints);

  const handleTalentToggle = (talentId: string) => {
    const talent = talents.find(t => t.id === talentId);
    if (!talent) return;

    const isSelected = selectedTalents.includes(talentId);
    let newSelected: string[];
    let newRemaining: number;

    if (isSelected) {
      newSelected = selectedTalents.filter(id => id !== talentId);
      newRemaining = remainingPoints + talent.cost;
    } else {
      if (remainingPoints < talent.cost) return;
      newSelected = [...selectedTalents, talentId];
      newRemaining = remainingPoints - talent.cost;
    }

    setSelectedTalents(newSelected);
    setRemainingPoints(newRemaining);
    onTalentSelect(newSelected);
  };

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
          background: linear-gradient(130deg, #f7f9fc 0%, #c6d2e4 100%);
          animation: backgroundShift 20s ease-in-out infinite;
        }
        
        @keyframes backgroundShift {
          0% {
            background: linear-gradient(130deg, #f7f9fc 0%, #c6d2e4 100%);
          }
          25% {
            background: linear-gradient(135deg, #f5f8fc 0%, #c4d0e2 100%);
          }
          50% {
            background: linear-gradient(140deg, #f6f9fc 0%, #c5d1e3 100%);
          }
          75% {
            background: linear-gradient(145deg, #f4f7fb 0%, #c3cfdf 100%);
          }
          100% {
            background: linear-gradient(130deg, #f7f9fc 0%, #c6d2e4 100%);
          }
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
          ${uiStyle === 'liquid-glass' ? `
            background: rgba(52, 152, 219, 0.8); /* 半透明按钮背景 */
            backdrop-filter: blur(5px); /* 轻微模糊 */
            border: 1px solid rgba(255, 255, 255, 0.3); /* 半透明边框 */
          ` : uiStyle === 'acrylic' ? `
            background: rgba(52, 152, 219, 0.9); /* 半透明按钮背景 */
            backdrop-filter: blur(10px); /* 中度模糊 */
            border: none; /* 无边框 */
          ` : `
            background: #3498db;
            border: none;
          `}
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
          ${uiStyle === 'liquid-glass' ? `
            background: rgba(102, 126, 234, 0.8); /* 半透明按钮背景 */
            backdrop-filter: blur(5px); /* 轻微模糊 */
            border: 1px solid rgba(255, 255, 255, 0.3); /* 半透明边框 */
          ` : uiStyle === 'acrylic' ? `
            background: rgba(102, 126, 234, 0.9); /* 半透明按钮背景 */
            backdrop-filter: blur(10px); /* 中度模糊 */
            border: none; /* 无边框 */
          ` : `
            background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
            border: none;
          `}
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
