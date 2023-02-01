import styled from 'styled-components';

export const Container = styled.div`
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  flex-direction: column;

  border-radius: 1.6rem;

  overflow-y: auto;

  > div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 0.8rem;

    margin-bottom: 1.5rem;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: row;

    margin-top: 2.5rem;
  }
`;
