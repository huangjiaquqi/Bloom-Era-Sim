// AI事件生成（调用DeepSeek API）
export const generateAIEvent = async (prompt: string): Promise<string> => {
  try {
    // 这里将集成DeepSeek API调用
    // 暂时返回模拟数据
    return `AI生成的事件: ${prompt}`;
  } catch (error) {
    console.error('AI事件生成失败:', error);
    return 'AI事件生成失败，请重试';
  }
};