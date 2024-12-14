import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Master of Application',
      institution: 'PES University, Bengaluru',
      grades: 'NA',
      year: ' [2024-present]',
      desc: "I am currently pursuing a Masters in Computer Application in PES Univesrsity in Bengaluru, Karnataka .",
    },{
      logo: "logo-arrow",
      degree: 'Bachelors Of Computer Application',
      institution: 'Gogte College of Commerce ,Belgaum',
      grades: 'CGPA: 8.98',
      year: ' [2021-2024]',
      desc: "I have Complete my Bachelors in Computer Application from Gogte College of Commerce in belgaum.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
