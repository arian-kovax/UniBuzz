import React from "react";

const MentalHealthResources = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-2xl font-bold mb-4">Mental Health Resources</h1>
      <p>Ways to Tackle Ragging:</p>
      <ul className="list-disc pl-6">
        <li>Stay in groups and avoid isolated areas.</li>
        <li>Report incidents to campus authorities immediately.</li>
        <li>Be aware of the anti-ragging helpline.</li>
      </ul>
      <a href="tel:+1800-123-4567" className="text-blue-500 underline">
        Helpline: +1800-123-4567
      </a>
    </div>
  );
};

export default MentalHealthResources;
