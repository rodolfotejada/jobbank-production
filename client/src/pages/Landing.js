import React from 'react';
import { Logo } from '../components';
import main from '../assets/images/undraw_interview_re_e5jn.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>hunting</span> resource
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            atque harum at vero. Beatae in illum, provident fugiat praesentium
            rem rerum quam temporibus voluptatem illo sed asperiores ratione
            quos porro!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
