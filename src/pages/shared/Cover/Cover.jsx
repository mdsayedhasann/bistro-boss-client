import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, heading, content }) => {
  return (
    <>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="bg-cover py-36 bg-no-repeat"
      >
        <div className="bg-black bg-opacity-60 py-20 w-3/4 mx-auto flex justify-center items-center text-white flex-col px-10">
          <h3 className="text-3xl py-3">{heading}</h3>
          <p>{content}</p>
        </div>
      </div>
    </Parallax>
    </>
  );
};

export default Cover;
