import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import Markdown from '../components/markdown';

const StyledDocHeader = styled('header')`
  padding: 16px 0;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};

  h1 {
    font-size: ${props => props.theme.typography.fontSizeHeadingLarge};
    font-weight: 500;
    margin: 0 0 8px;
    padding: 0;
    color: ${props => props.theme.colors.navy700};
  }
`;

export default ({data}) => {
  const {markdownRemark: post} = data;

  return (
    <article>
      <StyledDocHeader>
        <h1>{post.frontmatter.title}</h1>
      </StyledDocHeader>
      <Markdown dangerouslySetInnerHTML={{__html: post.html}} />
    </article>
  );
};

export const pageQuery = graphql`
  query DocumentationPostByPath($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
