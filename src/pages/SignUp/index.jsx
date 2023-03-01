import { useState } from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form, Background } from './styles';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadstrado com sucesso!');
        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não  foi possível cadastrar.');
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que quiser.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder='Nome'
          icon={FiUser}
          type='text'
          onChange={e => setName(e.target.value)}
        />
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

        <Button title='Cadastrar' onClick={handleSignUp} />

        <Link to='/login'>
          <ButtonText
            title='Voltar para o login'
            icon={FiArrowLeft}
          />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
