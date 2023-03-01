import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, ContentHeader, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Tag } from '../../components/Tag';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header />

      <Content>
        <ContentHeader>
          <h1>Meus filmes</h1>
          <div className='search'>
            <FiSearch size={20} />
            <input
              placeholder='Pesquisar pelo título'
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Link to='/create'>
            <Button title='Adicionar Filme' icon={<FiPlus />} />
          </Link>
        </ContentHeader>

        {notes &&
          notes.map((note, index) => (
            <Link key={index} to={`/preview/${note.id}`}>
              <Card
                key={String(note.id)}
                title={note.title}
                onClick={() => handleDetails(note.id)}
              >
                <p>{note.description}</p>
                <div>
                  {tags &&
                    tags
                      .filter(tag => tag.note_id == note.id)
                      .map(tagsOfnote => (
                        <Tag
                          key={String(tagsOfnote.id)}
                          title={tagsOfnote.name}
                        />
                      ))}
                </div>
              </Card>
            </Link>
          ))}
      </Content>
    </Container>
  );
}
