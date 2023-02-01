import styled from 'styled-components';

import BackGroundImg from '../../assets/background-img.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 4.8rem;
  }

  > button {
    margin-top: 2.4rem;
    margin-bottom: 4.2rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackGroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.2;
`;
