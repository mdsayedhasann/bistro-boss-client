import React from "react";

const Cover = ({ img, heading, content }) => {
  return (
    <div style={{backgroundImage: `url(${img})`}} className="bg-cover py-36 bg-no-repeat">
      <div className="bg-black bg-opacity-60 py-20 w-3/4 mx-auto flex justify-center items-center text-white flex-col px-10">
        <h3 className="text-3xl py-3">{heading}</h3>
        <p>
         {
             content
         }
        </p>
      </div>
    </div>
  );
};

export default Cover;
