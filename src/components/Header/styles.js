import styled from 'styled-components';

export const Container = styled.header`
  grid-area: 'header';

  height: 11.6rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem 12.3rem;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div {
    max-width: 60%;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.4rem;
      font-weight: 700;
    }

    a {
      font-size: 1.4rem;
      align-self: flex-end;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  a > img {
    width: 6.4rem;
    height: 6.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 50%;
  }
`;
