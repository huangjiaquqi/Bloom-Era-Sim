import React from 'react';
import { GameEvent } from '../types';

interface EventModalProps {
  event: GameEvent | undefined;
  onChoice: (choiceIndex: number) => void;
  isVisible: boolean;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onChoice, isVisible }) => {
  if (!isVisible || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 animate-fadeIn">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
          <p className="text-gray-600 mb-6">{event.description}</p>
          <div className="space-y-3">
            {event.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => onChoice(index)}
                className="w-full text-left bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
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