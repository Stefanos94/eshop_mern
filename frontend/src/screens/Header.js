import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Navbar.Brand>Eshop</Navbar.Brand>
            </LinkContainer>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
