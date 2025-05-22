import React from "react";

const AcademicCalendar = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-2xl font-bold mb-4">Academic Calendar</h1>
      <p>Sample Academic Calendar:</p>
      <ul className="list-disc pl-6">
        <li>January 10 - Semester Start</li>
        <li>February 20 - Midterm Exams</li>
        <li>April 15 - Semester End</li>
        <li>April 25 - Final Exams</li>
      </ul>
    </div>
  );
};

export default AcademicCalendar;
