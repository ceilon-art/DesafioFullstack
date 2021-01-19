import { NextPage } from 'next';

import Footer from '../components/Footer';
import Nav from '../components/MainNav';

import { Container, Wrapper, FirstParagraph, CommonParagraph } from '../styles/IndexStyle';

const IndexPage: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <FirstParagraph>
          <h1>
            Você é universitário, e está com dificuldade em alguma
            disciplina ou gostaria de conhecer mais sobre outros assuntos?
            Venha para o Desafio Fullstack, um blog no qual você pode trocar
            informações das mais diversas com quem você quiser e de onde estiver! 
          </h1>
          
          <img
            src='/indice.jpg'
            alt='Indice'
          />
        </FirstParagraph>
      </Wrapper>

      <Wrapper>        
        <p>
          Somos facilitadores de conteúdo de ensino entre pessoas
          interessadas em aprender mais sobre quaisquer assunto.
        </p>
      </Wrapper>

      <Wrapper>
        <h1>Bem vindo</h1>
        <CommonParagraph>
          <p>
            Nosso site foi criado com o intuito de facilitar a vida de alunos
            e interessados que queiram se aplicar mais em seus estudos e também
            adquirir novos conhecimentos sobre assuntos dos mais diversos.
          </p>

          <img
            src='/estudos.jpg'
            alt='Estudos'
          />
        </CommonParagraph>

        <CommonParagraph>
          <p>
            Com ferramentas para marcar aulas e agendar horários sempre buscando o
            modo mais facil para o usuário se programar e melhor utilizar seu
            tempo e foco para estudos. Com a nossa ajuda você vê professores que
            podem atender no horário em que você tenha disponibilidade, caso não
            encontre nenhum com atendimento quando precisa, pode agendar um
            horário com o próprio tutor.
          </p>          
        </CommonParagraph>
      </Wrapper>

      <Wrapper>
        <CommonParagraph>
          <p>
            Cansado de querer se aprofundar mais nos seus estudos, mas não
            consegue achar um conteúdo que realmente valha a pena mergulhar?
          </p>          
        </CommonParagraph>

        <CommonParagraph>
          <p>
            Junte-se a nós e ajude a criar um ambiente de conteúdo de qualidade 
            e interessante. Cadastre-se no site, e comece a ter acesso aos mais
            diversos posts onde você pode aprender o que quiser e quando quiser.
          </p>

          <img
            src='/final.jpg'
            alt='Imagem Final'
          />
        </CommonParagraph>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default IndexPage;