import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return ( 
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/">Breaking</Nav.Link>
            <Nav.Link as={Link} href="/search">Search</Nav.Link>
            <NavDropdown title="Categories" id="categories-breakdown">
              <NavDropdown.Item as={Link} href="/categories/business">Business</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/news">News</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/sport">Sport</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/tech">Tech</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/world">World</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/finance">finance</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/politics">politics</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/economics">economics</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/beauty">beauty</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/entertainment">entertainment</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/travel">travel</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/music">music</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/food">food</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/science">science</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/gaming">gaming</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/energy">energy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
}
 
export default NavBar;