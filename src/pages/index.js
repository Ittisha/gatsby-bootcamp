import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>Hamsters are cool!</h2>
      <p>Need a hamster? <a href="/contact">Contact hamster</a></p>
      <p>Need a hamster? <Link to="/contact">Contact hamster</Link></p>
    </Layout>
  )
}

export default IndexPage;
