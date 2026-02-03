import { useState, useEffect } from 'react';
import HomeView from './components/HomeView';
import TalentView from './components/TalentView';
import ExamView from './components/ExamView';
import EndingScreen from './components/EndingScreen';
import { NicknameInput } from './components/NicknameInput';
import { SettingsModal } from './components/SettingsModal';
import { AchievementModal } from './components/AchievementModal';
import { VersionModal } from './components/VersionModal';
import { useGameLogic } from './hooks/useGameLogic';
import { achievements } from './data/achievements';
import { versions } from './data/versions';

function App() {
  // 使用游戏逻辑钩子
  const {
    currentPage,
    showModal,
    currentModal,
    playerState,
    examResults,
    setCurrentPage,
    openModal,
    closeModal,
    handleDifficultySelect,
    handleTalentSelect,
    handleExamComplete,
    handleRestart,
    handleMainMenu,
    advanceGameDay
  } = useGameLogic();

  // 状态管理：用户昵称
  const [userName, setUserName] = useState<string | null>(null);
  const [showNameInput, setShowNameInput] = useState(false);
  const [nicknameInput, setNicknameInput] = useState('');
  
  // 状态管理：UI风格
  const [uiStyle, setUiStyle] = useState<string>('default'); // 默认风格

  // 初始化：检查localStorage中的用户昵称
  useEffect(() => {
    const savedName = localStorage.getItem('bloomEraSimUserName');
    if (savedName) {
      setUserName(savedName);
    } else {
      setShowNameInput(true);
    }
  }, []);

  // 处理保存用户昵称
  const handleSaveName = (name: string) => {
    if (name.trim()) {
      setUserName(name.trim());
      localStorage.setItem('bloomEraSimUserName', name.trim());
      setShowNameInput(false);
    }
  };

  // 处理加载游戏
  const handleLoadGame = () => {
    // 这里可以添加加载游戏的逻辑
    setCurrentPage('game');
  };

  // 渲染不同页面
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            onDifficultySelect={handleDifficultySelect}
            onLoadGame={handleLoadGame}
            userName={userName || ''}
            uiStyle={uiStyle}
          />
        );
      case 'talent':
        return (
          <TalentView
            talentPoints={playerState.talent_points}
            onTalentSelect={handleTalentSelect}
            onBack={() => setCurrentPage('home')}
            onContinue={() => setCurrentPage('game')}
            uiStyle={uiStyle}
          />
        );
      case 'exam':
        return (
          <ExamView
            subject="综合"
            difficulty="medium"
            academicLevel={playerState.academic}
            studyTime={playerState.study_time}
            onExamComplete={handleExamComplete}
            onCancel={() => setCurrentPage('game')}
            uiStyle={uiStyle}
          />
        );
      case 'ending':
        return (
          <EndingScreen
            finalStats={playerState}
            achievements={achievements}
            examResults={examResults}
            playTime={playerState.play_time}
            onRestart={handleRestart}
            onMainMenu={handleMainMenu}
            uiStyle={uiStyle}
          />
        );
      case 'game':
        return (
          <div className="min-h-screen flex flex-col items-center justify-center game-view" data-scene="游戏页">
            {/* 游戏主界面 */}
            <div className="game-content">
              <h1>游戏界面</h1>
              <p className="placeholder-text">暂未做完</p>
              <button
                className="back-button"
                onClick={handleMainMenu}
                data-tag="按钮"
              >
                返回主页
              </button>
            </div>
            
            <style>{`
              .game-view {
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
              
              .game-content {
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
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                `}
              }
              
              .game-content h1 {
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
                ${uiStyle === 'liquid-glass' || uiStyle === 'acrylic' ? `
                  transform: scale(1.05);
                ` : `
                  background: #2980b9;
                  transform: scale(1.05);
                `}
              }
              
              @media (max-width: 768px) {
                .game-content {
                  padding: 2rem;
                }
                
                .game-content h1 {
                  font-size: 2rem;
                }
                
                .placeholder-text {
                  font-size: 1.2rem;
                }
              }
            `}</style>
          </div>
        );
      default:
        return <HomeView onDifficultySelect={handleDifficultySelect} onLoadGame={handleLoadGame} userName={userName || ''} uiStyle={uiStyle} />;
    }
  };

  return (
    <div className="app-container">
      {/* 全局设置按钮 */}
      <button
        className="global-settings-button"
        onClick={() => openModal('settings')}
        data-tag="按钮"
        aria-label="设置"
      >
        <span className="text-3xl" data-tag="按钮">⚙️</span>
      </button>
      
      {/* 渲染当前页面 */}
      {renderPage()}
      
      {/* 昵称输入窗口 */}
      {showNameInput && (
        <NicknameInput 
          nicknameInput={nicknameInput}
          setNicknameInput={setNicknameInput}
          saveUserName={handleSaveName}
          uiStyle={uiStyle}
        />
      )}
      
      {/* 设置窗口 */}
      {showModal && currentModal === 'settings' && (
        <SettingsModal 
          closeModal={closeModal} 
          uiStyle={uiStyle}
          setUiStyle={setUiStyle}
        />
      )}
      
      {/* 成就窗口 */}
      {showModal && currentModal === 'achievements' && (
        <AchievementModal 
          achievements={achievements} 
          closeModal={closeModal} 
          uiStyle={uiStyle}
        />
      )}
      
      {/* 版本窗口 */}
      {showModal && currentModal === 'version' && (
        <VersionModal 
          versions={versions} 
          closeModal={closeModal} 
          uiStyle={uiStyle}
        />
      )}
      
      <style>{`
        .app-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        
        .global-settings-button {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: transparent;
          border: none;
          z-index: 10;
          cursor: pointer;
          padding: 8px;
          transition: transform 0.3s ease;
        }
        
        .global-settings-button:hover {
          transform: scale(1.1);
        }
        
        .text-3xl {
          font-size: 1.8rem;
        }
      `}</style>
    </div>
  );
}

export default App