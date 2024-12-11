import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage:React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (route:string) =>{
        navigate(route);
    }
    const data = [
        {
            title : "Patient",
            route : "/patient"
        },
        {
            title : "Doctor",
            route : "/doctor"
        },
        {
            title : "Login",
            route : "/login"
        },
        {
            title : "Register",
            route : "/patient/registration"
        },
    ]
  return (
    <div className=' h-screen w-full flex flex-col relative
     items-center justify-center'>
        <p className=' absolute top-24 text-5xl max-sm:text-4xl'>Test menu Options</p>
        <ul className='list-disc flex flex-col gap-5 shadow-md p-10 rounded-xl
         text-lg font-4'> 
            {
                data.map((ele,idx)=>
                    <li className='hover:underline text-gray-800 
                hover:cursor-pointer  hover:text-sky-500'
                     onClick={()=>handleNavigation(ele.route)}>
                        {ele.title}
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default HomePage