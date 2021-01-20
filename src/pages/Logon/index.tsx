import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/router'

import api from '../../utils/services';

import {
  Container,
  GoBack,
  LoginSession,
  Input,
  LoginButton,
  CreateAccount
} from './styles';

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
          <Link href="/">
            <GoBack>
              <img src='/back.svg' alt="Go back home" />
              <p>Home</p>
            </GoBack>
          </Link>
        
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
            <CreateAccount>
              <Link href="/create-account">
                <p>Create account</p>
              </Link>
            </CreateAccount>
          </LoginSession>          
        </Container>   
      </>
  );
}
