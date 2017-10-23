import React from 'react';
import Media from 'react-media';
import NavTop from './NavTop';
//import NavSide from './NavSide';

const NavBar = () => {
  return (
    <div>
      <Media query='(max-width: 900px)'>
        {matches => matches ? (
          <NavTop />
        ) : (
          <p>NavSide</p>
        )}
      </Media>
    </div>
  );
};

export { NavBar };
