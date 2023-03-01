// import styled from 'styled-components';

// export const Container = styled.button`
//   height: 5.6rem;

//   padding: 1.6rem;

//   border-radius: 0.8rem;
//   border: ${({ theme, isNew }) =>
//     isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : 'none'};

//   background-color: ${({ theme, isNew }) =>
//     isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};
//   color: ${({ theme }) => theme.COLORS.WHITE};

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1.6rem;

//   svg {
//     color: ${({ theme }) => theme.COLORS.PINK};
//   }
// `;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25%;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  /* margin-bottom: 8px; */
  border-radius: 10px;
  padding-right: 1rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
