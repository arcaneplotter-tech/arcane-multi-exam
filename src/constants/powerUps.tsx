import React from 'react';
import { 
  Scissors, Zap, Flame, Wind, Shield, Snowflake, TrendingUp, Hand, 
  RotateCcw, RefreshCw, Bomb, Lightbulb, Eye, Magnet, Shuffle, 
  Moon, Skull, Ghost, ArrowDownCircle, Contrast, CloudLightning, Hammer,
  Eraser, Cloud, Lock, Sparkles, Brain, HelpCircle, Heart, Gamepad2
} from 'lucide-react';
import { PowerUpType } from '../types';

export interface PowerUpInfo {
  type: PowerUpType;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const POWER_UPS_INFO: PowerUpInfo[] = [
  // Offensive
  { type: 'BLINDING_BLAST', name: 'Blinding Blast', description: 'Blinds target for 10 seconds.', icon: <Eye className="w-5 h-5" />, color: '#eab308' },
  { type: 'ANSWER_ERASER', name: 'Answer Eraser', description: 'Removes 2 random wrong answers.', icon: <Eraser className="w-5 h-5" />, color: '#f59e0b' },
  { type: 'TIME_FREEZE', name: 'Time Freeze', description: 'Freezes target timer for 5 seconds.', icon: <Snowflake className="w-5 h-5" />, color: '#06b6d4' },
  { type: 'MIRROR_MIND', name: 'Mirror Mind', description: 'Copies target\'s answer.', icon: <RefreshCw className="w-5 h-5" />, color: '#ec4899' },
  { type: 'GRAVITY_SWITCH', name: 'Gravity Switch', description: 'Flips answer options.', icon: <ArrowDownCircle className="w-5 h-5" />, color: '#451a03' },
  { type: 'SABOTAGE', name: 'Sabotage', description: 'Marks target\'s answer as wrong.', icon: <Bomb className="w-5 h-5" />, color: '#18181b' },
  { type: 'CONFUSION_CLOUD', name: 'Confusion Cloud', description: 'Shuffles options every 2s.', icon: <Cloud className="w-5 h-5" />, color: '#10b981' },
  { type: 'ANSWER_LOCK', name: 'Answer Lock', description: 'Locks target\'s current answer.', icon: <Lock className="w-5 h-5" />, color: '#4b5563' },
  // Defensive
  { type: 'CLARITY', name: 'Clarity', description: 'Cleanses negative effects.', icon: <Sparkles className="w-5 h-5" />, color: '#84cc16' },
  { type: 'FORCE_FIELD', name: 'Force Field', description: 'Immune to next offensive power.', icon: <Shield className="w-5 h-5" />, color: '#3b82f6' },
  { type: 'TIME_WARP', name: 'Time Warp', description: 'Doubles remaining time.', icon: <RotateCcw className="w-5 h-5" />, color: '#6366f1' },
  { type: 'SECOND_CHANCE', name: 'Second Chance', description: 'Retry if wrong.', icon: <RefreshCw className="w-5 h-5" />, color: '#f472b6' },
  { type: 'REVENGE', name: 'Revenge', description: 'Reflects power back.', icon: <Zap className="w-5 h-5" />, color: '#eab308' },
  { type: 'STEALTH_MODE', name: 'Stealth Mode', description: 'Invisible to powers.', icon: <Ghost className="w-5 h-5" />, color: '#64748b' },
  { type: 'MAGNET_SHIELD', name: 'Magnet Shield', description: 'Next power heals you.', icon: <Magnet className="w-5 h-5" />, color: '#64748b' },
  // Utility
  { type: 'XRAY_VISION', name: 'X-Ray Vision', description: 'Reveals others\' choices.', icon: <Eye className="w-5 h-5" />, color: '#f59e0b' },
  { type: 'MIND_READER', name: 'Mind Reader', description: 'Shows fastest player\'s choice.', icon: <Brain className="w-5 h-5" />, color: '#a855f7' },
  { type: 'CHAOS_DUPLICATOR', name: 'Chaos Duplicator', description: 'Randomly activates 3 powers.', icon: <Gamepad2 className="w-5 h-5" />, color: '#f97316' },
  { type: 'SCORE_SWAP', name: 'Score Swap', description: 'Swaps scores for 1 question.', icon: <RefreshCw className="w-5 h-5" />, color: '#ec4899' },
  { type: 'QUANTUM_UNCERTAINTY', name: 'Quantum Uncertainty', description: '50/50 chance of correct.', icon: <HelpCircle className="w-5 h-5" />, color: '#8b5cf6' },
  { type: 'TIME_BOMB', name: 'Time Bomb', description: '+5s, but wrong = -10.', icon: <Bomb className="w-5 h-5" />, color: '#18181b' },
  { type: 'PHANTOM_ANSWERS', name: 'Phantom Answers', description: 'Fake answer notifications.', icon: <Ghost className="w-5 h-5" />, color: '#64748b' },
  // Team
  { type: 'CHAIN_REACTION', name: 'Chain Reaction', description: 'Bonus points for chain.', icon: <Zap className="w-5 h-5" />, color: '#eab308' },
  { type: 'SACRIFICE', name: 'Sacrifice', description: 'Lose 50% time, team +10s.', icon: <Flame className="w-5 h-5" />, color: '#ef4444' },
  { type: 'TELEPATHY', name: 'Telepathy', description: 'See teammate\'s screen.', icon: <Brain className="w-5 h-5" />, color: '#3b82f6' },
  { type: 'MASS_REVIVE', name: 'Mass Revive', description: 'Revives teammates.', icon: <Heart className="w-5 h-5" />, color: '#ef4444' },
  // Legacy
  { type: 'SCISSORS', name: 'Scissors', description: 'Removes 2 wrong answer options.', icon: <Scissors className="w-5 h-5" />, color: '#4f46e5' },
  { type: 'LIGHTNING', name: 'Lightning', description: 'Blinds target.', icon: <Zap className="w-5 h-5" />, color: '#eab308' },
  { type: 'FIREBALL', name: 'Fireball', description: 'Burns target screen.', icon: <Flame className="w-5 h-5" />, color: '#ef4444' },
  { type: 'TORNADO', name: 'Tornado', description: 'Shuffles target options.', icon: <Wind className="w-5 h-5" />, color: '#10b981' },
  { type: 'SHIELD', name: 'Shield', description: 'Protects from offensive power.', icon: <Shield className="w-5 h-5" />, color: '#3b82f6' },
  { type: 'FREEZE', name: 'Freeze', description: 'Prevents answering.', icon: <Snowflake className="w-5 h-5" />, color: '#06b6d4' },
  { type: 'DOUBLE_POINTS', name: 'Double Points', description: 'Double points.', icon: <TrendingUp className="w-5 h-5" />, color: '#a855f7' },
  { type: 'THIEF', name: 'Thief', description: 'Steals power-up.', icon: <Hand className="w-5 h-5" />, color: '#f97316' },
  { type: 'BOMB', name: 'Bomb', description: 'Dangerous explosive.', icon: <Bomb className="w-5 h-5" />, color: '#18181b' },
  { type: 'CLUE', name: 'Clue', description: 'Highlights wrong answer.', icon: <Lightbulb className="w-5 h-5" />, color: '#84cc16' },
  { type: 'REVEAL', name: 'Reveal', description: 'Shows popular answer.', icon: <Eye className="w-5 h-5" />, color: '#f59e0b' },
  { type: 'MAGNET', name: 'Magnet', description: 'Attracts points.', icon: <Magnet className="w-5 h-5" />, color: '#64748b' },
  { type: 'SHUFFLE', name: 'Shuffle', description: 'Shuffles options.', icon: <Shuffle className="w-5 h-5" />, color: '#7c3aed' },
  { type: 'BLACKOUT', name: 'Blackout', description: 'Turns screen black.', icon: <Moon className="w-5 h-5" />, color: '#09090b' },
  { type: 'POISON', name: 'Poison', description: 'Reduces score.', icon: <Skull className="w-5 h-5" />, color: '#166534' },
  { type: 'VAMPIRE', name: 'Vampire', description: 'Steals points.', icon: <Ghost className="w-5 h-5" />, color: '#7f1d1d' },
  { type: 'GRAVITY', name: 'Gravity', description: 'Bounces screen.', icon: <ArrowDownCircle className="w-5 h-5" />, color: '#451a03' },
  { type: 'INVERT', name: 'Invert', description: 'Inverts colors.', icon: <Contrast className="w-5 h-5" />, color: '#ffffff' },
  { type: 'METEOR', name: 'Meteor', description: 'Deals damage.', icon: <CloudLightning className="w-5 h-5" />, color: '#f87171' },
  { type: 'HAMMER', name: 'Hammer', description: 'Disables option.', icon: <Hammer className="w-5 h-5" />, color: '#57534e' }
];
