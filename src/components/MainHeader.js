import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import icon from '../images/planet.png';

const MainHeader = () => (
  <Navbar bg="light" variant="light">
    <Container>
      <LinkContainer to="/" style={{ cursor: 'pointer' }}>
        <figure className="d-flex align-items-center gap-2">
          <Image src={icon} width="40px" />
          <h1>Space Traveller</h1>
        </figure>
      </LinkContainer>

      <Nav className="ms-auto">
        <LinkContainer to="/" className="mx-3" style={{ cursor: 'pointer' }}>
          <span className="nav-link fs-5">Rockets</span>
        </LinkContainer>
        <LinkContainer to="/missions" style={{ cursor: 'pointer' }}>
          <span className="nav-link fs-5">Missions</span>
        </LinkContainer>
      </Nav>
    </Container>
  </Navbar>
);

export default MainHeader;
