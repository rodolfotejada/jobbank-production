import React from 'react';
import Wrapper from '../assets/wrappers/BigSidebar.js';
import { useAppContext } from '../context/appContext.js';
import Logo from '../components/Logo.js';
import NavLinks from '../components/NavLinks';

function BigSidebar() {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
