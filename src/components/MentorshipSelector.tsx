import React from 'react';
import { MentorshipType } from '../types';
import { GraduationCap, BookOpen } from 'lucide-react';

interface MentorshipSelectorProps {
  onSelect: (type: MentorshipType) => void;
}

export const MentorshipSelector: React.FC<MentorshipSelectorProps> = ({ onSelect }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <button
        onClick={() => onSelect('counseling')}
        className="group bg-white border-2 border-black rounded-lg p-8 text-center transition-transform hover:scale-105"
      >
        <GraduationCap className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">College Counseling & Selection</h3>
        <p className="text-gray-600">
          Get expert guidance on college and branch selection based on your JEE rank
        </p>
      </button>
      
      <button
        onClick={() => onSelect('ongoing')}
        className="group bg-white border-2 border-black rounded-lg p-8 text-center transition-transform hover:scale-105"
      >
        <BookOpen className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Ongoing Mentorship</h3>
        <p className="text-gray-600">
          Continuous support and guidance throughout your JEE preparation journey
        </p>
      </button>
    </div>
  );
};