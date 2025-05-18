import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, Search, Sun, Moon, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { notifications } from '../../data/mockData';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  const unreadNotifications = notifications.filter(notification => !notification.isRead).length;

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchValue);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Uni<span className="text-purple-600 dark:text-purple-400">Buzz</span></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200">
              Home
            </Link>
            <Link to="/events" className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200">
              Events
            </Link>
            <Link to="/discussions" className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200">
              Discussions
            </Link>
            <Link to="/resources" className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200">
              Resources
            </Link>
          </nav>

          {/* Search, notifications, and profile */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="py-2 pl-10 pr-4 text-sm bg-gray-100 dark:bg-gray-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-200"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>

            <div className="relative">
              <button 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 relative"
                onClick={toggleNotifications}
              >
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
                )}
              </button>

              {/* Notifications dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-in-out transform origin-top-right">
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Notifications</h3>
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {notifications.slice(0, 5).map((notification) => (
                        <Link
                          key={notification.id}
                          to={notification.link}
                          className={`block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${!notification.isRead ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                        >
                          <p className="text-sm text-gray-800 dark:text-gray-200">
                            {notification.content}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {new Date(notification.createdAt).toLocaleString()}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <Link to="/notifications" className="block text-sm text-blue-600 dark:text-blue-400 text-center mt-3 hover:underline">
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            <Link to="/profile" className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="User profile"
                className="h-full w-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          showMobileMenu ? 'fixed inset-0 z-40 bg-gray-900/50 transition-opacity ease-linear duration-300' : 'hidden'
        }`}
        onClick={toggleMobileMenu}
      ></div>

      <div
        className={`${
          showMobileMenu
            ? 'fixed inset-y-0 right-0 z-50 w-full md:w-80 bg-white dark:bg-gray-900 transition transform duration-300 ease-in-out'
            : 'translate-x-full fixed inset-y-0 right-0 z-50 w-full md:w-80 bg-white dark:bg-gray-900 transition transform duration-300 ease-in-out'
        }`}
      >
        <div className="h-full overflow-y-auto pb-12 px-6">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Uni<span className="text-purple-600 dark:text-purple-400">Buzz</span></span>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 dark:bg-gray-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-200"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </form>

            <nav className="grid gap-y-8">
              <Link
                to="/"
                className="text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/events"
                className="text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMobileMenu}
              >
                Events
              </Link>
              <Link
                to="/discussions"
                className="text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMobileMenu}
              >
                Discussions
              </Link>
              <Link
                to="/resources"
                className="text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMobileMenu}
              >
                Resources
              </Link>
            </nav>
          </div>

          <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex items-center justify-between">
              <Link
                to="/profile"
                className="flex items-center"
                onClick={toggleMobileMenu}
              >
                <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="User profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-800 dark:text-white">Alex Johnson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Computer Science</p>
                </div>
              </Link>
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;