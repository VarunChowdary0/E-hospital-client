import React, { useState } from 'react';
import SearchHeader from '../../../widgets/SearchHeader';
import FiltersBlock from '../../../widgets/FiltersBlock';

const ManageDiagnoses: React.FC = () => {
    const [isActive, setActive] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [diagnoses, setDiagnoses] = useState<any[]>([
        {
            id: 1,
            patientName: 'John Doe',
            age: 45,
            gender: 'Male',
            appointmentDate: '2024-12-05',
            status: 'Pending',
            priority: 'Normal',
        },
        {
            id: 2,
            patientName: 'Jane Smith',
            age: 37,
            gender: 'Female',
            appointmentDate: '2024-12-06',
            status: 'Completed',
            priority: 'Urgent',
        },
    ]);
    const [selectedPatient, setSelectedPatient] = useState<any | null>(null);

    const handleSearch = () => {
        const filteredDiagnoses = diagnoses.filter((d) =>
            d.patientName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setDiagnoses(filteredDiagnoses);
    };

    const openDiagnosis = (patient: any) => {
        setSelectedPatient(patient);
        setActive(true);
    };

    const closeDiagnosis = () => {
        setSelectedPatient(null);
        setActive(false);
    };

    return (
        <main className='flex-1 bg-white p-3 max-w-screen overflow-x-hidden pb-[100px]'>
              <div className=' h-16 relative w-full bg-slate-700/0 flex items-center justify-around 
              gap-10 pr-10 max-sm:pr-0'>
                    <SearchHeader
                        isActive={isActive}
                        setActive={setActive}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        onSearch={handleSearch}
                    />
                    <FiltersBlock/>
              </div>
            <hr />
            <div className='flex-1 mt-3 p-4 w-full flex flex-col rounded-lg'>
                <h1 className='text-2xl font-bold mb-4'>Manage Diagnoses</h1>
                <div className='overflow-auto'>
                    <table className='w-full border-collapse bg-white'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='border p-2'>Patient ID</th>
                                <th className='border p-2'>Name</th>
                                <th className='border p-2'>Age</th>
                                <th className='border p-2'>Gender</th>
                                <th className='border p-2'>Appointment Date</th>
                                <th className='border p-2'>Status</th>
                                <th className='border p-2'>Priority</th>
                                <th className='border p-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {diagnoses.map((diagnosis) => (
                                <tr key={diagnosis.id} className='hover:bg-gray-100'>
                                    <td className='border p-2 text-center'>{diagnosis.id}</td>
                                    <td className='border p-2'>{diagnosis.patientName}</td>
                                    <td className='border p-2 text-center'>{diagnosis.age}</td>
                                    <td className='border p-2 text-center'>{diagnosis.gender}</td>
                                    <td className='border p-2 text-center'>{diagnosis.appointmentDate}</td>
                                    <td className='border p-2 text-center'>
                                        {diagnosis.status}
                                    </td>
                                    <td className='border p-2 text-center'>
                                        {diagnosis.priority}
                                    </td>
                                    <td className='border p-2 text-center'>
                                        <button
                                            className='bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-700'
                                            onClick={() => openDiagnosis(diagnosis)}
                                        >
                                            {diagnosis.status === 'Pending'
                                                ? 'Add Diagnosis'
                                                : 'Edit Diagnosis'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isActive && selectedPatient && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
                        <h2 className='text-xl font-bold mb-4'>
                            {selectedPatient.status === 'Pending'
                                ? 'Add Diagnosis'
                                : 'Edit Diagnosis'}
                        </h2>
                        <>
                            <div className='mb-3'>
                                <label className='block font-semibold mb-1'>Condition</label>
                                <input
                                    type='text'
                                    className='border w-full p-2 rounded-lg'
                                    placeholder='Enter condition/diagnosis'
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='block font-semibold mb-1'>Symptoms</label>
                                <textarea
                                    className='border w-full p-2 rounded-lg'
                                    rows={3}
                                    placeholder='Enter symptoms'
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='block font-semibold mb-1'>Treatment Plan</label>
                                <textarea
                                    className='border w-full p-2 rounded-lg'
                                    rows={3}
                                    placeholder='Enter treatment details'
                                />
                            </div>
                            <div className='flex justify-between'>
                                <button
                                    // type='button'
                                    className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700'
                                    onClick={closeDiagnosis}
                                >
                                    Cancel
                                </button>
                                <button
                                    // type='submit'
                                    className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700'
                                >
                                    Save
                                </button>
                            </div>
                        </>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ManageDiagnoses;
