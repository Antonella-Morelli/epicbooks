import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { InputGroup, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNav({ searchTerm, setSearchTerm }) {
    function searchBooks(event) {
        setSearchTerm(event.target.value.toLowerCase())
    }

    return (
        <Navbar expand="lg" className="nav">
            <Container>
                <i
                    className="fa-solid fa-book-open"
                    style={{ color: 'rgb(90, 74, 1)', fontSize: '25px', marginRight: '1em' }}
                ></i>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fw-bold">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>

                    <InputGroup className="float-center mb-3" style={{ maxWidth: '300px' }}>
                        <Form.Control
                            type="text"
                            onChange={searchBooks}
                            placeholder="Cerca un libro qui.."
                            style={{ backgroundColor: 'rgb(241, 226, 174)' }}
                        />
                    </InputGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav

