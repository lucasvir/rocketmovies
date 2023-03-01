import { useState } from 'react';

import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Background } from './styles';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    return signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que quiser.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder='E-mail'
          icon={FiMail}
          type='text'
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder='Senha'
          icon={FiLock}
          type='password'
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Entrar' onClick={handleSignIn} />

        <Link to='/register'>
          <ButtonText title='Criar conta' />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
