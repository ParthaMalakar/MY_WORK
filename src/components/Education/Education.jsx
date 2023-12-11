import React from 'react';

const EducationSection = () => {
  return (
    <div className="education-section bg-zinc-300  text-center p-8">
      <h2 className="text-3xl font-bold mb-4">Education</h2>

      {/* University Education */}
      <div className="education-item mb-6">
        <h3 className="text-xl font-semibold">American International University-Bangladesh (AIUB)</h3>
        <p className="text-gray-600">Computer Science and Engineering (CSE)</p>
        <p>2020 - 2023</p>
        <p>CGPA: 3.89 (out of 4.00)</p>
        <p>Credit Completed: 148  out of 148</p>
      </div>

      {/* HSC Education */}
      <div className="education-item mb-6">
        <h3 className="text-xl font-semibold">Padma College</h3>
        <p className="text-gray-600">HSC</p>
        <p>GPA: 4.08 (out of 5.00)</p>
        <p>Passing Year: 2019</p>
      </div>

      {/* SSC Education */}
      <div className="education-item">
        <h3 className="text-xl font-semibold">Joypara Pilot High School</h3>
        <p className="text-gray-600">SSC</p>
        <p>GPA: 4.68 (out of 5.00)</p>
        <p>Passing Year: 2017</p>
      </div>
    </div>
  );
};

export default EducationSection;
