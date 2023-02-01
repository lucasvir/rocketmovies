import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Background } from './styles';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que quiser.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" icon={FiMail} type="text" />
        <Input placeholder="Senha" icon={FiLock} type="password" />

        <Button title="Entrar" />

        <Link to="/register">
          <ButtonText title="Criar conta" />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
