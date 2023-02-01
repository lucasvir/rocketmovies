import { Container, ContentHeader, Form } from './styles';

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Content } from '../../components/Content';
import { Input } from '../../components/Input';
import { Tag } from '../../components/Tag';
import { Marker } from '../../components/Marker';

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          <Link to="/">
            <ButtonText title="Voltar" icon={FiArrowLeft} />
          </Link>
          <h1>Novo Filme</h1>
        </ContentHeader>

        <Form>
          <div>
            <Input type="text" placeholder="Título" />
            <Input type="number" placeholder="Sua nota (0 a 5)" />
          </div>
          <textarea placeholder="Observações" cols="30" rows="10" />

          <h2>Marcadores</h2>
          <div>
            <Marker title="React" />
            <Marker title="Novo Marcador" isNew />
          </div>

          <div>
            <Button title="Excluir filme" />
            <Button title="Salvar alteração" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
