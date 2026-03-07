import React, { useState, useEffect } from 'react';
import { 
  DEFAULT_CULTURAL_SKILLS, 
  calculateCulturalAbilities, 
  CULTURAL_SUBJECT_NAMES,
  CulturalSubjectAbilities 
} from '../data/culturalSkills';
import { 
  DEFAULT_OI_KNOWLEDGE,
  OI_KNOWLEDGE_NAMES,
  OIKnowledge
} from '../data/oiSkills';
import { 
  DEFAULT_GENERAL_ABILITIES,
  GENERAL_ABILITY_NAMES,
  GeneralAbilities
} from '../data/generalSkills';

interface GameViewProps {
  onBackToHome: () => void;
  uiStyle?: string;
}

const GameView: React.FC<GameViewProps> = ({ uiStyle = 'default' }) => {
  const [showAcademicModal, setShowAcademicModal] = useState(false);
  const [showOIModal, setShowOIModal] = useState(false);
  const [subjectAbilities, setSubjectAbilities] = useState<CulturalSubjectAbilities>(
    calculateCulturalAbilities(DEFAULT_CULTURAL_SKILLS)
  );
  const [oiKnowledge, setOiKnowledge] = useState<OIKnowledge>(DEFAULT_OI_KNOWLEDGE);
  const [generalAbilities, setGeneralAbilities] = useState<GeneralAbilities>(DEFAULT_GENERAL_ABILITIES);

  useEffect(() => {
    setSubjectAbilities(calculateCulturalAbilities(DEFAULT_CULTURAL_SKILLS));
    setOiKnowledge(DEFAULT_OI_KNOWLEDGE);
    setGeneralAbilities(DEFAULT_GENERAL_ABILITIES);
  }, []);

  const getAbilityColor = (value: number) => {
    if (value >= 80) return '#4CAF50';
    if (value >= 60) return '#FFC107';
    if (value >= 40) return '#FF9800';
    return '#F44336';
  };

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
          <h2 className="section-title">学科能力</h2>
          <div className="subject-abilities-list">
            {(Object.entries(subjectAbilities) as [keyof CulturalSubjectAbilities, number][]).map(([key, value]) => (
              <div key={key} className="subject-ability-item">
                <div className="subject-ability-header">
                  <span className="subject-name">{CULTURAL_SUBJECT_NAMES[key]}</span>
                  <span 
                    className="subject-value"
                    style={{ color: getAbilityColor(value) }}
                  >
                    {value}
                  </span>
                </div>
                <div className="ability-bar-container">
                  <div 
                    className="ability-bar"
                    style={{ 
                      width: `${value}%`,
                      backgroundColor: getAbilityColor(value)
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧圆角矩形 */}
      <div className="right-rectangle" style={{ zIndex: 1 }}>
        <div className="right-rectangle-content">
          <h2 className="section-title">OI竞赛</h2>
          
          <h3 className="subsection-title">知识结构</h3>
          <div className="subject-abilities-list">
            {(Object.entries(oiKnowledge) as [keyof OIKnowledge, number][]).map(([key, value]) => (
              <div key={key} className="subject-ability-item">
                <div className="subject-ability-header">
                  <span className="subject-name">{OI_KNOWLEDGE_NAMES[key]}</span>
                  <span 
                    className="subject-value"
                    style={{ color: getAbilityColor(value) }}
                  >
                    {value}
                  </span>
                </div>
                <div className="ability-bar-container">
                  <div 
                    className="ability-bar"
                    style={{ 
                      width: `${value}%`,
                      backgroundColor: getAbilityColor(value)
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="subsection-title">常规属性</h3>
          <div className="subject-abilities-list">
            {(Object.entries(generalAbilities) as [keyof GeneralAbilities, number][]).map(([key, value]) => (
              <div key={key} className="subject-ability-item">
                <div className="subject-ability-header">
                  <span className="subject-name">{GENERAL_ABILITY_NAMES[key]}</span>
                  <span 
                    className="subject-value"
                    style={{ color: getAbilityColor(value) }}
                  >
                    {value}
                  </span>
                </div>
                <div className="ability-bar-container">
                  <div 
                    className="ability-bar"
                    style={{ 
                      width: `${value}%`,
                      backgroundColor: getAbilityColor(value)
                    }}
                  ></div>
                </div>
              </div>
            ))}
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
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }

        .left-rectangle-content {
          height: 100%;
          padding: 1rem;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .subsection-title {
          font-size: 0.95rem;
          font-weight: bold;
          color: #555;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
          text-align: center;
        }

        .subject-abilities-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .subject-ability-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .subject-ability-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .subject-name {
          font-size: 0.85rem;
          font-weight: bold;
          color: #555;
        }

        .subject-value {
          font-size: 0.9rem;
          font-weight: bold;
        }

        .ability-bar-container {
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          ${uiStyle === 'liquid-glass' ? `
            background: #FFFFFF40;
          ` : uiStyle === 'acrylic' ? `
            background: #FFFFFF60;
          ` : `
            background: #e0e0e0;
          `}
        }

        .ability-bar {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .left-rectangle::-webkit-scrollbar {
          width: 6px;
        }

        .left-rectangle::-webkit-scrollbar-track {
          background: rgba(232, 232, 232, 0.5);
          border-radius: 3px;
        }

        .left-rectangle::-webkit-scrollbar-thumb {
          background: rgba(158, 158, 158, 0.5);
          border-radius: 3px;
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
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }
        
        .right-rectangle::-webkit-scrollbar {
          width: 6px;
        }
        
        .right-rectangle::-webkit-scrollbar-track {
          background: rgba(232, 232, 232, 0.5);
          border-radius: 3px;
        }
        
        .right-rectangle::-webkit-scrollbar-thumb {
          background: rgba(158, 158, 158, 0.5);
          border-radius: 3px;
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
