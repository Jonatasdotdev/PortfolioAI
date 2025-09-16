import React from 'react';
import { Brain, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-blue-500" />
              <span className="text-white font-semibold">AI Portfolio</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>using React & TypeScript</span>
            </div>

            <div className="text-gray-400 mt-4 md:mt-0">
              © 2024 AI Portfolio. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;