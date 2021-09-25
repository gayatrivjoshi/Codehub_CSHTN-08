import React from 'react';

const ListItem = ({ title, idx, index, downurl, link, handleSubmit }) => {
  return (
    <div>
      <div className="flex flex-row place-content-between border-b border-secondary-lightgray w-full h-32 border-opacity-10 items-center">
        <p className="ml-8 text-2xl font-normal">{title}</p>
        {downurl && idx === index ? (
          <a href={downurl}>
            <button
              className="w-52 text-2xl h-12 mr-8 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
            >
              Download
            </button>
          </a>
        ) : (
          <button
            onClick={() => handleSubmit(link, idx)}
            className="w-52 text-2xl h-12 mr-8 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
          >
            Read now
          </button>
        )}
      </div>
    </div>
  );
};

export default ListItem;
