// 考试界面
import React, { useState, useEffect } from 'react';

interface ExamViewProps {
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  academicLevel: number;
  studyTime: number;
  onExamComplete: (score: number, rank: string) => void;
  onCancel: () => void;
  uiStyle?: string;
}

const ExamView: React.FC<ExamViewProps> = ({ 
  subject, 
  difficulty, 
  academicLevel, 
  studyTime, 
  onExamComplete, 
  onCancel,
  uiStyle = 'default'
}) => {
  const [examProgress, setExamProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState('');

  useEffect(() => {
    if (examProgress < 100) {
      const timer = setTimeout(() => {
        setExamProgress(prev => Math.min(prev + 5, 100));
      }, 200);

      return () => clearTimeout(timer);
    } else {
      calculateScore();
      setIsComplete(true);
    }
  }, [examProgress]);

  const calculateScore = () => {
    // 基础分数计算
    let baseScore = 60;
    
    // 根据学科水平加分
    baseScore += academicLevel * 0.3;
    
    // 根据学习时间加分
    baseScore += studyTime * 0.05;
    
    // 根据难度减分
    if (difficulty === 'medium') baseScore -= 5;
    if (difficulty === 'hard') baseScore -= 15;
    
    // 随机波动
    const randomFactor = Math.random() * 10 - 5;
    baseScore += randomFactor;
    
    // 确保分数在0-100之间
    const finalScore = Math.max(0, Math.min(100, Math.round(baseScore)));
    setScore(finalScore);
    
    // 计算等级
    let examRank = '';
    if (finalScore >= 95) examRank = 'A+';
    else if (finalScore >= 90) examRank = 'A';
    else if (finalScore >= 85) examRank = 'A-';
    else if (finalScore >= 80) examRank = 'B+';
    else if (finalScore >= 75) examRank = 'B';
    else if (finalScore >= 70) examRank = 'B-';
    else if (finalScore >= 65) examRank = 'C+';
    else if (finalScore >= 60) examRank = 'C';
    else examRank = 'D';
    
    setRank(examRank);
  };

  const handleComplete = () => {
    onExamComplete(score, rank);
  };

  return (
    <div className="exam-view">
      <div className="exam-header">
        <h1>{subject}考试</h1>
        <button className="cancel-button" onClick={onCancel} disabled={!isComplete}>
          关闭
        </button>
      </div>

      <div className="exam-content">
        {!isComplete ? (
          <div className="exam-progress">
            <div className="progress-message">
              <p>正在考试中...</p>
              <p>请稍候，系统正在计算你的成绩</p>
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar"
                style={{ width: `${examProgress}%` }}
              ></div>
            </div>
            <div className="progress-percentage">
              {examProgress}%
            </div>
          </div>
        ) : (
          <div className="exam-result">
            <div className="result-header">
              <h2>考试结果</h2>
              <div className="result-rank">
                等级: <span className={`rank-${rank.toLowerCase()}`}>{rank}</span>
              </div>
            </div>
            
            <div className="result-score">
              <div className="score-circle">
                <span className="score-value">{score}</span>
              </div>
              <p className="score-label">分数</p>
            </div>
            
            <div className="result-details">
              <div className="detail-item">
                <span className="detail-label">学科水平:</span>
                <span className="detail-value">{academicLevel}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">学习时间:</span>
                <span className="detail-value">{Math.round(studyTime / 60)}小时</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">难度:</span>
                <span className="detail-value">
                  {difficulty === 'easy' ? '简单' : 
                   difficulty === 'medium' ? '中等' : '困难'}
                </span>
              </div>
            </div>
            
            <div className="result-message">
              {score >= 90 && (
                <p>太棒了！你取得了优异的成绩！</p>
              )}
              {score >= 70 && score < 90 && (
                <p>不错的成绩，继续努力！</p>
              )}
              {score >= 60 && score < 70 && (
                <p>勉强及格，需要更加努力。</p>
              )}
              {score < 60 && (
                <p>不及格，需要大幅提升你的学习状态。</p>
              )}
            </div>
            
            <button className="complete-button" onClick={handleComplete}>
              完成
            </button>
          </div>
        )}
      </div>

      <style>{`
        .exam-view {
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

        .exam-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .exam-header h1 {
          font-size: 2.5rem;
          color: #333;
          margin: 0;
        }

        .cancel-button {
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
          ${uiStyle === 'liquid-glass' ? `
            background: rgba(231, 76, 60, 0.8); /* 半透明按钮背景 */
            backdrop-filter: blur(5px); /* 轻微模糊 */
            border: 1px solid rgba(255, 255, 255, 0.3); /* 半透明边框 */
          ` : uiStyle === 'acrylic' ? `
            background: rgba(231, 76, 60, 0.9); /* 半透明按钮背景 */
            backdrop-filter: blur(10px); /* 中度模糊 */
            border: none; /* 无边框 */
          ` : `
            background: #e74c3c;
            border: none;
          `}
        }

        .cancel-button:hover:not(:disabled) {
          background: #c0392b;
        }

        .cancel-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .exam-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .exam-progress {
          width: 100%;
          max-width: 600px;
          text-align: center;
        }

        .progress-message {
          margin-bottom: 2rem;
        }

        .progress-message p {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .progress-bar-container {
          width: 100%;
          height: 20px;
          background: #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1rem;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #3498db, #27ae60);
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .progress-percentage {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        .exam-result {
          width: 100%;
          max-width: 600px;
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
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

        .result-header {
          margin-bottom: 2rem;
        }

        .result-header h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .result-rank {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        .rank-a\+ {
          color: #27ae60;
        }

        .rank-a {
          color: #27ae60;
        }

        .rank-a- {
          color: #27ae60;
        }

        .rank-b\+ {
          color: #3498db;
        }

        .rank-b {
          color: #3498db;
        }

        .rank-b- {
          color: #3498db;
        }

        .rank-c\+ {
          color: #f39c12;
        }

        .rank-c {
          color: #f39c12;
        }

        .rank-d {
          color: #e74c3c;
        }

        .result-score {
          margin-bottom: 2rem;
        }

        .score-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .score-value {
          font-size: 3rem;
          font-weight: bold;
          color: white;
        }

        .score-label {
          font-size: 1.2rem;
          color: #666;
          margin: 0;
        }

        .result-details {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 0;
          border-bottom: 1px solid #e0e0e0;
        }

        .detail-item:last-child {
          border-bottom: none;
        }

        .detail-label {
          font-size: 1.1rem;
          color: #666;
        }

        .detail-value {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
        }

        .result-message {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #e8f4f8;
          border-radius: 12px;
        }

        .result-message p {
          font-size: 1.2rem;
          color: #333;
          margin: 0;
        }

        .complete-button {
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
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

        .complete-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .exam-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .exam-header h1 {
            font-size: 2rem;
          }

          .exam-result {
            padding: 2rem;
          }

          .score-circle {
            width: 120px;
            height: 120px;
          }

          .score-value {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ExamView;
