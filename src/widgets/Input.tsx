import React from 'react'

interface currentProps{
    type : string;
    value : string;
    placeholder:string|'';
    setter : (e:string)=>void | React.Dispatch<React.SetStateAction<any>>;
}

const Input:React.FC<currentProps> = (props) => {
  return (
    <div>
        <input 
            className={` ${props.placeholder==='Email'?'w-[350px] max-sm:w-full':''} border px-3 py-2 rounded-md outline-green-400`}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e)=>{
                props.setter(e.target.value);
            }}
        />
    </div>
  )
}

export default Input