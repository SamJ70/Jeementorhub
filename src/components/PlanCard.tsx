import React from 'react';
import { Plan } from '../types';
import { Check } from 'lucide-react';

interface PlanCardProps {
  plan: Plan;
  onSelect: () => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  return (
    <div className="bg-white border-2 border-black rounded-lg p-6 flex flex-col h-full transition-transform hover:scale-105 shadow-md">
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <div className="text-3xl font-bold mb-4">
        ₹{plan.price}
        <span className="text-sm font-normal ml-1">/ {plan.duration}</span>
      </div>
      <div className="flex-grow">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-black" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onSelect}
        className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Select Plan
      </button>
    </div>
  );
};