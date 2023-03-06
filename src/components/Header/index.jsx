import { useState, useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/placeholder_avatar.svg';

import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Profile>
        <div>
          <span>{user.name}</span>
          <a href='/' onClick={signOut}>
            Sair
          </a>
        </div>
        <Link to='/profile'>
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
