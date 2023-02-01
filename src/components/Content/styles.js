import styled from 'styled-components';

export const Container = styled.section`
  padding: 5rem 12rem;

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    text-align: justify;

    margin-top: 4rem;
  }
`;
