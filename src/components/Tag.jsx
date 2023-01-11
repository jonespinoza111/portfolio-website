import React, { useEffect, useState } from "react";

const Tag = ({ tag }) => {
  const [isTagActive, setIsTagActive] = useState(false);
  return (
    <div
      className={`bg-white rounded-xl flex flex-row items-center justify-center w-auto py-2 px-5 font-semibold text-[20px] tracking-wider cursor-pointer hover:bg-opacity-80 ${
        isTagActive ? "tag-is-active" : null
      }`}
      onClick={() => setIsTagActive((prev) => !prev)}
    >
      {tag}
    </div>
  );
};

export default Tag;
