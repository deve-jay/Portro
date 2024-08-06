// import React from 'react'

const Background = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="h-full w-full  bg-black  bg-grid-white/[0.2] absolute flex items-center justify-center">
          {" "}
        </div>
        <div className="absolute pointer-events-none inset-0  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </>
  );
};

export default Background;
