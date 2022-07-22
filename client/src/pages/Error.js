import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

function Error() {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Page not Found</h3>
        <p>There was a problem with your request...</p>
        <Link to='/'>Back Home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
