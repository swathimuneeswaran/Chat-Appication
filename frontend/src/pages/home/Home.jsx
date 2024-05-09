// Home.jsx

import React from 'react';
import "./Home.css"
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';

const Home = () => {
  return (
    <>
    <div className='back'>
    <div className='img'>
     <img src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg" width="100%"></img>
     </div>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 box'>
        <Sidebar />
        <MessageContainer />
        {/* Add other main content here */}
      </div>
      </div>
      
    </>
  );
}

export default Home;
