import React from 'react';
import { Link } from 'gatsby';
import { List, Segment } from 'semantic-ui-react';

import KeidaiImage from './KeidaiImage';

const KeidaiContent = () => {
  return (
    <>
      <KeidaiImage />
      <Segment>
        <List horizontal celled relaxed>
          <List.Item content={'(1) Farmacia Ambrico'} />
          <List.Item
            as={Link}
            to={'https://facebook.com/laesquinaheladeria.aguasverdes/'}
            content={'(2) Heladeria La Esquina'}
          />
          <List.Item content={'(3) Mini Mercado Tony'} />
          <List.Item
            as={Link}
            to={'http://www.openplaya.com.ar/'}
            content={'(4) Balneario Restaurant Open Playa'}
          />
          <List.Item content={'(5) Bar de Playa Aqui Me Quedo'} />
          <List.Item
            as={Link}
            to={'hhttps://facebook.com/AguasverdesPescaymar/'}
            content={'(5) Casa De Pesca Abuela Choly'}
          />
          <List.Item content={'(6) Panaderia - Rotisería Alma Y Vida'} />
          <List.Item content={'(7) Panaderia - Despensa'} />
        </List>
      </Segment>
    </>
  );
};

export default KeidaiContent;
