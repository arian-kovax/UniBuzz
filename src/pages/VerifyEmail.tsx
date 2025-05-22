import React from 'react';
import { Link } from 'react-router-dom';

const VerifyEmail: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Check your email</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            We've sent you a verification link to your email address. Please click the link to verify your account.
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Didn't receive the email? Check your spam folder or request a new verification link.
            </p>
            
            <div className="flex items-center justify-center">
              <Link
                to="/login"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm font-medium"
              >
                Return to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;