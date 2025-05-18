import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1440V800H0V0Z" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.05" height="0.05">
              <circle cx="0.025" cy="0.025" r="0.015" fill="white" />
            </pattern>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Connect with your campus community
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Stay informed about campus events, join discussions, and access resources all in one place.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/discussions" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                Join Discussions
              </Link>
              <Link 
                to="/events" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
              >
                Explore Events <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students collaborating on campus" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-lg shadow-lg p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <p className="text-sm font-medium text-yellow-900">
                Join 10,000+ students already connected!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 text-gray-50 dark:text-gray-950">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;