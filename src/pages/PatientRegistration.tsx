import React, { useState } from 'react'
import Personal_Info from '../components/Personal_Info'
import EmergencyContact from '../components/EmergencyContact';
import IdentificationDetails from '../components/IdentificationDetails';
import MedicalHistory from '../components/MedicalHistory';
import Slider from '../widgets/Slider';

const PatientRegistration:React.FC = () => {
    const [currentPage,setPage] = useState<number>(0);

    const [personalData,setPersonalData] = useState<{
        Name : { firstname: string;
            middelname: string;
            lastname: string;
        },
        Contact : {
            phoneNumber : string,
            email : string
        },
        Address : {
            Street : string,
            City : string,
            State : string,
            PostalCode : string
        },DOB:string,Marital_Status:string
    }>({
        Name : { firstname: '',
            middelname: '',
            lastname: ''
        },
        Contact : {
            phoneNumber : '',
            email : ''
        },
        Address : {
            Street : '',
            City : '',
            State : '',
            PostalCode : ''
        },
        DOB:'',
        Marital_Status:''
    });

    const [EmergencyData,setEmergencyData] = useState<{
            Name: string;
            Relationship: string;
            PhoneNumber: string;
            AlternatePhoneNumber: string;
        }[]>([{
            Name: "",
            Relationship: "",
            PhoneNumber: "",
            AlternatePhoneNumber: ""
}]);

    const [IdentificationData,setIdentificationData] = useState<{
            IDType: string;
            IDNumber: string;
            IssuedBy: string;
            IssuedDate: string;
            ExpiryDate: string;
    }[]>([{
            IDType: '',
            IDNumber: '',
            IssuedBy: '',
            IssuedDate: '',
            ExpiryDate: '',
    }]);

    const [MedicalData,setMedicalData] = useState<{
                    Condition: string;
                    DiagnosisDate: string;
                    Treatment: string;
                    Notes: string;
                    }[]>([{
                        Condition:'',
                        DiagnosisDate:'',
                        Treatment:'',
                        Notes:''
                }])

    const Submit = () => {
        const data = {
            personalData,
            EmergencyData,
            IdentificationData,
            MedicalData
        }

        console.log(data);
    }
    
    const items: JSX.Element[] = [
                    <Personal_Info  
                        Page={currentPage}
                        setPage={setPage}
                        data={personalData} 
                        setter={setPersonalData}/>,

            <EmergencyContact
                Page={currentPage}
                setPage={setPage}
                data={EmergencyData}
                setter={setEmergencyData}
            />,
                    <IdentificationDetails
                        Page={currentPage}
                        setPage={setPage}
                        data={IdentificationData}
                        setter={setIdentificationData}
                    />,

            <MedicalHistory
                Page={currentPage}
                setPage={setPage}
                data={MedicalData}
                setter={setMedicalData}
                submit={Submit}
            />
            ];


  return (
    <div className=' min-h-screen max-w-screen overflow-hidden h-fit w-screen flex flex-col items-center gap-[50px] 
    max-sm:gap-[15px]   '>
       
            <div className='title w-full pl-[15%] max-sm:pl-0 max-sm:p-3 flex 
             max-sm:flex-col items-end justify-between  pr-[30%]
            max-sm:ml-0 mt-[100px] font-4 text-4xl max-sm:mt-[0px] max-sm:text-3xl'>
                    <p>Patient Registration Form</p>
                    <div className=' font-sans text-sm flex gap-3 w-[100px] items-end'>
                        <p className=' pb-[2.5px]'>Page</p>
                        <div className=' text-lg'>{currentPage+1} / {items.length}</div>
                    </div>
            </div>
       <div className=' w-screen flex gap-2'>
       {
            items.map((comp,idx)=>
                <div className={` bg-black/0 w-screen min-w-[100vw]  
                 translate-x-0
                 translate-x-[-${101*currentPage}vw] transition-all duration-300
                relative flex justify-center items-center `}>
                    <div className=' center_ele bg-white h-fit min-h-[00px]  max-sm:w-[87vw]
                                    shadow-p border rounded-xl px-6 max-sm:px-2 py-3 w-[60vw]'>
                        {comp}
                    </div>
                </div>
            )
        }
       </div>
       
       <Slider/>
       

    </div>
  )
}

export default PatientRegistration