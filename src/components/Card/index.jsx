import { Container } from './styles';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Tag } from '../Tag';

export function Card({ title, children }) {
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
      <div>
        <Tag title="Ficção Científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
      </div>
    </Container>
  );
}
