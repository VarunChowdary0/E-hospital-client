import React from 'react'
import { useNavigate } from 'react-router-dom';

interface currentProps{
    title : string;
    icon : JSX.Element;
    route: string;
}

const OpernationButtonComp:React.FC<currentProps> = ({title,icon,route}) => {
  const navigate = useNavigate();

  const handleOperationClick = (route: string) => {
    navigate(route); 
  };
  return (
    <div onClick={()=>handleOperationClick(route)} className=' active:scale-[1] hover:scale-[1.02] transition-all w-[35%] h-14 bg-[#393939] hover:cursor-pointer
    rounded flex items-center justify-center min-w-[250px]'>
        <div className=' flex items-end justify-between gap-6 text-white'>
            <p className=' text-xl max-md:text-md'>{title}</p>
            {icon}
        </div>
    </div>
  )
}

export default OpernationButtonComp