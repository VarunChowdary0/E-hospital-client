import React from 'react'
import ImageIcon from '../widgets/ImageIcon';

interface currentProps{
    height : number;
    width : number;
    url : string
}
const OperationImageIcon:React.FC<currentProps> = (props) => {
  return (
      <ImageIcon h={props.height} w={props.width} url={props.url} alt=''/>
  )
}

export default OperationImageIcon