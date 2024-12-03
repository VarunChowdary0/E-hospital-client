import React from 'react'

interface currentProps{
    h : number,
    w : number,
    url : string ,
    alt : string | ""
}
const ImageIcon:React.FC<currentProps> = (props) => {
  return (
    <img
        height={props.h}
        width={props.w}
        src={props.url}
        alt=''
      />
  )
}

export default ImageIcon