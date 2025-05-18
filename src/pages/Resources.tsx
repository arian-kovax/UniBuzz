import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ExternalLink } from 'lucide-react';
import * as Icons from 'lucide-react';
import { resources } from '../data/mockData';
import { Resource } from '../types';

// Dynamic icon component
const DynamicIcon = ({ name }: { name: string }) => {
  const IconComponent = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())];
  
  if (!IconComponent) {
    return <Icons.FileText />;
  }
  
  return <IconComponent />;
};

const Resources: React.FC = () => {
  const [filteredResources, setFilteredResources] = useState<Resource[]>(resources);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get unique categories
  const categories = Array.from(new Set(resources.map(r => r.category)));
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value === '') {
      setFilteredResources(resources);
    } else {
      const filtered = resources.filter(
        resource => 
          resource.title.toLowerCase().includes(value.toLowerCase()) ||
          resource.description.toLowerCase().includes(value.toLowerCase()) ||
          resource.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResources(filtered);
    }
  };
  
  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-950 transition-colors duration-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Campus Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Access everything you need to succeed in your academic journey
          </p>
          
          {/* Search */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
              <div className="absolute left-3 top-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setFilteredResources(resources)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filteredResources === resources
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } transition-colors duration-200`}
          >
            All Resources
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilteredResources(resources.filter(r => r.category === category))}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filteredResources !== resources && filteredResources.every(r => r.category === category)
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Resources grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              No resources found matching "{searchTerm}".
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilteredResources(resources);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 transition-colors duration-200"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
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
                  <span>Access resource</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;