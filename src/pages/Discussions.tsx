import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Eye, Pin, Clock, Search, List, Tag } from 'lucide-react';
import { discussions, users } from '../data/mockData';

const Discussions: React.FC = () => {
  const [filteredDiscussions, setFilteredDiscussions] = useState(discussions);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(discussions.map(d => d.category)));
  
  // Add author information to discussions
  const discussionsWithAuthors = filteredDiscussions.map(discussion => {
    const author = users.find(user => user.id === discussion.authorId);
    return {
      ...discussion,
      author
    };
  });
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterDiscussions(value, selectedCategory);
  };
  
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    filterDiscussions(searchTerm, category);
  };
  
  const filterDiscussions = (search: string, category: string | null) => {
    let filtered = discussions;
    
    // Filter by search term
    if (search) {
      filtered = filtered.filter(
        discussion => 
          discussion.title.toLowerCase().includes(search.toLowerCase()) ||
          discussion.content.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Filter by category
    if (category) {
      filtered = filtered.filter(
        discussion => discussion.category === category
      );
    }
    
    setFilteredDiscussions(filtered);
  };
  
  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-950 transition-colors duration-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Discussions</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Join conversations and ask questions about campus topics
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link
              to="/discussions/create"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Start Discussion
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <Tag className="h-5 w-5 mr-2 text-blue-500" />
                Categories
              </h3>
              
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                      selectedCategory === null
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <List className="h-4 w-4 mr-2" />
                    All Discussions
                  </button>
                </li>
                
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Discussions list */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                />
                <div className="absolute left-3 top-2.5">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Discussions */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm">
              {discussionsWithAuthors.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    No discussions found.
                  </p>
                  {(searchTerm || selectedCategory) && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory(null);
                        setFilteredDiscussions(discussions);
                      }}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 transition-colors duration-200"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              ) : (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {discussionsWithAuthors.map((discussion) => (
                    <li key={discussion.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150">
                      <Link to={`/discussions/${discussion.id}`} className="block p-6">
                        <div className="sm:flex items-center justify-between">
                          <div className="flex items-start space-x-4">
                            {/* Author avatar */}
                            <div className="flex-shrink-0">
                              <img
                                src={discussion.author?.avatar || 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100'}
                                alt={discussion.author?.name || 'User'}
                                className="h-10 w-10 rounded-full"
                              />
                            </div>
                            
                            {/* Discussion content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center mb-1">
                                {discussion.isSticky && (
                                  <span className="inline-flex items-center mr-2">
                                    <Pin className="h-4 w-4 text-red-500" />
                                  </span>
                                )}
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                  {discussion.title}
                                </h3>
                              </div>
                              
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                                {discussion.content}
                              </p>
                              
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                  {discussion.category}
                                </span>
                                
                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                  <Clock className="h-3.5 w-3.5 mr-1" />
                                  <span>
                                    {new Date(discussion.createdAt).toLocaleDateString(undefined, {
                                      month: 'short',
                                      day: 'numeric',
                                      hour: '2-digit',
                                      minute: '2-digit'
                                    })}
                                  </span>
                                </div>
                                
                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                  <User className="h-3.5 w-3.5 mr-1" />
                                  <p>
                                    By <span className="font-medium">{discussion.author?.name || 'Anonymous'}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Stats */}
                          <div className="mt-4 sm:mt-0 flex items-center space-x-6">
                            <div className="flex items-center">
                              <MessageSquare className="h-5 w-5 text-gray-400 mr-1.5" />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{discussion.replies}</span>
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-5 w-5 text-gray-400 mr-1.5" />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{discussion.views}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;