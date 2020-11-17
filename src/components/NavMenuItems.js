import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';

function NavMenuItems() {
  return (
    <>
      <Menu.Item as={Link} to={'/yomeiri'} content={'Lluvia Soleada'} />
      <Menu.Item
        as={Link}
        to={'/tenjinzo'}
        content={'Gran Estatua de Tenjin'}
      />
      <Menu.Item as={Link} to={'/saireiichi'} content={'Ciudad Festival'} />
      <Menu.Item as={Link} to={'/kitou'} content={'Yu reza'} />
      <Menu.Item as={Link} to={'/wedding'} content={'Boda'} />
      <Menu.Item as={Link} to={'/omamori'} content={'Guardian'} />
      <Menu.Item as={Link} to={'/keidai'} content={'Territorio'} />
      <Menu.Item as={Link} to={'/annual-events'} content={'Evento'} />
    </>
  );
}

export default NavMenuItems;
