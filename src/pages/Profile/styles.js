import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    height: 14.4rem;

    padding: 0 12rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
`;

export const Avatar = styled.div`
  margin: 0 auto;
  width: 34rem;

  text-align: center;

  position: relative;
  bottom: 8rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 130px;
    left: 210px;

    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      height: 2rem;
      width: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;

export const Form = styled.form`
  width: 34rem;

  margin: -4rem auto 0;

  > div:nth-child(3) {
    margin-top: 2.4rem;
  }

  > button {
    margin-top: 2.4rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;
