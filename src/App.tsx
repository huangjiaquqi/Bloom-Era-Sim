import { useState, useEffect } from 'react';
import HomeView from './components/HomeView';
import TalentView from './components/TalentView';
import ExamView from './components/ExamView';
import GameView from './components/GameView';
import EndingScreen from './components/EndingScreen';
import { NicknameInput } from './components/NicknameInput';
import { SettingsModal } from './components/SettingsModal';
import { AchievementModal } from './components/AchievementModal';
import { VersionModal } from './components/VersionModal';
import { AboutModal } from './components/AboutModal';
import { useGameLogic } from './hooks/useGameLogic';
import { achievements } from './data/achievements';
import { versions } from './data/versions';
import { ModalType } from './types';

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
    handleExamComplete,
    handleRestart,
    handleMainMenu
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
            onOpenModal={(modal: string) => openModal(modal as ModalType)}
          />
        );
      case 'talent':
        return (
          <TalentView
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
          <GameView 
            onBackToHome={handleMainMenu} 
            uiStyle={uiStyle} 
          />
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
      
      {/* 简介窗口 */}
      {showModal && (currentModal as string) === 'about' && (
        <AboutModal 
          closeModal={closeModal} 
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
          0% { color: #ff6b6b; }
          14% { color: #4ecdc4; }
          28% { color: #45b7d1; }
          42% { color: #ff9ff3; }
          56% { color: #feca57; }
          70% { color: #1dd1a1; }
          84% { color: #5f27cd; }
          100% { color: #ff6b6b; }
        }
        
        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(255, 107, 107, 0.7),
                        0 0 40px rgba(78, 205, 196, 0.5),
                        0 0 60px rgba(69, 183, 209, 0.3),
                        0 0 80px rgba(255, 159, 243, 0.1);
          }
          to {
            text-shadow: 0 0 30px rgba(254, 202, 87, 0.9),
                        0 0 60px rgba(29, 209, 161, 0.7),
                        0 0 90px rgba(95, 39, 205, 0.5),
                        0 0 120px rgba(255, 107, 107, 0.3);
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