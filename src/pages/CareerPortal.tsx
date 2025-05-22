import React from "react";

const CareerPortal = () => {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp" },
    { id: 2, title: "Data Analyst Intern", company: "DataWorks" },
  ];

  return (
    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-2xl font-bold mb-4">Career Portal</h1>
      <ul className="list-disc pl-6">
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerPortal;
