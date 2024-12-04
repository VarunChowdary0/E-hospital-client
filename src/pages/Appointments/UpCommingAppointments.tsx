import React, { useState } from 'react';

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
  reason: string;
}

const UpcomingAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, patientName: 'Alice Johnson', date: '2024-12-05', time: '10:00 AM', reason: 'Dental Checkup' },
    { id: 2, patientName: 'Bob Smith', date: '2024-12-06', time: '02:00 PM', reason: 'Routine Checkup' },
    { id: 3, patientName: 'Emily Davis', date: '2024-12-07', time: '11:30 AM', reason: 'Consultation' },
  ]);

  const [postponeModal, setPostponeModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleCancel = (id: number) => {
    setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
  };

  const handlePostpone = (id: number) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id && selectedAppointment
          ? { ...appointment, date: newDate, time: newTime }
          : appointment
      )
    );
    setPostponeModal(false);
    setNewDate('');
    setNewTime('');
  };

  return (
    <div className="p-6  rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Appointments</h2>
      <div className="overflow-x-auto">
        {appointments.length > 0 ?
        <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-sky-700 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">Patient Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Time</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Reason</th>
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
              <td className="px-6 py-4 flex justify-center gap-4">
                <button
                  onClick={() => handleCancel(appointment.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setSelectedAppointment(appointment);
                    setPostponeModal(true);
                  }}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Postpone
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>:
      <div className=' w-full text-lg font-thin h-[100px] flex items-center justify-center'>
        No Appointemnts Found !
      </div>
        }
      </div>

      {/* Postpone Modal */}
      {postponeModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Postpone Appointment for {selectedAppointment.patientName}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">New Date</label>
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">New Time</label>
              <input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setPostponeModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => handlePostpone(selectedAppointment.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default UpcomingAppointments;
