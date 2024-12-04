import React, { useEffect, useState } from 'react';
import Input from '../../widgets/Input';
import Heading1 from '../../widgets/Heading1';

type UserType = 'admin' | 'doctor' | 'patient' | 'pharmacist' | 'lab-specialist' | 'biller';

const LoginPage: React.FC = () => {

    const [imageNum,setImageNum] = useState<number>(0);
    const imgs_LT = []

    useEffect(()=>{
        setTimeout(()=>{
            setImageNum((prev)=>prev+1);
        },5000)
    })

    const imgs_RB = [
        'https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?t=st=1733161769~exp=1733165369~hmac=442fd55d822ace56fba3a0787ca263706cd67a59f330d50af430666361a50b6b&w=700',
        "https://img.freepik.com/premium-vector/group-black-african-american-doctors-speech-bubbles_768258-1219.jpg",
        "https://img.freepik.com/free-vector/city-hospital-building_74855-6301.jpg?t=st=1733161968~exp=1733165568~hmac=456dfcb696c3f873455bbe721e80a0060e3e822031eeb9cf1e5fbb61bdf272c3&w=600"
    ]
    const [data, setData] = useState<{
        username: string;
        password: string;
        userType: UserType;
    }>({
        username: '',
        password: '',
        userType: 'patient',
    });

    const handleInputChange = (key: keyof typeof data, value: string) => {
        setData((prev) => ({
        ...prev,
        [key]: value,
        }));
    };

    const handleUserTypeChange = (value: UserType) => {
        setData((prev) => ({
        ...prev,
        userType: value,
        }));
    };

    return (
        <div className="h-screen w-screen bg-cover
         bg-[u'rl('https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg')]
        flex pt-36 max-md:pt-0 max-md:items-center justify-center">
            <div
                className="center_ele bg-white h-fit w-[30vw] max-md:w-[85vw]
                        shadow-xl border rounded-xl px-6 max-sm:px-2 py-3 z-50"
            >
                <Heading1 text='Login Page'/>
                <hr />
                <div className=' mt-4 flex flex-col items-center gap-4'> 
                    <Input
                        type="text"
                        value={data.username}
                        setter={(value) => handleInputChange('username', value)}
                        placeholder="Username"
                    />

                    <Input
                        type="password"
                        value={data.password}
                        setter={(value) => handleInputChange('password', value)}
                        placeholder="Password"
                    />
                </div>

                <div className=' flex items-center justify-around mt-6'>
                    <select
                        value={data.userType}
                        onChange={(e) => handleUserTypeChange(e.target.value as UserType)}
                        className=" p-2  border rounded w-fit"
                        >
                            <option value="admin">Admin</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                            <option value="pharmacist">Pharmacist</option>
                            <option value="lab-specialist">Lab Specialist</option>
                            <option value="biller">Biller</option>
                    </select>

                    <button className="w-fit  p-2 active:scale-90 transition-all
                     bg-blue-500 text-white rounded hover:bg-blue-600">
                    Log In
                    </button>
                </div>
            </div>
            <div className=' fixed bottom-0 right-0'>
                <img 
                className=' w-full h-full'
                src={imgs_RB[imageNum%imgs_RB.length]}
                 alt="" />
            </div>
            <div className=' fixed top-0 left-0 w-[500px] max-sm:w-fit'>
                <img 
                className=' w-full h-full'
                src={"https://img.freepik.com/premium-vector/hospital-glass-building-with-solar-panels-save-energy-ecology-concept-isometric-top-view-out-doo_255805-415.jpg"}
                 alt="" />
            </div>
        </div>
    );
};

export default LoginPage;
