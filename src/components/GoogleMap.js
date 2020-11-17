import React from 'react';

export const GoogleMap = ({ title, ...rest }) => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.3510051657406!2d-56.68371409635594!3d-36.64072990967996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c6c3a46ffa55b%3A0x6e77f1c3fd2a27d3!2sEl%20Pinar%20Del%20Mar!5e0!3m2!1ses-419!2sar!4v1605590905693!5m2!1ses-419!2sar"
    width="100%"
    height="450"
    frameBorder="0"
    allowFullScreen=""
    title={title}
    {...rest}
  />
);

export default GoogleMap;
