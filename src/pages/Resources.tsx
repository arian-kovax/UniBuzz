import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Campus Resources
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/resources/academic-calendar"
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition 
                       text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h2 className="text-lg font-semibold mb-2">Academic Calendar</h2>
            <p>View the academic schedule and important dates.</p>
          </Link>

          <Link
            to="/resources/library-database"
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition 
                       text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h2 className="text-lg font-semibold mb-2">Library Database</h2>
            <p>Access a small library database with MongoDB storage.</p>
          </Link>

          <Link
            to="/resources/career-portal"
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition 
                       text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h2 className="text-lg font-semibold mb-2">Career Portal</h2>
            <p>Explore job opportunities and internships.</p>
          </Link>

          <Link
            to="/resources/mental-health-resources"
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition 
                       text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h2 className="text-lg font-semibold mb-2">Mental Health Resources</h2>
            <p>Resources to tackle ragging and a helpline link.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
