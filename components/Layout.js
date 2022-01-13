import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Layout({ children }) {
  return <LayoutStyles>{children}</LayoutStyles>;
}

const LayoutStyles = styled.div`
  min-height: 100vh;
  width: 100%;
`;

Layout.propTypes = {
  children: PropTypes.any,
};
