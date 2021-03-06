import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import icon from '../images/planet.png';

const MainHeader = () => (
  <Navbar bg="light" variant="light" expand="md">
    <Container>
      <LinkContainer to="/" style={{ cursor: 'pointer' }}>
        <figure className="d-flex align-items-center gap-2">
          <Image src={icon} width="40px" />
          <h1>Space Traveller</h1>
        </figure>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/" style={{ cursor: 'pointer' }}>
            <span className="nav-link fs-5">Rockets</span>
          </LinkContainer>
          <LinkContainer to="/missions" style={{ cursor: 'pointer' }}>
            <span className="nav-link fs-5">Missions</span>
          </LinkContainer>
          <LinkContainer to="/profile" style={{ cursor: 'pointer' }}>
            <span className="nav-link fs-5">My Profile</span>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainHeader;
