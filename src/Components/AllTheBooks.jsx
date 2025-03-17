import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row, Container } from 'react-bootstrap';
import fantasyBooks from '../Generi/fantasy.json';

function AllTheBooks() {
    return (
        <Container>
            <h3 className="my-4 mx-5 text-center" style={{backgroundColor: 'rgb(253, 236, 180)', color: 'rgb(90, 74, 1)' , padding:'0.4em', borderRadius: '50px'}}>Libri Fantasy</h3>
            <Row
                xs={1} sm={2} md={3} lg={4} xl={5}
                className="g-4 justify-content-center"
            >
                {fantasyBooks.map((book) => (
                    <Col key={book.asin} className="d-flex justify-content-center">
                        <Card className="h-100"
                            style={{
                                width: '18rem',
                                borderRadius: '30px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                                backgroundColor: 'rgb(253, 236, 180)',
                            }}>
                            <Card.Img
                                variant="top"
                                src={book.img}
                                style={{ height: '200px', objectFit: 'cover', borderRadius: '30px' }}
                            />
                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Card.Title style={{ flexGrow: 1, marginBottom: '0.5rem', fontSize: '1em' }}>{book.title}</Card.Title>
                                <Card.Text style={{ marginBottom: '0.5rem', color: 'green', fontWeight: 'bold' }}>${book.price}</Card.Text>
                                <Button variant="outline-dark" size='sm'>Aggiungi al Carrello</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllTheBooks;
