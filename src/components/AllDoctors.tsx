import React from 'react';

interface Doctor {
  id: number;
  name: string;
  age: number;
  specialization: string;
  experience: number; // Years of experience
  contact: string;
  location: string;
}

const AllDoctors: React.FC = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. John Doe',
      age: 45,
      specialization: 'Cardiologist',
      experience: 20,
      contact: '123-456-7890',
      location: 'New York, USA',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      age: 38,
      specialization: 'Dermatologist',
      experience: 12,
      contact: '987-654-3210',
      location: 'Los Angeles, USA',
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      age: 50,
      specialization: 'Neurologist',
      experience: 25,
      contact: '555-123-4567',
      location: 'Chicago, USA',
    },
  ];

  return (
    <div className="p-6 min-h-screen w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Doctors</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Age</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Specialization</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Experience</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Contact</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Location</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr
                key={doctor.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-100`}
              >
                <td className="px-6 py-4 text-sm text-gray-700">{doctor.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{doctor.age}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{doctor.specialization}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{doctor.experience} yrs</td>
                <td className="px-6 py-4 text-sm text-gray-700">{doctor.contact}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{doctor.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDoctors;
