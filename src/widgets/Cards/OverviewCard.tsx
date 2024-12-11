import React from "react";
import ImageIcon from "../ImageIcon";


interface Props {
  title: string;
  description: string;
  icon: string | JSX.Element;
  onClick?: () => void;
}

const OverviewCard: React.FC<Props> = ({ title, description, icon, onClick }) => {
  return (
    <div
      className="p-4 hover:cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <div className=" mb-2">
        {
          typeof icon === 'string' ? 
          <ImageIcon url={icon} alt={title} h={40} w={40}/>
          :
          icon
        }
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default OverviewCard;
