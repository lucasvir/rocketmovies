import styled from 'styled-components';

export const Container = styled.button`
  height: 5.6rem;

  padding: 1.6rem;

  border-radius: 0.8rem;
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : 'none'};

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
