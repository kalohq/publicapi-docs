import React from 'react';
import Helmet from 'react-helmet';
import {ThemeProvider} from 'emotion-theming';
import {theme} from '@kalo/ui';
import styled, {injectGlobal} from 'react-emotion';

import Aside from '../components/aside';
import Footer from '../components/footer';

import FSPBlond from '../assets/fonts/FaktSoftPro-Blond.woff';
import FSPBlond2 from '../assets/fonts/FaktSoftPro-Blond.woff2';
import FSPNormal from '../assets/fonts/FaktSoftPro-Normal.woff';
import FSPNormal2 from '../assets/fonts/FaktSoftPro-Normal.woff2';
import FSPMedium from '../assets/fonts/FaktSoftPro-Medium.woff';
import FSPMedium2 from '../assets/fonts/FaktSoftPro-Medium.woff2';
import FSPSemiBold from '../assets/fonts/FaktSoftPro-SemiBold.woff';
import FSPSemiBold2 from '../assets/fonts/FaktSoftPro-SemiBold.woff2';

const StyledFlexContainer = styled('div')`
  width: 100%;
  display: flex;
`;

const Main = styled('main')`
  position: relative;
  width: 100%;
  max-width: 920px;
  padding: 40px;
`;

injectGlobal`
  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 300;
    font-style: normal;
    src: url(${FSPBlond}) format('woff'),
      url(${FSPBlond2}) format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 400;
    font-style: normal;
    src: url(${FSPNormal}) format('woff'),
    url(${FSPNormal2}) format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 500;
    font-style: normal;
    src: url(${FSPMedium}) format('woff'),
    url(${FSPMedium2}) format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 600;
    font-style: normal;
    src: url(${FSPSemiBold}) format('woff'),
    url(${FSPSemiBold2}) format('woff2');
  }

  html,
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'WebFaktSoftPro', sans-serif;
    color: #546789;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
      'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
      'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
      'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    tab-size: 4;
    -ms-hyphens: none;
    hyphens: none;
    background-color: #f4f7fd;
    color: #586e75;
    border-radius: 4px;
  }
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #eee8d5;
  }
  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #eee8d5;
  }
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #839496;
  }
  .token.punctuation {
    color: #586e75;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.operator,
  .token.boolean,
  .token.number {
    color: #cb4b16;
  }
  .token.property {
    color: #b58900;
  }
  .token.tag {
    color: #268bd2;
  }
  .token.string {
    color: #2aa198;
  }
  .token.selector {
    color: #6c71c4;
  }
  .token.attr-name {
    color: #cb4b16;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #2aa198;
  }
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #859900;
  }
  .token.statement,
  .token.regex,
  .token.atrule {
    color: #2aa198;
  }
  .token.placeholder,
  .token.variable {
    color: #268bd2;
  }
  .token.deleted {
    text-decoration: line-through;
  }
  .token.inserted {
    border-bottom: 1px dotted #002b36;
    text-decoration: none;
  }
  .token.italic {
    font-style: italic;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.important {
    color: #dc322f;
  }
  .token.entity {
    cursor: help;
  }
  pre > code.highlight {
    outline: 0.4em solid #dc322f;
    outline-offset: 0.4em;
  }`;

const TemplateWrapper = ({children, data}) => {
  const {allMarkdownRemark: pages} = data;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <StyledFlexContainer>
          <Aside pages={pages} />
          <Main>
            {children()} <Footer />
          </Main>
        </StyledFlexContainer>
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query AllPagesQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
