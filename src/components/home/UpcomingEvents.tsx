import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import { Event } from '../../types';

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
          <Link to="/events" className="text-blue-600 dark:text-blue-400 flex items-center font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
            View all <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
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
      </div>
    </section>
  );
};

export default UpcomingEvents;