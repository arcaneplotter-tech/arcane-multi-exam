import React from 'react';
import { 
  Zap, Flame, TrendingUp, Contrast, CloudLightning
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
  { type: 'LIGHTNING', name: 'Lightning', description: 'Blinds target.', icon: <Zap className="w-5 h-5" />, color: '#eab308' },
  { type: 'FIREBALL', name: 'Fireball', description: 'Burns target screen.', icon: <Flame className="w-5 h-5" />, color: '#ef4444' },
  { type: 'DOUBLE_POINTS', name: 'Double Points', description: 'Double points.', icon: <TrendingUp className="w-5 h-5" />, color: '#a855f7' },
  { type: 'INVERT', name: 'Invert', description: 'Inverts colors.', icon: <Contrast className="w-5 h-5" />, color: '#ffffff' },
  { type: 'METEOR', name: 'Meteor', description: 'Deals damage.', icon: <CloudLightning className="w-5 h-5" />, color: '#f87171' }
];
