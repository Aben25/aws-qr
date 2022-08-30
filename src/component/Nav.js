import { Image, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavB() {
  return (
    <Navbar>
      <Container className="navbar navbar-inverse navbar-fixed-top navbar-fixed-bottom">
        <Navbar.Brand href="/">
          <img src="./Artba-logo.png" width={300} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-3">
            <Nav.Link href="/">Event</Nav.Link>
            <Nav.Link href="https://novi-check-in.s3.us-east-1.amazonaws.com/index.html">
              Check-in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
