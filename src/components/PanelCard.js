import React from 'react';

const PanelCard = ({ img, title }) => {
  return (
    <div className=" w-40 h-40 bg-secondary-red flex flex-col place-content-evenly place-items-center rounded-lg shadow-pn">
      <img src={img} alt="courselogo" className="w-20" />
      <div className="text-primary text-2xl ">{title}</div>
    </div>
  );
};

export default PanelCard;
