import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I&apos;m making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/elephant.jpg"
      />
    </Layout>
  );
}

export default IndexPage;
