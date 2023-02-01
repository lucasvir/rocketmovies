import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  /* margin: 0 6.4rem; */
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
`;
