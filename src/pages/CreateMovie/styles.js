import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContentHeader = styled.div`
  width: 100%;

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;

    margin-top: 2.4rem;
    margin-bottom: 4rem;
  }
`;

const Form = styled.form`
  width: 100%;

  > div {
    display: flex;
    gap: 2rem;
  }

  textarea {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: none;
    border-radius: 1rem;

    padding: 1.6rem;
    margin-top: 4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    resize: none;
  }

  > h2 {
    margin-top: 4rem;
    margin-bottom: 2.4rem;

    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .markers {
    align-items: center;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

    border-radius: 1rem;

    margin-bottom: 4rem;
  }

  div:nth-child(5) {
    display: flex;

    > button:first-child {
      background-color: ${({ theme }) =>
        theme.COLORS.BACKGROUND_1000};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export { Container, ContentHeader, Form };
