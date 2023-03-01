import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiLock,
  FiCamera,
} from 'react-icons/fi';
import { Link, Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/placeholder_avatar.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Avatar } from './styles';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <ButtonText
          title='Voltar'
          icon={FiArrowLeft}
          onClick={handleBack}
        />
      </header>

      <Avatar>
        <img src={avatar} alt={user.name} />
        <label htmlFor='avatar'>
          <FiCamera />

          <input
            type='file'
            id='avatar'
            onChange={handleChangeAvatar}
          />
        </label>
      </Avatar>

      <Form>
        <Input
          type='text'
          placeholder='Nome'
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type='text'
          placeholder='E-mail'
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Senha atual'
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Nova senha'
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title='Salvar' onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
