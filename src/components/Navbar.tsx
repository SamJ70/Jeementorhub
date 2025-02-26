import React from 'react';
import { LogIn } from 'lucide-react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

interface NavbarProps {
  user: any;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onOpenAuth }) => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="JEE Mentor Hub Logo" 
            className="h-10"
          />
          <span className="text-xl font-bold">JEE Mentor Hub</span>
        </div>
        
        <div className="flex items-center space-x-6">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm">
                Welcome, {user.email?.split('@')[0]}
              </span>
              <button
                onClick={() => signOut(auth)}
                className="flex items-center px-4 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center px-4 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
