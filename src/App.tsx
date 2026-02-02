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
          <div className="min-h-screen bg-e6f0f8 flex flex-col items-center justify-center" data-scene="游戏页">
            {/* 用户昵称显示 */}
            {userName && (
              <div 
                className="fixed top-4 right-4 text-blue-600 font-bold text-xl"
                style={{ zIndex: 30 }}
                data-tag="常规文本"
              >
                你好，{userName}
              </div>
            )}
            
            {/* 全局设置按钮 */}
            <button
              className="p-2 transition-all duration-300 hover:scale-110"
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                zIndex: 30,
                cursor: 'pointer'
              }}
              onClick={() => openModal('settings')}
              data-tag="按钮"
              aria-label="设置"
            >
              <span className="text-3xl" data-tag="按钮">⚙️</span>
            </button>
            
            {/* 游戏主界面 */}
            <div className="text-center p-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">游戏页</h1>
              <p className="text-gray-600 mb-8">这是游戏页面，具体UI将在后续实现</p>
              
              {/* 游戏状态显示 */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">游戏状态</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>心态: {playerState.mental}</span>
                    <span>健康: {playerState.health}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>学术: {playerState.academic}</span>
                    <span>社交: {playerState.social}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>金钱: ¥{playerState.money}</span>
                    <span>学习时间: {Math.round(playerState.study_time / 60)}小时</span>
                  </div>
                  <div className="flex justify-between">
                    <span>游戏天数: {playerState.game_day}</span>
                    <span>难度: {playerState.difficulty}</span>
                  </div>
                </div>
              </div>
              
              {/* 游戏控制按钮 */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  className="px-6 py-3 rounded-2xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#ffffff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  onClick={advanceGameDay}
                  data-tag="按钮"
                >
                  <span data-tag="按钮">推进一天</span>
                </button>
                <button
                  className="px-6 py-3 rounded-2xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#ffffff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  onClick={() => openModal('achievements')}
                  data-tag="按钮"
                >
                  <span data-tag="按钮">查看成就</span>
                </button>
                <button
                  className="px-6 py-3 rounded-2xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#ffffff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  onClick={() => openModal('version')}
                  data-tag="按钮"
                >
                  <span data-tag="按钮">版本信息</span>
                </button>
                <button
                  className="px-6 py-3 rounded-2xl text-gray-900 font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#ffffff',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  onClick={handleMainMenu}
                  data-tag="按钮"
                >
                  <span data-tag="按钮">返回主页</span>
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <HomeView onDifficultySelect={handleDifficultySelect} onLoadGame={handleLoadGame} userName={userName || ''} />;
    }
  };

  return (
    <>
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
    </>
  );
}

export default App