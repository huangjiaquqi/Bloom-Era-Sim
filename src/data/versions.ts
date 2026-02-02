// 版本信息数据
import { Version } from '../types';

export const versions: Version[] = [
  {
    version: 'v1.0.0',
    date: '2026-02-01',
    features: ['初始版本发布', '基本游戏功能', '成就系统', '用户昵称系统']
  },
  {
    version: 'v0.9.0',
    date: '2026-01-31',
    features: ['游戏核心机制完成', '界面设计优化', '设置系统']
  },
  {
    version: 'v0.5.0',
    date: '2026-01-20',
    features: ['基础框架搭建', '主页界面设计', '按钮功能实现']
  },
  {
    version: 'v0.1.0',
    date: '2026-01-15',
    features: ['项目初始化', '基本文件结构']
  }
];
