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

export const Content = styled.section`
  padding: 5rem 12rem;

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
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

  .search {
    width: 60%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-bottom: 0.8rem;
    border-radius: 1rem;

    > input {
      height: 5.6rem;
      width: 100%;

      padding: 1.6rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      background: transparent;

      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }

    svg {
      margin-left: 1.6rem;
    }
  }

  > button {
    max-width: 20rem;
  }
`;
