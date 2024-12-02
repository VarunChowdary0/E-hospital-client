import React from 'react'

interface currentProps{
    text : string
}
const Heading1:React.FC<currentProps> = (props) => {
  return (
    <p className="pt-1 pb-2 text-3xl font-thin max-sm:text-2xl">{props.text}</p>
)
}

export default Heading1