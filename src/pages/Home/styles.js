import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4rem;

  > h1 {
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {
    max-width: 20rem;
  }
`;

export const Content = styled.section`
  padding: 5rem 12rem;

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
