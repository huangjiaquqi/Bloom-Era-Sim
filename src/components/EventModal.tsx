import React from 'react';
import { GameEvent } from '../types';

interface EventModalProps {
  event: GameEvent | undefined;
  onChoice: (choiceIndex: number) => void;
  isVisible: boolean;
  uiStyle?: string;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onChoice, isVisible, uiStyle = 'default' }) => {
  if (!isVisible || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        className={`rounded-lg shadow-xl max-w-2xl w-full mx-4 animate-fadeIn ${
          uiStyle === 'liquid-glass' 
            ? 'bg-white/16.5 border border-white/20 backdrop-blur-sm' 
            : uiStyle === 'acrylic' 
              ? 'bg-white/69 backdrop-blur-md' 
              : 'bg-white'
        }`}
        style={{
          ...(uiStyle === 'liquid-glass' && {
            background: '#FFFFFF2A',
            border: '1px solid #FFFFFF33',
            backdropFilter: 'blur(10px) saturate(1.35)',
            boxShadow: `
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `
          }),
          ...(uiStyle === 'acrylic' && {
            background: '#FFFFFFB0',
            backdropFilter: 'blur(20px)',
            border: 'none',
            boxShadow: '0px 2px 12px rgba(0,0,0,.1)'
          }),
          ...(uiStyle === 'default' && {
            background: 'white',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          })
        }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
          <p className="text-gray-600 mb-6">{event.description}</p>
          <div className="space-y-3">
            {event.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => onChoice(index)}
                className="w-full text-left text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors bg-gray-50 hover:bg-gray-100"
                style={{
                  background: '#f3f4f6',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};