import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
    return (
        <Navbar expand="lg" className='nav'>
            <Container>
            <i class="fa-solid fa-book-open"style={{color:'rgb(90, 74, 1)' , fontSize:'25px' , marginRight:'1em'}}></i>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#browse">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;

