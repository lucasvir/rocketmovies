import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  height: 5.6rem;
  width: 100%;

  padding: 0 1.6rem;

  border-radius: 1rem;
  border: 0;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
