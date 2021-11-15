import styled from 'styled-components';

export default function Layout({ children }) {
  return <LayoutStyles>{children}</LayoutStyles>;
}

const LayoutStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/images/layered-waves.svg');
`;
