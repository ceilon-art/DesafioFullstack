import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/router'

import api from '../../utils/services';

import { Container, LoginSession, Input, LoginButton, NewAccount } from './styles';

export default function Home() {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  async function handleSubmit(e: MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();

    try {
      await api.post('/api/login', { email })
      router.push(`/Profile/${email}`);
    } catch {
      alert("Usuário não encontrado")
    }
  }

  return (
      <>
        <Container>
          <h1>Faça login ou crie sua conta</h1>
          <LoginSession>
            <Input
              type='text'
              placeholder='Digite seu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginButton type='button' onClick={handleSubmit}>
              Entrar
            </LoginButton>
            <NewAccount type='button'> 
              <Link href='/create-account'>
                <span>Criar nova conta</span>
              </Link>
            </NewAccount>
          </LoginSession>          
        </Container>   
      </>
  );
}
