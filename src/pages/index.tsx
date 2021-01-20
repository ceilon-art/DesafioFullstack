import { NextPage } from 'next';
import Link from 'next/link';

import NavBar from '../components/NavBar';
import Button from '../components/Button';

import {
  Container,
  Section,
  Presentation,
  Background,
  Try,
  SideText,
  Author
} from '../styles/IndexStyle';

const IndexPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Section>
          <h1>Já pensou em ter uma rede social em que todos podem ver suas ideias sem necessitar de uma solicitação de amizade?</h1>
          <h2>
            Não se preocupe, pois criamos o aplicativo perfeito para que você faça isso!
          </h2>
        </Section>
      </Container>
      <Background>
        <Presentation>
          <h2>Apresnto para você...</h2>
          <h1>O Meu Mural</h1>
          <p>
            Um aplicativo em que você pode compartilhar tudo sobre o que você quiser sem burocracia!!
          </p>
        </Presentation>
      </Background>
      <Try>
        <img src='/garoto.jpg' alt='Create Account'/>
        <SideText>
          <p>
            Isso leva 30 segundos e, além disso, é tudo gratuito!
          </p>
          <Link href="/create-account">
            <div>
              <Button color="#10B26C" hover="#12DB89">
                Crie sua conta
              </Button>
            </div>            
          </Link>
        </SideText>
      </Try>
      <Author>
        <a
          href="https://github.com/ceilon-art?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Website criado por André Luiz Kanaan Nagano</p>
        </a>
      </Author>
    </>
  );
};

export default IndexPage;