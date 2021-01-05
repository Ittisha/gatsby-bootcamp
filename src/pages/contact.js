import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact</h2>
      <p>Some phone</p>
      <p>Some email</p>
      <p>Need some news? <a href="https://tut.by" target="_blank" rel="noreferrer">News</a></p>
    </Layout>
  )
}

export default ContactPage;
