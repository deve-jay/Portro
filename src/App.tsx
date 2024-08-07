// import React from 'react'
import Background from "./components/Background.tsx";

const App = () => {
  return (
    <>
      <Background />
      <div className="top-element">
        <div className="w-[20vw] translate-x-[65vw] translate-y-[25vh] h-[50vh] bg-yellow-50 rounded-t-3xl  before:absolute before:-translate-y-2 before:translate-x-2 before:-inset-1 before:bg-yellow-50 before:opacity-70 before:rounded-t-3xl hover:scale-105 transition" ></div>
      </div>
    </>
  );
};

export default App;
