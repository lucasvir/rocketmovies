// import { Container } from './styles';
// import { FiPlus, FiX } from 'react-icons/fi';

// export function Marker({ title, icon, isNew, ...rest }) {
//   return (
//     <Container isNew={isNew}>
//       {title}
//       {isNew ? <FiPlus /> : <FiX />}
//     </Container>
//   );
// }

import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function Marker({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type='text' value={value} readOnly={!isNew} {...rest} />

      <button
        type='button'
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
