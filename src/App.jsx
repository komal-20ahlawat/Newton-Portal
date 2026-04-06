import React from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import RIghtSidebar from './components/RIghtSidebar';
import Centre from './components/Middle-Section/Centre';

const App = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex-shrink-0">
        <Navbar />
      </div>
      <hr className="border-gray-200 flex-shrink-0" />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-shrink-0 h-full overflow-y-auto">
          <LeftSidebar />
        </div>

        <div className="flex-1 min-w-0 h-full overflow-y-auto">
          <Centre />
        </div>

        <div className="flex-shrink-0 h-full overflow-y-auto">
          <RIghtSidebar />
        </div>
      </div>
    </div>
  );
};

export default App;


