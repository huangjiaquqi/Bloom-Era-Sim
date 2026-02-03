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
          background: white;
          padding: 4rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
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
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
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
