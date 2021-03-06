import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from 'semantic-ui-react';
import Media from 'react-media';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import BackToTopLink from './BackToTopLink';
import useSiteMetadata from './useSiteMetadata';
import LogoLink from './LogoLink';
import gatsbyLogo from '../img/gatsby.svg';

function AppFooter() {
  const { title, email, phone, phoneHref, address, gmap } = useSiteMetadata();
  return (
    <>
      <Segment vertical padded="very" style={{ background: '#f5f6f7' }}>
        <Container>
          <Header as="h2">Consultas</Header>
          <Media query={{ maxWidth: 991 }}>
            {(matches) => {
              return matches ? (
                <Button.Group fluid>
                  <Button
                    basic
                    color="blue"
                    as="a"
                    href={`mailto:${email}?subject=Consultas del sitio web`}
                  >
                    <Icon name="mail" />
                    Email{' '}
                  </Button>
                  <Button basic color="teal" as="a" href={`tel:${phoneHref}`}>
                    <Icon name="phone" /> Llamar
                  </Button>
                </Button.Group>
              ) : (
                <List horizontal divided>
                  <List.Item>
                    <strong>Telefono</strong>: {phone}
                  </List.Item>
                  <List.Item>
                    <strong>Email</strong>: {email}
                  </List.Item>
                </List>
              );
            }}
          </Media>
        </Container>
      </Segment>

      <Segment as="footer" inverted vertical style={{ padding: '5rem 0' }}>
        <span
          style={{
            position: 'absolute',
            bottom: '5rem',
            right: '1rem',
            zIndex: 2,
          }}
        >
          <BackToTopLink />
        </span>
        <Container>
          <Grid columns="equal" inverted stackable>
            <Grid.Row>
              <Grid.Column>
                <LogoLink width="300px" />
              </Grid.Column>
              <Grid.Column>
                <List as="address" link inverted>
                  <List.Item>
                    Direccion:{' '}
                    <OutboundLink href={gmap}>{address}</OutboundLink>
                  </List.Item>
                  <List.Item>
                    Telefono: <a href={`tel:${phoneHref}`}>{phone}</a>
                  </List.Item>
                  <List.Item>
                    Email: <a href={`mailto:${email}`}>{email}</a>
                  </List.Item>
                  <Divider hidden />
                  <List.Item>
                    <List as="address" link inverted>
                      <List.Item
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <div>
                          © {new Date().getFullYear()} {title}
                        </div>
                        <div style={{ marginLeft: '1.5rem' }}>
                          <span
                            style={{
                              marginRight: '0.4rem',
                              verticalAlign: 'top',
                            }}
                          >
                            Built with
                          </span>
                          <OutboundLink href="https://www.gatsbyjs.org/showcase/">
                            <img
                              src={gatsbyLogo}
                              alt="GatsbyJS"
                              height="16px"
                            />
                          </OutboundLink>
                        </div>
                      </List.Item>
                      <List.Item>
                        Sitio antiguo:{' '}
                        <OutboundLink href={'http://www.miyamado-jinja.com'}>
                          http://www.miyamado-jinja.com
                        </OutboundLink>
                      </List.Item>
                    </List>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
}

export default AppFooter;
