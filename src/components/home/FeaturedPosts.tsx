import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ThumbsUp, MessageCircle } from 'lucide-react';
import { Post } from '../../types';

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured News</h2>
          <Link to="/news" className="text-blue-600 dark:text-blue-400 flex items-center font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
            View all <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {post.imageUrl && (
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-grow">
                <div className="flex space-x-2 mb-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  <Link to={`/posts/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto">
                  <div className="flex items-center">
                    <span className="text-xs">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;