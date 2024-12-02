import React from 'react'

interface currentProps{
    message : string
}
const ErrorMessage:React.FC<currentProps> = ({message}) => {
  return (
    <div className={`text-center flex items-center justify-center
     text-orange-600 w-full h-4 ${message.length>20?' max-sm:mt-5 ':''}`}>
        <p className='max-sm:w-[70%] text-center'>
            {message}
        </p>
    </div>
  )
}

export default ErrorMessage