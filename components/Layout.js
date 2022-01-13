import PropTypes from 'prop-types';
import styled from 'styled-components';
// styles
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <GlobalStyles />
      {children}
    </LayoutStyles>
  );
}

const LayoutStyles = styled.div`
  min-height: 100vh;
  width: 100%;
`;

Layout.propTypes = {
  children: PropTypes.any,
};
