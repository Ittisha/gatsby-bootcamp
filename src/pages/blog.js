import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMM Do, YYYY")
            slug
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Blog" />
      <h2>Hamster's blog</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => (
          <li className={blogStyles.post} key={edge.node.title}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage;
