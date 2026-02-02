// 用户相关逻辑
import { useState, useEffect } from 'react';

interface UseUserReturn {
  userName: string | null;
  showNameInput: boolean;
  nicknameInput: string;
  setNicknameInput: React.Dispatch<React.SetStateAction<string>>;
  saveUserName: (name: string) => void;
  closeNameInput: () => void;
}

export const useUser = (): UseUserReturn => {
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

  // 保存用户昵称
  const saveUserName = (name: string) => {
    if (name.trim()) {
      setUserName(name.trim());
      localStorage.setItem('bloomEraSimUserName', name.trim());
      setShowNameInput(false);
    }
  };

  // 关闭昵称输入窗口
  const closeNameInput = () => {
    setShowNameInput(false);
  };

  return {
    userName,
    showNameInput,
    nicknameInput,
    setNicknameInput,
    saveUserName,
    closeNameInput
  };
};
