export type ExamType = 'NORMAL' | 'QUICK';

export type PowerUpConfig = {
  enabled: boolean;
  cooldown: number;
};

export type GameSettings = {
  timePerQuestion: number;
  examType: ExamType;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  showCorrectAnswer: boolean;
  canSkipQuestions: boolean;
  pointMultiplier: number;
  penaltyPoints: number;
  chaosMode: boolean;
  chaosIntensity?: 'MILD' | 'WILD' | 'INSANE';
  powerUpFrequency?: 'RARE' | 'NORMAL' | 'FREQUENT';
  allowStacking?: boolean;
  maxActivePowers?: number;
  chaosDurationMultiplier?: number;
  enableFriendlyFire?: boolean;
  autoBalance?: boolean;
  powerUpConfigs: Record<string, PowerUpConfig>;
};

export type Question = {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  timeLimit: number;
  explanation?: string;
};

export type PowerUpType = 
  | 'LIGHTNING' | 'FIREBALL' | 'DOUBLE_POINTS' | 'INVERT' | 'METEOR';

export type PowerUp = {
  id: string;
  type: PowerUpType;
};

export type ActiveEffect = {
  type: PowerUpType;
  questionIndex: number;
};

export type Player = {
  id: string;
  name: string;
  score: number;
  hasAnswered: boolean;
  currentAnswer: string | null;
  connection: any; // DataConnection
  timeTaken?: number; // For QUICK mode
  powerUps: PowerUp[];
  activeEffects: ActiveEffect[];
  correctCount: number;
  isReady?: boolean;
};

export type GameState = 'LOBBY' | 'STARTING' | 'QUESTION' | 'LEADERBOARD' | 'FINISHED' | 'QUICK_EXAM';

export type ChatMessage = {
  senderId: string;
  senderName: string;
  text: string;
  timestamp: number;
};

export type MessageType = 
  | { type: 'JOIN'; name: string }
  | { type: 'JOIN_SUCCESS'; playerId: string; gameState: GameState; settings?: GameSettings }
  | { type: 'JOIN_ERROR'; message: string }
  | { type: 'STATE_UPDATE'; state: GameState; data?: any }
  | { type: 'SUBMIT_ANSWER'; answer: string }
  | { type: 'SUBMIT_EXAM'; answers: Record<string, string>; timeTaken: number }
  | { type: 'ANSWER_RESULT'; correct: boolean; score: number; correctAnswer: string; explanation?: string }
  | { type: 'PLAYER_LIST'; players: { id: string; name: string; score: number; timeTaken?: number; isReady?: boolean }[]; answerCounts?: Record<string, number>; correctAnswer?: string }
  | { type: 'CHAT_MESSAGE'; message: ChatMessage }
  | { type: 'GIVE_POWER_UP'; powerUp: PowerUp }
  | { type: 'USE_POWER_UP'; powerUpId: string; targetId: string }
  | { type: 'APPLY_EFFECT'; effect: PowerUpType; questionIndex: number }
  | { type: 'NEW_ROUND' }
  | { type: 'PLAYER_READY'; ready: boolean };
