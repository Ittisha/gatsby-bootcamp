import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from '../components/layout';
import Head from '../components/head';

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields:{ slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          title
          file {
            url
            contentType
          }
        }
      }
    }
  }
`;

const Blog = (props) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node);
        const image = props.data.contentfulBlogPost.body.references
          .find((item) => {
            return item.file.contentType.includes('image') && item.contentful_id === node.data.target.sys.id
          });
        return <img alt={image.title} src={image.file.url}/>;
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
    </Layout>
  )
}

export default Blog;
