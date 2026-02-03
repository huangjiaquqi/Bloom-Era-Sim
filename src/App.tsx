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
          />
        );
      case 'talent':
        return (
          <TalentView
            talentPoints={playerState.talent_points}
            onTalentSelect={handleTalentSelect}
            onBack={() => setCurrentPage('home')}
            onContinue={() => setCurrentPage('game')}
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
                background: white;
                padding: 4rem;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                width: 100%;
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
        return <HomeView onDifficultySelect={handleDifficultySelect} onLoadGame={handleLoadGame} userName={userName || ''} />;
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
        />
      )}
      
      {/* 设置窗口 */}
      {showModal && currentModal === 'settings' && (
        <SettingsModal 
          closeModal={closeModal} 
        />
      )}
      
      {/* 成就窗口 */}
      {showModal && currentModal === 'achievements' && (
        <AchievementModal 
          achievements={achievements} 
          closeModal={closeModal} 
        />
      )}
      
      {/* 版本窗口 */}
      {showModal && currentModal === 'version' && (
        <VersionModal 
          versions={versions} 
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