// 天赋选择界面
import React, { useState } from 'react';
import { Talent } from '../data/mechanics';

interface TalentViewProps {
  onBack: () => void;
  onContinue: () => void;
  onTalentSelect: (selectedTalents: string[]) => void;
  talents: Talent[];
  availableTalentPoints: number;
  selectedTalents: string[];
  uiStyle?: string;
}

const TalentView: React.FC<TalentViewProps> = ({ 
  onBack, 
  onContinue,
  onTalentSelect,
  talents,
  availableTalentPoints,
  selectedTalents,
  uiStyle = 'default'
}) => {
  const [hoveredTalent, setHoveredTalent] = useState<string | null>(null);

  const handleTalentToggle = (talentId: string) => {
    const talent = talents.find(t => t.id === talentId);
    if (!talent) return;

    let newSelectedTalents;
    if (selectedTalents.includes(talentId)) {
      // 取消选择
      newSelectedTalents = selectedTalents.filter(id => id !== talentId);
    } else {
      // 选择天赋，检查点数是否足够
      const currentCost = selectedTalents.reduce((total, id) => {
        const t = talents.find(t => t.id === id);
        return total + (t?.cost || 0);
      }, 0);

      // 对于负面天赋（cost为负数），它们会增加天赋点数，所以总是可以选择
      if (talent.cost <= 0 || currentCost + talent.cost <= availableTalentPoints) {
        newSelectedTalents = [...selectedTalents, talentId];
      }
    }

    if (newSelectedTalents) {
      onTalentSelect(newSelectedTalents);
    }
  };

  // 计算已使用的天赋点数
  const usedTalentPoints = selectedTalents.reduce((total, id) => {
    const talent = talents.find(t => t.id === id);
    return total + (talent?.cost || 0);
  }, 0);

  return (
    <div className="talent-view">
      <div className="talent-content">
        <div className="header-section">
          <h1>天赋选择</h1>
          <div className="talent-points-display">
            <span>可用天赋点: </span>
            <span className="points-value">{availableTalentPoints}</span>
          </div>
        </div>

        <div className="talents-grid">
          {talents.map((talent) => {
            const isSelected = selectedTalents.includes(talent.id);
            // 对于负面天赋（cost为负数），它们总是可选择的
            const isAffordable = !isSelected && (talent.cost <= 0 || usedTalentPoints + talent.cost <= availableTalentPoints);
            const isHovered = hoveredTalent === talent.id;

            return (
              <div
                key={talent.id}
                className={`talent-card ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
                onClick={() => handleTalentToggle(talent.id)}
                onMouseEnter={() => setHoveredTalent(talent.id)}
                onMouseLeave={() => setHoveredTalent(null)}
                style={{
                  ...(uiStyle === 'liquid-glass' && {
                    background: isSelected ? '#4CAF502A' : '#FFFFFF2A',
                    border: `1px solid ${isSelected ? '#4CAF5080' : '#FFFFFF33'}`,
                    backdropFilter: 'blur(10px) saturate(1.35)',
                    boxShadow:
                      isHovered
                        ? `0 12px 28px #20268844, inset 0px 0px 10px #FFFFFF1A, inset -3px 3px 4px #FFFFFF10, inset -0.5px 0.5px 0px #FFFFFF60`
                        : `0 8px 24px #20268833, inset 0px 0px 10px #FFFFFF1A, inset -3px 3px 4px #FFFFFF10, inset -0.5px 0.5px 0px #FFFFFF60`
                  }),
                  ...(uiStyle === 'acrylic' && {
                    background: isSelected ? '#4CAF5090' : '#FFFFFFB0',
                    border: `1px solid ${isSelected ? '#4CAF5080' : 'transparent'}`,
                    backdropFilter: 'blur(20px)',
                    boxShadow:
                      isHovered
                        ? '0px 4px 16px rgba(0,0,0,.15)'
                        : '0px 2px 12px rgba(0,0,0,.1)'
                  }),
                  ...(uiStyle === 'default' && {
                    background: isSelected ? '#E8F5E9' : 'white',
                    border: `1px solid ${isSelected ? '#4CAF50' : '#E0E0E0'}`,
                    boxShadow:
                      isHovered
                        ? '0 12px 24px rgba(0, 0, 0, 0.15)'
                        : '0 4px 12px rgba(0, 0, 0, 0.08)'
                  })
                }}
              >
                <div className="talent-header">
                  <h3 className="talent-name">{talent.name}</h3>
                  <span className="talent-cost">{talent.cost}点</span>
                </div>
                <p className="talent-description">{talent.description}</p>
                <div className="talent-effect">
                  <span className="effect-label">效果:</span>
                  <ul className="effect-list">
                    {Object.entries(talent.effect).map(([key, value]) => {
                      if (value === undefined || value === 0) return null;
                      const effectName = {
                        mental: '心态',
                        health: '健康',
                        academic: '学术',
                        social: '社交',
                        money: '金钱',
                        study_efficiency: '学习效率'
                      }[key] || key;
                      return (
                        <li key={key}>
                          {effectName}: {value > 0 ? '+' : ''}{value}{key === 'study_efficiency' ? '%' : ''}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="talent-status">
                  {isSelected ? (
                    <span className="status-selected">已选择</span>
                  ) : isAffordable ? (
                    <span className="status-affordable">可选择</span>
                  ) : (
                    <span className="status-unaffordable">点数不足</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

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
          padding: 3rem;
          border-radius: 20px;
          max-width: 1200px;
          width: 90%;
          max-height: 90vh;
          min-height: 80vh;
          overflow-y: auto;
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

        .header-section {
          margin-bottom: 2rem;
          text-align: center;
        }

        .talent-content h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .talent-points-display {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .points-value {
          color: #4CAF50;
          font-size: 1.4rem;
        }

        .talents-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .talent-card {
          padding: 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          min-height: 200px;
        }

        .talent-card:hover {
          transform: translateY(-5px);
        }

        .talent-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .talent-name {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        .talent-cost {
          background: #f0f0f0;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: bold;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF40;
            backdrop-filter: blur(5px);
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFF60;
            backdrop-filter: blur(5px);
          ` : `
            background: #f0f0f0;
          `}
        }

        .talent-description {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .talent-effect {
          margin-bottom: 1rem;
        }

        .effect-label {
          font-weight: bold;
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .effect-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .effect-list li {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 0.3rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .effect-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #4CAF50;
          font-weight: bold;
        }

        .talent-status {
          text-align: right;
        }

        .status-selected {
          color: #4CAF50;
          font-weight: bold;
        }

        .status-affordable {
          color: #2196F3;
          font-weight: bold;
        }

        .status-unaffordable {
          color: #F44336;
          font-weight: bold;
        }

        .button-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
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
            padding: 1.5rem;
          }

          .talent-content h1 {
            font-size: 2rem;
          }

          .talents-grid {
            grid-template-columns: 1fr;
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
