import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom"

function BookSingle({ book, isSelected }) {

  const navigate = useNavigate()

  return (
    <Card
      data-testid="book-card"
      className="mb-3"
      style={{
        maxWidth: '18rem',
        borderRadius: '30px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgb(253, 236, 180)',
        border: isSelected ? '3px solid red' : 'none',
      }}
    >
      <Card.Img
        variant="top"
        src={book.img}
        style={{ height: '200px', objectFit: 'cover', borderRadius: '30px' , padding: '0.5em'}}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text style={{ color: 'green', fontWeight: 'bold' }}>${book.price}</Card.Text>
        <Button variant="outline-dark" size="sm">
          {isSelected ? 'Selezionato' : 'Seleziona'}
        </Button>
        <Button variant="outline-dark" size="sm" className=' d-block , my-2' onClick={() => navigate(`/book/${book.asin}`)}>
          Dettagli
        </Button>
      </Card.Body>
    </Card>
  )
}

export default BookSingle

