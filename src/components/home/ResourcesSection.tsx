import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Resource } from '../../types';

interface ResourcesSectionProps {
  resources: Resource[];
}

// Dynamic icon component
const DynamicIcon = ({ name }: { name: string }) => {
  const IconComponent = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())];
  
  if (!IconComponent) {
    return <Icons.FileText />;
  }
  
  return <IconComponent />;
};

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ resources }) => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Campus Resources</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Quick access to important tools and information to help you succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.id}
              to={resource.url}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 dark:group-hover:bg-blue-600 transition-colors duration-300">
                <DynamicIcon name={resource.icon} className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {resource.description}
              </p>
              <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                <span>Open resource</span>
                <ExternalLink className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            to="/resources"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;