import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';
import { events } from '../data/mockData';
import { Event } from '../types';

const Events: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value === '') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(
        event => 
          event.title.toLowerCase().includes(value.toLowerCase()) ||
          event.description.toLowerCase().includes(value.toLowerCase()) ||
          event.location.toLowerCase().includes(value.toLowerCase()) ||
          event.organizer.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  };
  
  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-950 transition-colors duration-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Campus Events</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover and join upcoming events across campus
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link
              to="/events/create"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Create Event
            </Link>
          </div>
        </div>
        
        {/* Search and filter */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
              <div className="absolute left-3 top-2.5">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </button>
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img 
                  src={event.imageUrl || 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600'} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{event.organizer}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  <Link to={`/events/${event.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {event.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {new Date(event.startDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(event.startDate).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                        })} - {new Date(event.endDate).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">{event.location}</p>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">{event.attendees} attendees</p>
                  </div>
                </div>
                
                <Link 
                  to={`/events/${event.id}`}
                  className="block w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md font-medium transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No events found matching "{searchTerm}".
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilteredEvents(events);
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 transition-colors duration-200"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;