import React from 'react';

const RecentAppointments: React.FC = () => {
  const appointments = [
    { id: 1, patientName: 'John Doe', date: '2024-12-01', time: '10:30 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2024-12-02', time: '11:00 AM' },
    { id: 3, patientName: 'Sam Wilson', date: '2024-12-03', time: '09:00 AM' },
  ];

  return (
    <div>
      <h2>Recent Appointments</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Patient Name</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Date</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.patientName}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentAppointments;
