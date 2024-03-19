import {Container, Nav, Navbar} from 'react-bootstrap'

export default function Header () {
  return (
    // <div>
    //     <header>
    //         <nav className = "navbar navbar-expand-md navbar-dark bg-success">
    //             <div>
    //                 <a href = "https://javaguides.net" className = "navbar-brand">
    //                     Employee Management Application
    //                 </a>
    //             </div>
    //         </nav>
    //     </header>
    // </div>

      <header>
        <Navbar expand="lg" bg="primary">
          <Container>
            <Navbar.Brand href="" target="_blank">
              Employee Management
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
  )
}

