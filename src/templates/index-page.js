import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import {
  Card,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';
import Media from 'react-media';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/Layout';
import KeidaiContent from '../components/KeidaiContent';
import SocialButtons from '../components/SocialButtons';
// import FacebookTimeline from '../components/FacebookTimeline';
import GoogleMap from '../components/GoogleMap';
// import miyamadosan from '../img/miyamadosan.svg';

export function IndexPageTemplate({ image, description, relatedLinks }) {
  const backgroundImageUrl = image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image;

  return (
    <>
      <Media query={{ maxWidth: 991 }}>
        {(matches) => (
          <Link
            to={'/honden'}
            style={{
              alignItems: 'center',
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              display: 'flex',
              justifyContent: 'center',
              width: '100vw',
              height: matches ? '600px' : '900px',
            }}
          />
        )}
      </Media>
      <Container style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Segment padded="very" vertical>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.7' }}>
              {description}
            </p>
          </Segment>
          {/* <div id="Facebook-timeline" /> */}
          {/*
          <Segment padded="very" vertical clearing>
            <Header as="h2">Historia</Header>
            <p style={{ fontSize: '1.33em' }}>
              Nuestra compañía
              <OutboundLink href="https://es.wikipedia.org/wiki/Santuario_de_Tamukeyama_Hachiman-gu">
                Santuario Susaki Hamamiya Shinmei
              </OutboundLink>
              Se llama Kaizan-do Kaiun Inari Shrine en el recinto del santuario,
              y es realmente precioso que los recintos sean más prominentes,
              siendo el primer santuario el Naiku de Ise y el último el
              santuario exterior.
            </p>
            <Image src={miyamadosan} size="medium" floated="left" />
            <p style={{ fontSize: '1.33em' }}>
              Popularmente "Miyamado-san"（総称Santuario de Kaishan Road）Se
              llama Fushimi Inari Sosha de Iseji, y recibe el apodo del topónimo
              de esta tierra en honor a los dioses superiores. Hace mucho
              tiempo, tal como era el bosque, que dijo Nishiyuki: "Si te paras
              ayer y hoy, puedes ver el bosque de Hienaga Susaki", siento que la
              piedad misma se te acerca. Además, en el período Edo, la cresta
              Aoi fue permitida por la ardiente reverencia de la familia
              Tokugawa, y fue adorada por Kobe Hou y el fiscal de Mizutani
              (Kusaemon Mizutani), etc. Voy a.
            </p>
          </Segment>
          */}
          <Segment padded="very" vertical>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image src={'img/shinmeisha.jpg'} size="large" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h2">Santuario Susaki Hamamiya Shinmei</Header>
                  <List
                    style={{ fontSize: '1.33em' }}
                    items={[
                      'Lleno de vida',
                      'Amaterasu Daiyujin',
                      'Fang Gen God',
                      'Emperador Nito',
                      'Ken Hayashi Susano Omei',
                      'El Dios del alma real de Yuga',
                      'La montaña está muerta',
                      'Fuego Kagutu Dios',
                      'Sugabara Michiko',
                      'Dios de la producción de fuego 霊',
                      'Dios de la conservación de los alimentos',
                      'La vida de los niños japoneses',
                    ]}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment padded="very" vertical>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image src={'img/torii-2875-1.jpg'} size="large" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h2">Kaizan Road Kaiun Inari Shrine</Header>
                  <List
                    style={{ fontSize: '1.33em' }}
                    items={[
                      'Kuraina Tamashii',
                      'Takashi Omi (Mikoto Onamuchi)',
                      'Ota no Kami',
                      'Reservoir God',
                      'Omiya Nomekami',
                    ]}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment padded="very" vertical>
            <Media query={{ maxWidth: 599 }}>
              {(matches) => (
                <Card.Group
                  centered
                  items={[
                    {
                      header: 'Estatua de Daitenjin (Michizane Sugawara)',
                      meta: 'El más grande de Japón',
                      image: 'img/tenjinzo.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/tenjinzo',
                    },
                    {
                      header: 'Ritual sintoísta del matrimonio kitsune',
                      meta: 'Día de liquidación',
                      image: 'img/setsubun-101.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/yomeiri',
                    },
                    {
                      header: 'Mercado del festival (mercado de Sakuhi)',
                      meta: '1 de cada mes',
                      image: '/img/saireiichi-3073.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/saireiichi',
                    },
                  ]}
                />
              )}
            </Media>
          </Segment>

          <Segment padded="very" vertical>
            <Header as="h2">Negocios cercanos</Header>
            <KeidaiContent />
          </Segment>

          <Segment padded="very" vertical>
            <Header as="h2">Mapa</Header>
            <GoogleMap />

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://www.kintetsu.co.jp/railway/rosen/A50006.html">
                  Tren Kintetsu
                </OutboundLink>
                Para todos los que pasas
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E8%BF%91%E9%89%84%E5%90%8D%E5%8F%A4%E5%B1%8B%E7%B7%9A">
                Línea Kintetsu Nagoya
              </OutboundLink>{' '}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B5%B7%ÏE5%B1%B1%E9%81%93%E9%A7%85">
                Estación Kaisan Road
              </OutboundLink>
              Inmediatamente después de bajarse
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B5%B7%E5%B1%B1%E9%81%93%E9%A7%85#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:KINTETSU_MIYAMADO_STA.JPG">
                Cambiar la exportación de Zashi
              </OutboundLink>
              30 segundos a pie
            </Segment>

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://ja.wikipedia.org/wiki/%E4%BC%8A%E5%8B%A2%E6%B9%BE%E5%B2%B8%E8%87%AA%E5%8B%95%E8%BB%8A%E9%81%93">
                  Autopista del Golfo de Ise
                </OutboundLink>
                Para todos los que pasas
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%88%E5%B7%9D%E8%B6%8A%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%81%E3%82%A7%E3%83%B3%E3%82%B8">
                Intercambio Mie Kawagoe
              </OutboundLink>
              bajate
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%81%9323%E5%8F%B7">
                Carretera Nacional No. 23
              </OutboundLink>
              Desde Tianjin 20 puntos
            </Segment>

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%90%8D%E9%98%AA%E5%9B%BD%E9%81%93">
                  Carretera Nacional Meihan
                </OutboundLink>
                Para todos los que pasas
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E4%BA%80%E5%B1%B1%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%81%E3%82%A7%E3%83%B3%E3%82%B8">
                Intercambio de Kameyama
              </OutboundLink>
              bajate
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%81%931%E5%8F%B7">
                Carretera nacional No. 1
              </OutboundLink>
              30 minutos hacia Yokkaichi
            </Segment>
          </Segment>

          {/* For mobile, show the Facebook here */}

          <Media
            query="(max-width: 991px)"
            render={() => (
              <>
                {/*
								<Segment padded="very" vertical>
									<Grid centered columns={2}>
										<div>
											<FacebookTimeline title="FacebookTimeline-mobile" />
										</div>
									</Grid>
                </Segment>
                */}
                <Segment vertical textAlign="center">
                  <SocialButtons />
                </Segment>
              </>
            )}
          />

          {relatedLinks.length > 0 && (
            <Segment padded="very" vertical>
              <Header as="h2">Enlace</Header>
              <List>
                {relatedLinks.map((relatedLink, i) => (
                  <List.Item key={i}>
                    <OutboundLink href={relatedLink.href}>
                      {relatedLink.title}
                    </OutboundLink>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </div>

        {/* For desktop, show the Facebook sidebar. */}
        {/*
        <Media
          query="(min-width: 992px)"
          render={() => (
            <div style={{ marginLeft: '1rem' }}>
              <FacebookTimeline title="FacebookTimeline-desktop" />
            </div>
          )}
        />
        */}
      </Container>
    </>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  relatedLinks: PropTypes.array,
};

function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        relatedLinks={frontmatter.relatedLinks}
      />
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        relatedLinks {
          title
          href
        }
      }
    }
  }
`;
