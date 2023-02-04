import React from 'react'

const Card = ({title, imageLink, updated}) => {

  const formattedDate = new Date(updated).toLocaleDateString();

  const loremIpsum = (limit) => {
    let lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return lorem.substring(0, limit);
  };

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
        <p className="font-bold text-xl hover:text-blue-400 cursor-pointer">
          {title}
        </p>
        <p className="w-2/3 pl-3">
          {loremIpsum(260)}...{" "}
          <span className="underline text-blue-400 cursor-pointer">
            Read more
          </span>
        </p>
        <p className="pl-3 text-gray-700 font-bold uppercase">
          Last updated: {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default Card