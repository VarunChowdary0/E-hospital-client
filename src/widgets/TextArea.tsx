import React from 'react'

interface currentProps{
    value : string;
    placeholder:string|'';
    setter : (e:string)=>void | React.Dispatch<React.SetStateAction<any>>;
}

const TextArea:React.FC<currentProps> = (props) => {
  return (
    <div>
        <textarea
        className={` w-[350px] max-sm:w-[300px] min-h-[42px] border px-3 py-2 rounded-md outline-green-400`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>{
            props.setter(e.target.value);
        }}
        ></textarea>
    </div>
  )
}

export default TextArea