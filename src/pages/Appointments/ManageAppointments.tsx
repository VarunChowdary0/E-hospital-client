import React, { useState } from 'react';

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

const ManageAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: 'Alice Johnson',
      date: '2024-12-05',
      time: '10:00 AM',
      reason: 'Regular Check-up',
      status: 'Pending',
    },
    {
      id: 2,
      patientName: 'Bob Smith',
      date: '2024-12-06',
      time: '02:00 PM',
      reason: 'Consultation',
      status: 'Pending',
    },
    {
      id: 3,
      patientName: 'Emily Davis',
      date: '2024-12-07',
      time: '11:30 AM',
      reason: 'Follow-up',
      status: 'Pending',
    },
  ]);

  const handleStatusChange = (id: number, status: 'Approved' | 'Rejected') => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      )
    );
  };

  return (
    <div className="p-6  fit">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Appointments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Patient Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Time</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Reason</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Actions</th>
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
                <td className="px-6 py-4 text-sm text-gray-700">{appointment.reason}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : appointment.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleStatusChange(appointment.id, 'Approved')}
                    disabled={appointment.status !== 'Pending'}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(appointment.id, 'Rejected')}
                    disabled={appointment.status !== 'Pending'}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAppointments;
