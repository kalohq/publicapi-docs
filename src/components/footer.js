import React from 'react';
import styled from 'react-emotion';

const StyledFooter = styled('footer')`
  width: 100%;
  padding: 8px 0;
  border-top: 1px solid ${props => props.theme.colors.grey300};
  margin-top: 32px;
  font-size: 14px;
  color: ${props => props.theme.colors.navy500};
  font-weight: 400;
`;

export default () => (
  <StyledFooter>&copy; 2018 - Kalo Industries, Inc.</StyledFooter>
);
