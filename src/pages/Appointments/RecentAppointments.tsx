import React from 'react';

const RecentAppointments: React.FC = () => {
  const appointments = [
    { id: 1, patientName: 'John Doe', date: '2024-12-01', time: '10:30 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2024-12-02', time: '11:00 AM' },
    { id: 3, patientName: 'Sam Wilson', date: '2024-12-03', time: '09:00 AM' },
  ];

  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Patient Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr
                key={appointment.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-100`}
              >
                <td className="px-6 py-4 text-sm text-gray-700">{appointment.patientName}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{appointment.date}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAppointments;
