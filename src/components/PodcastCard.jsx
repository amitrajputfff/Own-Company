import React, { useState } from 'react';

export const PodcastCard = ({ title, author, category, image }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full bg-black hover:bg-mygreen group hover:text-black transition-all duration-300 hover:cursor-pointer h-auto flex flex-col px-4 py-4 justify-start items-start rounded-[20px] gap-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={image}
        alt="podcast"
        className="align-center w-full"
      />
      <h1 className="text-white text-2xl sm:text-3xl group-hover:text-black font-sf-pro capitalize text-left font-semibold">
        {title}
      </h1>
      <img
        src={hover ? "/src/assets/Group 174.svg" : "/src/assets/Group 173.svg"}
        alt="podcast"
      />
      <div className="flex flex-col gap-1">
        <p className="uppercase text-mygreen group-hover:text-black text-xs font-semibold text-left">
          {author}
        </p>
        <p className="uppercase text-[#B2B2B2] group-hover:text-slate-500 text-xs font-semibold text-left">
          {category}
        </p>
      </div>
    </div>
  );
};
