import React from 'react';
import Link from 'next/link';

import Button from '../Button';

import { Container, Header, Login, CreateAccountButton } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>    
      <Header>        
        <Link href="/">
          <img src='/logo.jpg' alt='Desafio Fullstack'/>
        </Link>
      
        <Login>
          <Link href="/create-account">
              <CreateAccountButton>Crie sua conta</CreateAccountButton>
          </Link>

          <Link href="/Logon">
            <div>
              <Button color='#0000FF' hover='#6495ED'>Login</Button>
            </div>
          </Link>
        </Login>  
      </Header>    
    </Container>
  );
};

export default Nav;