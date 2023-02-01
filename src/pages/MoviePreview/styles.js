import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContentHeader = styled.div`
  width: 100%;

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;

    margin: 2.4rem 0;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > div:nth-child(3) {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 1.6rem;

    div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        width: 1.6rem;
        height: 1.6rem;

        border-radius: 50%;
      }
    }

    div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      margin-left: 0.8rem;

      svg {
        width: 1.6rem;
        height: 1.6rem;

        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  > div:nth-child(4) {
    margin-top: 4rem;
  }
`;
