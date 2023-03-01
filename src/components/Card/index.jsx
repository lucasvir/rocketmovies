import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Tag } from '../Tag';

export function Card({ title, children }) {
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [tagsOfNotes, setTagsOfNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get('/notes');
      setNotes(response.data);
    }
    fetchNotes();
  }, []);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);

      const tagsFiltered = tags.filter(tag => tag.note_id == key);
      setTagsOfNotes(tagsFiltered);
    }
    fetchTags();
  }, []);

  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      </div>
      {children}
      {/* <div>
        {tags &&
          tags.map((tag, index) => (
            <Tag key={String(index)} title={tag.name} />
          ))}
      </div> */}
    </Container>
  );
}
