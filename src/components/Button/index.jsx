import { Container } from './styles';

export function Button({ title, loading = false, icon, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {icon}
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
