//   import React, { useState } from 'react'
//   import Button from 'react-bootstrap/Button'
//   import Card from 'react-bootstrap/Card'
//   import { Col, Row, Container, InputGroup, Form } from 'react-bootstrap'
//   import fantasyBooks from '../Generi/fantasy.json'

//   function AllTheBooks() {
//       const [searchTerm, setSearchTerm] = useState('')

//       function searchBooks(event) {
//           setSearchTerm(event.target.value.toLowerCase())
//       }

//       const filteredBooks = fantasyBooks.filter(book =>
//           book.title.toLowerCase().includes(searchTerm)
//       )

//       return (
//           <Container>
//               <h3 className="my-4 mx-5 text-center " style={{ backgroundColor: 'rgb(253, 236, 180)', color: 'rgb(90, 74, 1)', padding: '0.4em', borderRadius: '50px' }}>
//                   Libri Fantasy
//               </h3>

//               <InputGroup className='float-center mb-3 ' style={{ maxWidth: '300px' }}>
//                   <Form.Control
//                       type="text"
//                       onChange={searchBooks}
//                       placeholder='Cerca un libro qui..'
//                   />
//               </InputGroup>


//               <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 justify-content-center">
//                   {filteredBooks.length > 0 ? (
//                       filteredBooks.map((book) => (
//                           <Col key={book.asin} className="d-flex justify-content-center">
//                               <Card className="h-100"
//                                   style={{
//                                       width: '18rem',
//                                       borderRadius: '30px',
//                                       boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
//                                       backgroundColor: 'rgb(253, 236, 180)',
//                                   }}>
//                                   <Card.Img
//                                       variant="top"
//                                       src={book.img}
//                                       style={{ height: '200px', objectFit: 'cover', borderRadius: '30px' }}
//                                   />
//                                   <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                                       <Card.Title style={{ flexGrow: 1, marginBottom: '0.5rem', fontSize: '1em' }}>{book.title}</Card.Title>
//                                       <Card.Text style={{ marginBottom: '0.5rem', color: 'green', fontWeight: 'bold' }}>${book.price}</Card.Text>
//                                       <Button variant="outline-dark" size='sm'>Aggiungi al Carrello</Button>
//                                   </Card.Body>
//                               </Card>
//                           </Col>
//                       ))
//                   ) : (
//                       <p className="text-center">Nessun libro trovato.</p>
//                   )}
//               </Row>
//           </Container>
//       )
//   }

//   export default AllTheBooks

import React, { useState } from 'react'
import { Col, Row, Container, InputGroup, Form } from 'react-bootstrap'
import BookSingle from './BookSingle'
import fantasyBooks from '../Generi/fantasy.json'

function AllTheBooks() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedBook, setSelectedBook] = useState(null)

    function searchBooks(event) {
        setSearchTerm(event.target.value.toLowerCase())
    }

    const filteredBooks = fantasyBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
    )

    return (
        <Container>
            <h3 className="my-4 mx-5 text-center fw-bold" style={{ backgroundColor: 'rgb(235, 217, 160)', color: 'rgb(77, 63, 5)', padding: '0.4em', borderRadius: '50px' }}>
                Libri Fantasy
            </h3>

            <InputGroup className="float-center mb-3" style={{ maxWidth: '300px'  }}>
                <Form.Control
                    type="text"
                    onChange={searchBooks}
                    placeholder="Cerca un libro qui.."
                    style={{ backgroundColor: 'rgb(241, 226, 174)'}}
                    
                />
            </InputGroup>

            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 justify-content-center">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <Col key={book.asin} className="d-flex justify-content-center">
                            <BookSingle 
                                book={book} 
                                isSelected={selectedBook === book.asin} 
                                setSelectedBook={setSelectedBook} 
                            />
                        </Col>
                    ))
                ) : (
                    <p className="text-center">Nessun libro trovato.</p>
                )}
            </Row>
        </Container>
    )
}

export default AllTheBooks

