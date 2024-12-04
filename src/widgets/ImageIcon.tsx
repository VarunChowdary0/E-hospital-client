import React from 'react';

interface CurrentProps {
  h: number;
  w: number;
  url: string;
  alt?: string; 
}

const ImageIcon: React.FC<CurrentProps> = (props) => {
  return (
    <div
      className="select-none"
      style={{
        backgroundImage: `url(${props.url})`, 
        height: `${props.h}px`, 
        width: `${props.w}px`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
      aria-label={props.alt} 
    />
  );
};

export default ImageIcon;
