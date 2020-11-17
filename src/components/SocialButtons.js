import React from 'react';
import { Button } from 'semantic-ui-react';

import useSiteMetadata from './useSiteMetadata';

export default function SocialButtons() {
  const { phoneHref, instagram, twitter, facebook, email } = useSiteMetadata();

  return (
    <>
      <Button
        circular
        size="large"
        icon="whatsapp"
        color="green"
        as="a"
        href={`https://wa.me/${phoneHref}`}
        target="_blank"
        rel="noopener noreferrer"
      />
      <span style={{ marginLeft: '1rem' }}></span>
      <Button
        circular
        size="large"
        icon="instagram"
        color="purple"
        as="a"
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
      />
      <span style={{ marginLeft: '1rem' }}></span>
      <Button
        circular
        size="large"
        icon="twitter"
        color="light blue"
        as="a"
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
      />
      <span style={{ marginLeft: '1rem' }}></span>
      <Button
        circular
        size="large"
        icon="facebook"
        color="facebook"
        as="a"
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
      />
      <span style={{ marginLeft: '1rem' }}></span>
      <Button
        circular
        size="large"
        icon="envelope"
        color="red"
        as="a"
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
      />
    </>
  );
}
