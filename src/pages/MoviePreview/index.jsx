import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Container, ContentHeader } from './styles';

import { FiArrowLeft, FiClock, FiX } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Content } from '../../components/Content';
import { Tag } from '../../components/Tag';

export function MoviePreview() {
  const [data, setData] = useState(null);

  const { user } = useAuth();
  const params = useParams();

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleBack() {
    return navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm('Você deseja excluir a nota?');

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack();
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ContentHeader>
              <ButtonText
                title='Voltar'
                icon={FiArrowLeft}
                onClick={handleBack}
              />

              <div>
                <h1>{data.title}</h1>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />

                <button onClick={handleRemove}>
                  <FiX />
                  Excluir nota
                </button>
              </div>

              <div>
                <div>
                  <img src={avatarUrl} alt={user.name} />
                  <p>por {user.name}</p>
                </div>
                <div>
                  <FiClock />
                  <p>{data.created_at}</p>
                </div>
              </div>

              {data && (
                <div>
                  {data.tags.map(tag => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))}
                </div>
              )}
            </ContentHeader>
            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
