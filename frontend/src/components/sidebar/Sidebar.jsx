// Sidebar.jsx

import React from 'react';

import Search from './Search';
import Conversations from './Conversations';
import Logout from './Logout';

const Sidebar = () => {
  return (
    <>
      <div style={{display:"flex",flexDirection:"column"}} className='border-r border-slate-500 flex flex-col'>
      <Search />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
      </div>
      {/* Add other sidebar components here */}
    </>
  );
}

export default Sidebar;
