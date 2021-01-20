import { NextPage } from 'next';
import { useState, useEffect } from 'react';

import api from '../../utils/services';

import ProfileNav from '../../components/ProfileNav';

import { Container, Wrapper, CommentArea } from './styles';

interface Post {
  comments: string[];
  id: number;
  message: string;
}

const IndexPage: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await api.get('/api/posts');
      setPosts(request.data);
      console.log(request)

      return request;
    }

    fetchData();
  }, [])

  async function handlePost(): Promise<void> {
    try {
      api.post('/api/create-post', { message })
      return alert("Messagem postada com sucesso");

    } catch {
      return alert("Erro ao postar a mensagem");
    }
  }

  return (
    <Container>
      <Wrapper>
        <ProfileNav />

        
        {/* Criar uma página para postar comentários e outra para exibi-los */}
        <CommentArea>
          <h1>Faça seu comentário</h1>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handlePost}
            type="submit">
            Postar
          </button>
        </CommentArea>

        {posts.map((post: Post) => (
          <Container key={post.id}>
            <p>{post.message}</p>
          </Container>
        ))}
        
      </Wrapper>
    </Container>
  );
};

export default IndexPage;