import React from 'react'
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '../icons/Icons/SettingsIcon';
import UserIcon from '../icons/Icons/UserIcon';
import OperationImageIcon from '../icons/OperationImageIcon';
import HomeIcon from '../icons/Icons/MenuIcons/HomeIcon';

interface naver {
    title : string ;
    route  : string ;
    icon : JSX.Element; 
}
interface currentProps{
    navigation :     { title: string, route: string }[];
    parent : string;
}
const Menu:React.FC <currentProps> = ({navigation,parent}) => {
    const navigate = useNavigate();
    const handleNavigation = (route: string) => {
        navigate(route);
      };
    
    const nav_patient : naver[] = [
        {
            title : 'appointments',
            route : "appointments",
            icon : <OperationImageIcon url='https://cdn-icons-png.flaticon.com/512/3634/3634820.png' height={20} width={20}/>
        },
        {
            title : 'billings',
            route : "billing",
            icon : <OperationImageIcon url='https://cdn-icons-png.flaticon.com/512/625/625599.png' height={20} width={20}/>
        },
        {
            title : 'settings',
            route : "settings",
            icon : <SettingsIcon color='white' scale={1}/>
        },
        {
            title : 'profile',
            route : "profile",
            icon : <UserIcon color='white' scale={1}/>
        },
    ] 

    const nav_doctor : naver[] = [
        {
            title : 'dashboard',
            route : "dashboard",
            icon : <HomeIcon color='white'/>
        },
        {
            title : 'settings',
            route : "settings",
            icon : <SettingsIcon color='white' scale={1}/>
        },
        {
            title : 'profile',
            route : "profile",
            icon : <UserIcon color='white' scale={1}/>
        },
    ]
  return (
    <>
        <aside className="w-1/5 max-sm:hidden bg-gray-100 p-4 shadow-md">
                <div onClick={()=>{
                    // handleNavigation("/dashboard")
                }} className="text-xl font-semibold mb-6 hover:cursor-pointer">E-Hospital</div>
                <ul>
                    {navigation.map((item, idx) => (
                        <li
                        key={idx}
                        className="p-3 mb-3 rounded-lg hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleNavigation(item.route)}
                        >
                        {item.title}
                        </li>
                    ))}
                </ul>
        </aside>

        <div className=' fixed hidden z-[1000] max-sm:block bottom-0 left-0 right-0 h-12 bg-[#ff3b3b]'>
            <ul className=' flex justify-around items-center pt-1 px-4'>
                {
                (parent==='patient' ?
                     nav_patient
                    : parent === 'doctor' ?
                     nav_doctor
                    :[]
                ).map((item, idx) => (
                    <li
                    key={idx}
                    className="p-3 mb-3 rounded-lg cursor-pointer"
                    onClick={() => handleNavigation(item.route)}
                    >
                    {item.icon}
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Menu