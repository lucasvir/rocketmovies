import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';

export function Marker({ title, icon, isNew, ...rest }) {
  return (
    <Container isNew={isNew}>
      {title}
      {isNew ? <FiPlus /> : <FiX />}
    </Container>
  );
}
