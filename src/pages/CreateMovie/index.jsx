import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, ContentHeader, Form } from './styles';

import { FiArrowLeft, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Content } from '../../components/Content';
import { Input } from '../../components/Input';
import { Tag } from '../../components/Tag';
import { Marker } from '../../components/Marker';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function CreateMovie() {
  const user = useAuth();

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [score, setScore] = useState('0');
  const [description, setDescription] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleAddTags() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
  }

  async function handleNewMovieNote() {
    if (!title) {
      return alert('Digite o título da nota.');
    }

    if (!score) {
      return alert('Digite a nota para o filme.');
    }

    await api.post('/notes', {
      title,
      rating: score,
      description,
      tags,
    });

    alert('Nota criada com sucesso!');
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          <Link to='/'>
            <ButtonText title='Voltar' icon={FiArrowLeft} />
          </Link>
          <h1>Novo Filme</h1>
        </ContentHeader>

        <Form>
          <div>
            <Input
              type='text'
              placeholder='Título'
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type='number'
              placeholder='Sua nota (0 a 5)'
              onChange={e => setScore(e.target.value)}
            />
          </div>
          <textarea
            placeholder='Observações'
            cols='30'
            rows='10'
            onChange={e => setDescription(e.target.value)}
          />

          <h2>Categorias</h2>
          <div className='markers'>
            {tags.map((tag, index) => (
              <Marker
                key={String(index)}
                value={tag}
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              />
            ))}

            <Marker
              isNew
              placeholder='Novo Marcador'
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTags}
            />
          </div>

          <div>
            <Button title='Excluir filme' />
            <Button
              title='Salvar alteração'
              onClick={handleNewMovieNote}
            />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
