import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';


const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About</h2>
      <p>Hamsters are rare animals</p>
      <p>Need a hamster? <Link to="/contact">Contact hamster</Link></p>
    </Layout>
  )
}

export default AboutPage;
