import styled from 'react-emotion';

export default styled('div')`
  h2 {
    font-size: ${props => props.theme.typography.fontSizeHeadingMedium};
    font-weight: 600;
    color: ${props => props.theme.colors.navy600};
  }

  table {
    width: 100%;
    position: relative;
    border-radius: ${props => props.theme.layout.borderRadius};
    border: ${props => props.theme.colors.navy700};
    th {
      border-bottom: 2px solid ${props => props.theme.colors.grey300};
      padding: 8px;
      font-size: 14px;
      font-weight: 500;
      color: ${props => props.theme.colors.navy600};
      text-align: left;
    }
    td {
      border-bottom: 1px solid ${props => props.theme.colors.navy300};
      padding: 12px 8px;
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme.colors.navy600};
      pre {
        font-weight: 400;
        background-color: ${props => props.theme.colors.grey200};
        display: inline;
        font-size: 12px;
        padding: 4px 6px;
      }
    }
  }
`;
