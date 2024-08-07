// import React from 'react'
import Background from "./components/Background.tsx"

const App = () => {
  return (
    <>
    <Background
    element={ <div className="top-element  ">
      <div className="box h-72 w-56 bg-google translate-y-0 translate-x-0 text-reddit " ></div>
    </div>}
    />
    </>
  );
};

export default App;
