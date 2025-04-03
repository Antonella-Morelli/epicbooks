import React, { useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import BookSingle from './BookSingle'
import CommentArea from './CommentArea'
import fantasyBooks from '../Generi/fantasy.json'

function AllTheBooks({ searchTerm }) {
  const [selectedBook, setSelectedBook] = useState(null)

  const handleBookClick = (asin) => {
    setSelectedBook(prevAsin => (prevAsin === asin ? null : asin))
  }

  const filteredBooks = fantasyBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <h3
        className="my-4 mx-5 text-center fw-bold"
        style={{
          backgroundColor: 'rgb(235, 217, 160)',
          color: 'rgb(77, 63, 5)',
          padding: '0.4em',
          borderRadius: '50px',
        }}
      >
        Libri Fantasy
      </h3>

      <Row className="g-4">
        <Col xs={12} sm={6} md={5} lg={4} className="overflow-auto">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.asin} onClick={() => handleBookClick(book.asin)}>
                <BookSingle 
                  book={book} 
                  isSelected={selectedBook === book.asin} 
                />
              </div>
            ))
          ) : (
            <p className="text-center">Nessun libro trovato.</p>
          )}
        </Col>

        <Col xs={12} sm={6} md={7} lg={8}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  )
}

export default AllTheBooks
