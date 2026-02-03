// 游戏结束界面
import React from 'react';

interface EndingScreenProps {
  finalStats: {
    mental: number;
    health: number;
    academic: number;
    social: number;
    money: number;
    study_time: number;
  };
  achievements: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }[];
  examResults: {
    subject: string;
    score: number;
    rank: string;
  }[];
  playTime: number;
  onRestart: () => void;
  onMainMenu: () => void;
  uiStyle?: string;
}

const EndingScreen: React.FC<EndingScreenProps> = ({ 
  finalStats, 
  achievements, 
  examResults, 
  playTime, 
  onRestart, 
  onMainMenu,
  uiStyle = 'default'
}) => {
  // 计算总成就完成数
  const completedAchievements = achievements.filter(a => a.completed).length;
  const totalAchievements = achievements.length;
  const achievementPercentage = Math.round((completedAchievements / totalAchievements) * 100);

  // 计算游戏时长
  const formatPlayTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}小时${mins}分钟`;
  };

  // 计算最终评价
  const calculateFinalRank = () => {
    const avgStat = (finalStats.academic + finalStats.social + finalStats.mental + finalStats.health) / 4;
    
    if (avgStat >= 90) return { rank: 'S', title: '完美人生', description: '你在各方面都达到了极致，是真正的人生赢家！' };
    if (avgStat >= 80) return { rank: 'A', title: '优秀毕业生', description: '你表现出色，为自己的高中生活交上了满意的答卷。' };
    if (avgStat >= 70) return { rank: 'B', title: '良好学生', description: '你度过了充实的高中生活，有不少收获。' };
    if (avgStat >= 60) return { rank: 'C', title: '合格毕业生', description: '你勉强完成了高中生活，还有很大的提升空间。' };
    return { rank: 'D', title: '有待改进', description: '你的高中生活充满了挑战，需要更加努力。' };
  };

  const finalRank = calculateFinalRank();

  return (
    <div className="ending-screen">
      <div className="ending-header">
        <h1>游戏结束</h1>
        <div className="final-rank">
          <div className={`rank-badge rank-${finalRank.rank.toLowerCase()}`}>
            {finalRank.rank}
          </div>
          <h2>{finalRank.title}</h2>
          <p>{finalRank.description}</p>
        </div>
      </div>

      <div className="ending-content">
        <div className="stats-section">
          <h3>最终属性</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">心态</span>
              <div className="stat-bar-container">
                <div 
                  className="stat-bar mental"
                  style={{ width: `${Math.min(finalStats.mental, 100)}%` }}
                ></div>
              </div>
              <span className="stat-value">{finalStats.mental}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">健康</span>
              <div className="stat-bar-container">
                <div 
                  className="stat-bar health"
                  style={{ width: `${Math.min(finalStats.health, 100)}%` }}
                ></div>
              </div>
              <span className="stat-value">{finalStats.health}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">学术</span>
              <div className="stat-bar-container">
                <div 
                  className="stat-bar academic"
                  style={{ width: `${Math.min(finalStats.academic, 100)}%` }}
                ></div>
              </div>
              <span className="stat-value">{finalStats.academic}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">社交</span>
              <div className="stat-bar-container">
                <div 
                  className="stat-bar social"
                  style={{ width: `${Math.min(finalStats.social, 100)}%` }}
                ></div>
              </div>
              <span className="stat-value">{finalStats.social}</span>
            </div>
          </div>
          <div className="additional-stats">
            <div className="additional-stat">
              <span className="stat-label">金钱</span>
              <span className="stat-value">¥{finalStats.money}</span>
            </div>
            <div className="additional-stat">
              <span className="stat-label">学习时间</span>
              <span className="stat-value">{Math.round(finalStats.study_time / 60)}小时</span>
            </div>
            <div className="additional-stat">
              <span className="stat-label">游戏时长</span>
              <span className="stat-value">{formatPlayTime(playTime)}</span>
            </div>
          </div>
        </div>

        <div className="achievements-section">
          <h3>成就</h3>
          <div className="achievements-summary">
            <div className="achievement-percentage">
              <div className="percentage-circle">
                <span className="percentage-value">{achievementPercentage}%</span>
              </div>
              <p>{completedAchievements}/{totalAchievements} 成就</p>
            </div>
            <div className="completed-achievements">
              <h4>已完成的成就</h4>
              <ul>
                {achievements
                  .filter(a => a.completed)
                  .map(achievement => (
                    <li key={achievement.id}>
                      <span className="achievement-title">{achievement.title}</span>
                      <span className="achievement-description">{achievement.description}</span>
                    </li>
                  ))
                }
                {completedAchievements === 0 && (
                  <li className="no-achievements">
                    没有完成任何成就
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="exam-results-section">
          <h3>考试成绩</h3>
          <div className="exam-results-list">
            {examResults.length > 0 ? (
              examResults.map((result, index) => (
                <div key={index} className="exam-result-item">
                  <span className="exam-subject">{result.subject}</span>
                  <span className="exam-score">{result.score}</span>
                  <span className={`exam-rank rank-${result.rank.toLowerCase()}`}>
                    {result.rank}
                  </span>
                </div>
              ))
            ) : (
              <p className="no-exams">没有参加任何考试</p>
            )}
          </div>
        </div>
      </div>

      <div className="ending-footer">
        <button className="restart-button" onClick={onRestart}>
          重新开始
        </button>
        <button className="main-menu-button" onClick={onMainMenu}>
          返回主菜单
        </button>
      </div>

      <style>{`
        .ending-screen {
          display: flex;
          flex-direction: column;
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
            background: linear-gradient(135deg, #f0f4f8 0%, #b8c6d8 100%);
          }
          50% {
            background: linear-gradient(140deg, #e8f0f7 0%, #a8b8cc 100%);
          }
          75% {
            background: linear-gradient(145deg, #f5f9fc 0%, #c9d6e6 100%);
          }
          100% {
            background: linear-gradient(130deg, #f7f9fc 0%, #c6d2e4 100%);
          }
        }

        .ending-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .ending-header h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #333;
        }

        .final-rank {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .rank-badge {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
        }

        .rank-s {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
        }

        .rank-a {
          background: linear-gradient(135deg, #3498db, #5dade2);
        }

        .rank-b {
          background: linear-gradient(135deg, #27ae60, #52be80);
        }

        .rank-c {
          background: linear-gradient(135deg, #f39c12, #f8c471);
        }

        .rank-d {
          background: linear-gradient(135deg, #e74c3c, #ec7063);
        }

        .final-rank h2 {
          font-size: 2rem;
          margin: 0;
          color: #333;
        }

        .final-rank p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0;
        }

        .ending-content {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stats-section,
        .achievements-section,
        .exam-results-section {
          padding: 2rem;
          border-radius: 12px;
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
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          `}
        }

        .stats-section h3,
        .achievements-section h3,
        .exam-results-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
          text-align: center;
        }

        .stats-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-label {
          width: 60px;
          font-size: 1.1rem;
          color: #666;
        }

        .stat-bar-container {
          flex: 1;
          height: 20px;
          background: #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .stat-bar {
          height: 100%;
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .stat-bar.mental {
          background: linear-gradient(90deg, #3498db, #2980b9);
        }

        .stat-bar.health {
          background: linear-gradient(90deg, #27ae60, #229954);
        }

        .stat-bar.academic {
          background: linear-gradient(90deg, #f39c12, #d35400);
        }

        .stat-bar.social {
          background: linear-gradient(90deg, #9b59b6, #8e44ad);
        }

        .stat-value {
          width: 40px;
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
          text-align: right;
        }

        .additional-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e0e0e0;
        }

        .additional-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .achievements-summary {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .achievement-percentage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .percentage-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .percentage-value {
          font-size: 2rem;
          font-weight: bold;
          color: white;
        }

        .achievement-percentage p {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
        }

        .completed-achievements h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .completed-achievements ul {
          list-style: none;
          padding: 0;
          margin: 0;
          max-height: 200px;
          overflow-y: auto;
        }

        .completed-achievements li {
          padding: 0.8rem;
          background: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 0.8rem;
        }

        .achievement-title {
          display: block;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.3rem;
        }

        .achievement-description {
          display: block;
          font-size: 0.9rem;
          color: #666;
        }

        .no-achievements {
          text-align: center;
          color: #999;
          font-style: italic;
        }

        .exam-results-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exam-result-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .exam-subject {
          font-size: 1.1rem;
          color: #333;
          font-weight: bold;
        }

        .exam-score {
          font-size: 1.1rem;
          color: #666;
        }

        .exam-rank {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
          color: white;
        }

        .no-exams {
          text-align: center;
          color: #999;
          font-style: italic;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .ending-footer {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .restart-button,
        .main-menu-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .restart-button {
          color: white;
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

        .main-menu-button {
          color: white;
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

        .restart-button:hover,
        .main-menu-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .ending-content {
            grid-template-columns: 1fr;
          }

          .ending-footer {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .restart-button,
          .main-menu-button {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default EndingScreen;
