import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que quiser.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={FiUser} type="text" />
        <Input placeholder="E-mail" icon={FiMail} type="text" />
        <Input placeholder="Senha" icon={FiLock} type="password" />

        <Button title="Cadastrar" />

        <Link to="/login">
          <ButtonText title="Voltar para o login" icon={FiArrowLeft} />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
