import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.LinkButtonSlice} LinkButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinkButtonSlice>} LinkButtonProps
 * @param { LinkButtonProps }
 */
const LinkButton = ({ slice }) => {
  return (
    <a
      href={slice.primary.link.url}
      className="relative col-start-3 w-[50vw] md:w-[30vw]  cursor-pointer text-lg md:text-xl text-blue-800 underline transition-[0.2s] hover:opacity-70 mb-3 "
      target="_blank"
      rel="noreferrer"
    >
      <div className="">{slice.primary.name}</div>
    </a>
  );
};

export default LinkButton;
