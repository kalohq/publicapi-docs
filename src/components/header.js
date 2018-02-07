import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const StyledHeader = styled('header')`
  position: relative;
  top: 0;
  height: 52px;
  background-color: ${props => props.theme.colors.navy700};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeaderLogo = styled('span')`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled('div')`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <StyledHeaderLogo>
        <Link to="/">Kalo API Documentation</Link>
      </StyledHeaderLogo>
    </Wrapper>
  </StyledHeader>
);

export default Header;
