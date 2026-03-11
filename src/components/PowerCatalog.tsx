import React from 'react';
import { POWER_UPS_INFO } from '../constants/powerUps';
import { PowerUpConfig } from '../types';
import { clsx } from 'clsx';

interface PowerCatalogProps {
  configs: Record<string, PowerUpConfig>;
  onUpdate: (id: string, config: PowerUpConfig) => void;
}

export const PowerCatalog: React.FC<PowerCatalogProps> = ({ configs, onUpdate }) => {
  const categories = ['Offensive', 'Defensive', 'Utility', 'Team', 'Legacy'];

  return (
    <div className="space-y-6">
      {categories.map(category => (
        <div key={category} className="space-y-3">
          <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">{category}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {POWER_UPS_INFO.filter(p => {
              // Simple categorization based on index/legacy
              if (category === 'Offensive' && p.type.match(/BLINDING|ERASER|FREEZE|MIRROR|GRAVITY|SABOTAGE|CONFUSION|LOCK/)) return true;
              if (category === 'Defensive' && p.type.match(/CLARITY|FORCE|WARP|SECOND|REVENGE|STEALTH|MAGNET_SHIELD/)) return true;
              if (category === 'Utility' && p.type.match(/XRAY|MIND|CHAOS|SCORE|QUANTUM|BOMB|PHANTOM/)) return true;
              if (category === 'Team' && p.type.match(/CHAIN|SACRIFICE|TELEPATHY|REVIVE/)) return true;
              if (category === 'Legacy' && !p.type.match(/BLINDING|ERASER|FREEZE|MIRROR|GRAVITY|SABOTAGE|CONFUSION|LOCK|CLARITY|FORCE|WARP|SECOND|REVENGE|STEALTH|MAGNET_SHIELD|XRAY|MIND|CHAOS|SCORE|QUANTUM|BOMB|PHANTOM|CHAIN|SACRIFICE|TELEPATHY|REVIVE/)) return true;
              return false;
            }).map(power => {
              const config = configs[power.type] || { enabled: true, cooldown: 30 };
              return (
                <div key={power.type} className="bg-zinc-950 border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${power.color}20`, color: power.color }}>
                      {power.icon}
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-medium text-sm truncate">{power.name}</div>
                      <div className="text-[10px] text-zinc-500 truncate">{power.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <input 
                      type="number"
                      value={config.cooldown}
                      onChange={e => onUpdate(power.type, { ...config, cooldown: parseInt(e.target.value) || 0 })}
                      className="w-12 bg-zinc-900 border border-white/10 rounded-lg px-2 py-1 text-xs text-white text-center"
                    />
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={config.enabled}
                        onChange={e => onUpdate(power.type, { ...config, enabled: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
