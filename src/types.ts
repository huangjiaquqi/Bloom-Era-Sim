export type Phase = 
  | 'INIT'
  | 'JUNIOR_PRE_SUMMER'
  | 'JUNIOR_SUMMER'
  | 'JUNIOR_FIRST'
  | 'JUNIOR_SECOND'
  | 'JUNIOR_THIRD'
  | 'SENIOR_PRE_SUMMER'
  | 'SENIOR_SUMMER'
  | 'SENIOR_FIRST'
  | 'SENIOR_SECOND'
  | 'SENIOR_THIRD'
  | 'EXAM'
  | 'GRADUATION'
  | 'MILITARY'
  | 'SUMMER'
  | 'WINTER'
  | 'END'

export type ClubId = 
  | 'zizhu_literature'
  | 'zhuhua_hanfu'
  | 'debate'
  | 'photography'
  | 'dancing'
  | 'volunteer'
  | 'yucai'
  | 'chess'
  | 'anime'
  | 'biology'
  | 'basketball'
  | 'football'
  | 'baseball'
  | 'badminton'
  | 'table_tennis'
  | 'track'
  | 'rap'
  | 'math_research'
  | 'ttrpg'
  | 'literature'
  | 'otaku'

interface EventChoice {
  text: string;
  requirements?: {
    stats?: Record<string, number>;
    clubs?: ClubId[];
    talents?: string[];
  };
  outcomes: {
    stats?: Record<string, number>;
    clubs?: { join?: ClubId[]; leave?: ClubId[] };
    talents?: string[];
    relationships?: Record<string, number>;
    items?: string[];
    nextEvent?: string;
  };
  probability?: number;
  hidden?: boolean;
}

export interface GameEvent {
  id: string;
  name: string;
  description: string;
  phase: Phase;
  choices: EventChoice[];
  requirements?: {
    stats?: Record<string, number>;
    clubs?: ClubId[];
    talents?: string[];
    phase?: Phase[];
  };
  probability?: number;
  repeatable?: boolean;
  imageUrl?: string;
}

export interface GameStats {
  心态: number;
  健康: number;
  效率: number;
  经验: number;
  金钱: number;
  运气: number;
  魅力: number;
}

export interface GameState {
  phase: Phase;
  stats: GameStats;
  clubs: ClubId[];
  talents: string[];
  relationships: Record<string, number>;
  items: string[];
  currentEvent: string | null;
  eventHistory: string[];
  day: number;
  year: number;
  semester: 'first' | 'second';
}
