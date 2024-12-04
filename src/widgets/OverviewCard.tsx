import React from "react";

interface Props {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
}

const OverviewCard: React.FC<Props> = ({ title, description, icon, onClick }) => {
  return (
    <div
      className="p-4 hover:cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <img src={icon} alt={title} className="w-10 h-10 mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default OverviewCard;
