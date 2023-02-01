import styled from 'styled-components';

export const Container = styled.span`
  /* width: 12rem; */
  height: 2.4rem;

  margin-right: 0.8rem;
  padding: 0.5rem 1.6rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 0.8rem;

  text-align: center;
`;
