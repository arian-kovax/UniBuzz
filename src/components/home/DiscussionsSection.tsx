import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Eye, Pin, Clock, ChevronRight } from 'lucide-react';
import { Discussion, User } from '../../types';

interface DiscussionsSectionProps {
  discussions: Discussion[];
  users: User[];
}

const DiscussionsSection: React.FC<DiscussionsSectionProps> = ({ discussions, users }) => {
  // Add author info to discussions
  const discussionsWithAuthors = discussions.map(discussion => {
    const author = users.find(user => user.id === discussion.authorId);
    return {
      ...discussion,
      author
    };
  });

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Active Discussions</h2>
          <Link to="/discussions" className="text-blue-600 dark:text-blue-400 flex items-center font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
            View all <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {discussionsWithAuthors.map((discussion) => (
              <li key={discussion.id} className="hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors duration-150">
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
        </div>
        
        <div className="mt-8 text-center">
          <Link
            to="/discussions/create"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Start a New Discussion
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscussionsSection;