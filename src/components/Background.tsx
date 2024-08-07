// import React from 'react'

const Background = ({element}:any) => {
  return (
    <>
      <div className="flex  h-[100vh]">
        <div className="h-full w-full  bg-black  bg-grid-white/[0.2] absolute flex items-center justify-center"></div>
        <div className="absolute pointer-events-none inset-0  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {element}
      </div>
    </>
  );
};

export default Background;
