// 天赋选择界面
import React, { useState } from 'react';
import { talents } from '../data/mechanics';

interface TalentViewProps {
  talentPoints: number;
  onTalentSelect: (selectedTalents: string[]) => void;
  onBack: () => void;
  onContinue: () => void;
}

const TalentView: React.FC<TalentViewProps> = ({ 
  talentPoints, 
  onTalentSelect, 
  onBack, 
  onContinue 
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
      <div className="talent-header">
        <button className="back-button" onClick={onBack}>
          ← 返回
        </button>
        <h1>天赋选择</h1>
        <div className="talent-points">
          剩余天赋点: <span className="points-value">{remainingPoints}</span>
        </div>
      </div>

      <div className="talent-grid">
        {talents.map(talent => {
          const isSelected = selectedTalents.includes(talent.id);
          const canSelect = !isSelected && remainingPoints >= talent.cost;

          return (
            <div 
              key={talent.id}
              className={`talent-card ${isSelected ? 'selected' : ''} ${!canSelect && !isSelected ? 'disabled' : ''}`}
              onClick={() => handleTalentToggle(talent.id)}
            >
              <div className="talent-header">
                <h3>{talent.name}</h3>
                <div className="talent-cost">
                  花费: {talent.cost}
                </div>
              </div>
              <p className="talent-description">{talent.description}</p>
              <div className="talent-effects">
                <h4>效果:</h4>
                <ul>
                  {talent.effect.mental && (
                    <li>心态: {talent.effect.mental > 0 ? '+' : ''}{talent.effect.mental}</li>
                  )}
                  {talent.effect.health && (
                    <li>健康: {talent.effect.health > 0 ? '+' : ''}{talent.effect.health}</li>
                  )}
                  {talent.effect.academic && (
                    <li>学术: {talent.effect.academic > 0 ? '+' : ''}{talent.effect.academic}</li>
                  )}
                  {talent.effect.social && (
                    <li>社交: {talent.effect.social > 0 ? '+' : ''}{talent.effect.social}</li>
                  )}
                  {talent.effect.money && (
                    <li>金钱: {talent.effect.money > 0 ? '+' : ''}{talent.effect.money}</li>
                  )}
                  {talent.effect.study_efficiency && (
                    <li>学习效率: +{talent.effect.study_efficiency * 100}%</li>
                  )}
                </ul>
              </div>
              <div className="talent-status">
                {isSelected ? (
                  <span className="status-selected">已选择</span>
                ) : canSelect ? (
                  <span className="status-available">可选择</span>
                ) : (
                  <span className="status-unavailable">点数不足</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="talent-footer">
        <button 
          className="continue-button"
          onClick={onContinue}
          disabled={remainingPoints === talentPoints}
        >
          继续游戏
        </button>
      </div>

      <style>{`
        .talent-view {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .talent-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .back-button {
          background: #3498db;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .back-button:hover {
          background: #2980b9;
        }

        .talent-header h1 {
          font-size: 2.5rem;
          color: #333;
          margin: 0;
        }

        .talent-points {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
        }

        .points-value {
          color: #e74c3c;
          font-size: 1.4rem;
        }

        .talent-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex: 1;
        }

        .talent-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .talent-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .talent-card.selected {
          border: 2px solid #27ae60;
          background: rgba(39, 174, 96, 0.05);
        }

        .talent-card.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .talent-card.disabled:hover {
          transform: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .talent-card .talent-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          border: none;
          padding: 0;
        }

        .talent-card h3 {
          font-size: 1.3rem;
          margin: 0;
          color: #333;
        }

        .talent-cost {
          background: #f39c12;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .talent-description {
          margin-bottom: 1rem;
          color: #666;
          line-height: 1.4;
        }

        .talent-effects {
          margin-bottom: 1rem;
        }

        .talent-effects h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .talent-effects ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .talent-effects li {
          padding: 0.3rem 0;
          color: #555;
          font-size: 0.95rem;
        }

        .talent-status {
          text-align: right;
        }

        .status-selected {
          background: #27ae60;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .status-available {
          background: #3498db;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .status-unavailable {
          background: #95a5a6;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .talent-footer {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .continue-button {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.3s ease;
        }

        .continue-button:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .continue-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .talent-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .talent-header h1 {
            font-size: 2rem;
          }

          .talent-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TalentView;
