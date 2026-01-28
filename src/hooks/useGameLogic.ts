import { useState, useEffect } from 'react';
import { GameState, Phase, GameEvent } from '../types';
import { PHASE_EVENTS } from '../gameData';

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'INIT',
    stats: {
      心态: 250,
      健康: 250,
      效率: 250,
      经验: 0,
      金钱: 1000,
      运气: 250,
      魅力: 250
    },
    clubs: [],
    talents: [],
    relationships: {},
    items: [],
    currentEvent: 'init_start',
    eventHistory: [],
    day: 1,
    year: 1,
    semester: 'first'
  });

  const [events, setEvents] = useState<GameEvent[]>([]);

  useEffect(() => {
    loadPhaseEvents();
  }, [gameState.phase]);

  const loadPhaseEvents = () => {
    const phaseEvents = PHASE_EVENTS[gameState.phase] || [];
    setEvents(phaseEvents);
  };

  const getCurrentEvent = (): GameEvent | undefined => {
    if (!gameState.currentEvent) return undefined;
    
    // 首先从当前阶段的事件中查找
    const phaseEvent = PHASE_EVENTS[gameState.phase]?.find(
      event => event.id === gameState.currentEvent
    );
    if (phaseEvent) return phaseEvent;

    // 如果当前阶段找不到，从所有阶段中查找
    for (const phase in PHASE_EVENTS) {
      const event = PHASE_EVENTS[phase as Phase]?.find(
        event => event.id === gameState.currentEvent
      );
      if (event) return event;
    }

    return undefined;
  };

  const processChoice = (_eventId: string, choiceIndex: number) => {
    const event = getCurrentEvent();
    if (!event) return;

    const choice = event.choices[choiceIndex];
    if (!choice) return;

    // 检查选择条件
    if (choice.requirements) {
      if (choice.requirements.stats) {
        for (const [stat, value] of Object.entries(choice.requirements.stats)) {
          if ((gameState.stats as any)[stat] < value) {
            return; // 不满足条件，无法选择
          }
        }
      }

      if (choice.requirements.clubs) {
        for (const club of choice.requirements.clubs) {
          if (!gameState.clubs.includes(club)) {
            return; // 不满足条件，无法选择
          }
        }
      }

      if (choice.requirements.talents) {
        for (const talent of choice.requirements.talents) {
          if (!gameState.talents.includes(talent)) {
            return; // 不满足条件，无法选择
          }
        }
      }
    }

    // 处理选择结果
    const newState = { ...gameState };

    // 更新属性
    if (choice.outcomes.stats) {
      for (const [stat, value] of Object.entries(choice.outcomes.stats)) {
        (newState.stats as any)[stat] += value;
        // 确保属性值在合理范围内，金钱没有上限
        if (stat !== '金钱') {
          (newState.stats as any)[stat] = Math.max(0, Math.min(500, (newState.stats as any)[stat]));
        } else {
          (newState.stats as any)[stat] = Math.max(0, (newState.stats as any)[stat]);
        }
      }
    }

    // 更新俱乐部
    if (choice.outcomes.clubs) {
      if (choice.outcomes.clubs.join) {
        newState.clubs = [...new Set([...newState.clubs, ...choice.outcomes.clubs.join])];
      }
      if (choice.outcomes.clubs.leave) {
        newState.clubs = newState.clubs.filter(club => !choice.outcomes.clubs!.leave!.includes(club));
      }
    }

    // 更新天赋
    if (choice.outcomes.talents) {
      newState.talents = [...new Set([...newState.talents, ...choice.outcomes.talents])];
    }

    // 更新关系
    if (choice.outcomes.relationships) {
      for (const [person, value] of Object.entries(choice.outcomes.relationships)) {
        newState.relationships[person] = (newState.relationships[person] || 0) + value;
      }
    }

    // 更新物品
    if (choice.outcomes.items) {
      newState.items = [...newState.items, ...choice.outcomes.items];
    }

    // 更新事件历史
    newState.eventHistory = [...newState.eventHistory, event.id];

    // 设置下一个事件
    if (choice.outcomes.nextEvent) {
      newState.currentEvent = choice.outcomes.nextEvent;
    } else {
      newState.currentEvent = null;
    }

    setGameState(newState);
  };

  const advancePhase = () => {
    const phases: Phase[] = [
      'INIT', 'JUNIOR_PRE_SUMMER', 'JUNIOR_SUMMER', 'JUNIOR_FIRST',
      'JUNIOR_SECOND', 'JUNIOR_THIRD', 'SENIOR_PRE_SUMMER', 'SENIOR_SUMMER',
      'SENIOR_FIRST', 'SENIOR_SECOND', 'SENIOR_THIRD', 'EXAM',
      'GRADUATION', 'MILITARY', 'SUMMER', 'WINTER', 'END'
    ];

    const currentIndex = phases.indexOf(gameState.phase);
    if (currentIndex < phases.length - 1) {
      const nextPhase = phases[currentIndex + 1];
      setGameState(prev => ({
        ...prev,
        phase: nextPhase,
        currentEvent: null,
        day: 1
      }));
    }
  };

  const resetGame = () => {
    setGameState({
      phase: 'INIT',
      stats: {
        心态: 250,
        健康: 250,
        效率: 250,
        经验: 0,
        金钱: 1000,
        运气: 250,
        魅力: 250
      },
      clubs: [],
      talents: [],
      relationships: {},
      items: [],
      currentEvent: 'init_start',
      eventHistory: [],
      day: 1,
      year: 1,
      semester: 'first'
    });
  };

  return {
    gameState,
    events,
    currentEvent: getCurrentEvent(),
    processChoice,
    advancePhase,
    resetGame
  };
};
