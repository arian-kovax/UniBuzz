import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-purple-700 py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mb-6">
            Stay Connected with UniBuzz
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't miss important campus events, discussions, and resources. Join thousands of students and faculty members already using UniBuzz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Sign Up Now
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-gray-50 dark:text-gray-950">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,128L60,122.7C120,117,240,107,360,101.3C480,96,600,96,720,101.3C840,107,960,117,1080,112C1200,107,1320,85,1380,74.7L1440,64L1440,140L1380,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTASection;