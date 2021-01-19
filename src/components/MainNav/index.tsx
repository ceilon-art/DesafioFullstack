import React from 'react';
import Link from 'next/link';

import { Container, Home, HomeLink, ProfileButton, ProfileLink } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>    
      <Home>
        <img
          src='/logo.jpg'
          alt='Desafio Fullstack'            
        />
        <Link href="/">
          <HomeLink>Desafio Fullstack</HomeLink>
        </Link>
      </Home>
      
      <ProfileButton>
        <Link href="/Logon">
          <ProfileLink>Login</ProfileLink>
        </Link>
      </ProfileButton>      
    </Container>
  );
};

export default Nav;