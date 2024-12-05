import React, { useState } from 'react'
import SearchHeader from '../../../widgets/SearchHeader';
import FiltersBlock from '../../../widgets/FiltersBlock';
import EyeIcon from '../../../icons/Icons/EyeIcon';
import { useNavigate } from 'react-router-dom';

const ViewPatientRecords = () => {
    const navigate = useNavigate();

    const handleNavigation = (route:string) => {
        navigate(route);
    }
    const [isActive, setActive] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [diagnoses, setDiagnoses] = useState<{
        pid : string,
        patientName : string,
        age : number;
        gender : 'Male' | 'Female' | 'Other';
        LastAppointmentDate : string;
    }[]>([
        {
            pid : 'qions-23ed-ds23d-q23dqw-23dqw',
            patientName: 'John Doe',
            age: 45,
            gender: 'Male',
            LastAppointmentDate: '2024-12-05',
        },
        {
            pid : '12esqx-2223d2-2wsd3wd-3ww3w3s',
            patientName: 'Jane Smith',
            age: 37,
            gender: 'Female',
            LastAppointmentDate: '2024-12-06',
        },
        {
            pid : '0233232-c3342ed23-23d32d23-d23d2',
            patientName: 'Jake Paul',
            age: 32,
            gender: 'Male',
            LastAppointmentDate: '2024-12-02',
        },
    ]);

    const handleSearch = () => {
        const filteredDiagnoses = diagnoses.filter((d) =>
            d.patientName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setDiagnoses(filteredDiagnoses);
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
                    <table className='w-full rounded-lg overflow-hidden border-collapse bg-white'>
                        <thead>
                            <tr className='bg-gray-700 text-white'>
                                <th className='border p-2'>Name</th>
                                <th className='border p-2'>Age</th>
                                <th className='border p-2'>Gender</th>
                                <th className='border p-2'>Latest Appointment</th>
                                <th className='border p-2'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {diagnoses.map((diagnosis,idx) => (
                                <tr onClick={()=>{}} key={'diagnaosis'+idx} className='hover:bg-gray-100'>
                                    <td className='border p-2 pl-4'>{diagnosis.patientName}</td>
                                    <td className='border p-2 text-center'>{diagnosis.age}</td>
                                    <td className='border p-2 text-center'>{diagnosis.gender}</td>
                                    <td className='border p-2 text-center'>{diagnosis.LastAppointmentDate}</td>
                                    <td  onClick={()=>{
                                        handleNavigation('/doctor/view/patient/'+diagnosis.pid)
                                    }} className='border p-2'>
                                        <div className=' flex items-center justify-center w-full'>
                                            <EyeIcon/>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        
        </main>
    );
}

export default ViewPatientRecords