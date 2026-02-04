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
            onOpenModal={openModal}
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
          <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }} data-scene="游戏页">
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
      {/* 背景几何图形 */}
      <div className="bg-shapes">
        <div className="bg-shape bg-circle"></div>
        <div className="bg-shape bg-triangle"></div>
        <div className="bg-shape bg-square"></div>
        <div className="bg-shape bg-bes">
          {"Bloom Era Sim".split('').map((char, index) => (
            <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div className="bg-shape bg-hexagon"></div>
      </div>
      
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
        
        /* 背景几何图形 */
        .bg-shapes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .bg-shape {
          position: absolute;
          opacity: 0.15;
        }
        
        .bg-circle {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: #667eea;
          top: 5%;
          left: 5%;
        }
        
        .bg-triangle {
          width: 0;
          height: 0;
          border-left: 220px solid transparent;
          border-right: 220px solid transparent;
          border-bottom: 380px solid #764ba2;
          top: 30%;
          right: 10%;
          transform: rotate(15deg);
        }
        
        .bg-square {
          width: 280px;
          height: 280px;
          background: #f093fb;
          bottom: 10%;
          left: 15%;
          transform: rotate(-10deg);
        }
        
        .bg-bes {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 150px;
          font-weight: 900;
          opacity: 0.15;
          white-space: nowrap;
        }
        
        .bg-bes .letter {
          display: inline-block;
          animation: colorShift 4s ease-in-out infinite, glow 4s ease-in-out infinite alternate;
        }
        
        @keyframes colorShift {
          0% { color: #666; }
          14% { color: #4a63cc; }
          28% { color: #5a3d7a; }
          42% { color: #d36ad8; }
          56% { color: #3498db; }
          70% { color: #2ecc71; }
          84% { color: #f39c12; }
          100% { color: #666; }
        }
        
        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(102, 102, 102, 0.7),
                        0 0 40px rgba(102, 102, 102, 0.5),
                        0 0 60px rgba(102, 102, 102, 0.3),
                        0 0 80px rgba(102, 102, 102, 0.1);
          }
          to {
            text-shadow: 0 0 30px rgba(243, 156, 18, 0.9),
                        0 0 60px rgba(46, 204, 113, 0.7),
                        0 0 90px rgba(52, 152, 219, 0.5),
                        0 0 120px rgba(74, 99, 204, 0.3);
          }
        }
        
        .bg-hexagon {
          width: 200px;
          height: 230px;
          background: #4facfe;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          top: 20%;
          right: 30%;
          transform: rotate(25deg);
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