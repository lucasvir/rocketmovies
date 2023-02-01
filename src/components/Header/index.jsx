import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />

      <Profile>
        <div>
          <span>Lucas Virmond</span>
          <a href="/">Sair</a>
        </div>
        <Link to="/profile">
          <img src="https://github.com/lucasvir.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}
