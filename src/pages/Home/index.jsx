import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, ContentHeader, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <ContentHeader>
          <h1>Meus filmes</h1>
          <Link to="/create">
            <Button title="Adicionar Filme" icon={<FiPlus />} />
          </Link>
        </ContentHeader>

        <Link to="/preview">
          <Card title="Interestellar">
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma
              sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
              NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
              Cooper, acredita que seu quarto está assombrado por um fantasma que
              tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
              uma inteligência desconhecida que está enviando mensagens codificadas
              através de radiação gravitacional, deixando coordenadas em binário que
              os levam até uma instalação secreta da NASA liderada pelo professor
              John Brand. O cientista revela que um buraco de minhoca foi aberto
              perto de Saturno e que ele leva a planetas que podem oferecer condições
              de sobrevivência para a espécie humana.
            </p>
          </Card>
        </Link>

        <Link to="/preview">
          <Card title="Interestellar">
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma
              sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
              NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
              Cooper, acredita que seu quarto está assombrado por um fantasma que
              tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
              uma inteligência desconhecida que está enviando mensagens codificadas
              através de radiação gravitacional, deixando coordenadas em binário que
              os levam até uma instalação secreta da NASA liderada pelo professor
              John Brand. O cientista revela que um buraco de minhoca foi aberto
              perto de Saturno e que ele leva a planetas que podem oferecer condições
              de sobrevivência para a espécie humana.
            </p>
          </Card>
        </Link>

        <Link to="/preview">
          <Card title="Interestellar">
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma
              sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
              NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
              Cooper, acredita que seu quarto está assombrado por um fantasma que
              tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
              uma inteligência desconhecida que está enviando mensagens codificadas
              através de radiação gravitacional, deixando coordenadas em binário que
              os levam até uma instalação secreta da NASA liderada pelo professor
              John Brand. O cientista revela que um buraco de minhoca foi aberto
              perto de Saturno e que ele leva a planetas que podem oferecer condições
              de sobrevivência para a espécie humana.
            </p>
          </Card>
        </Link>
      </Content>
    </Container>
  );
}
