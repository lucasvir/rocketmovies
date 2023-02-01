import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Avatar } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>

      <Avatar>
        <img src="https://github.com/lucasvir.png" alt="Foto do usuário" />
        <label htmlFor="avatar">
          <FiCamera />

          <input type="file" id="avatar" />
        </label>
      </Avatar>

      <Form>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha atual" icon={FiLock} />
        <Input type="password" placeholder="Nova senha" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
