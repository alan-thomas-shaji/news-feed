import React from 'react'

const Card = ({title, imageLink}) => {

  return (
    <div className="flex p-3 m-auto w-9/12">
      <div className="w-1/3">
        <img
          src={imageLink}
          alt={title}
          className="rounded-lg h-64 w-full object-cover"
        />
      </div>
      <div className="w-2/3 pl-3">
        <p className="font-bold text-xl">{title}</p>
      </div>
    </div>
  );
}

export default Card