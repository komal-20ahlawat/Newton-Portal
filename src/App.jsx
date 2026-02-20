import React from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import RIghtSidebar from './components/RIghtSidebar';


const App = () => {
  return (
    <>
    <div className="h-screen flex flex-col">
      <div><Navbar /></div>
      <hr />
      <div className="flex">
        <LeftSidebar />
        <div className="flex-1 bg-white"></div>

        <RIghtSidebar />
      </div>

    </div>
    </>
  );
}

export default App;
