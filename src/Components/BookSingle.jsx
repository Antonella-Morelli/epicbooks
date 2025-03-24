import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CommentArea from './CommentArea'

function BookSingle({ book, isSelected, setSelectedBook }) {
  return (
    <>
      <Card
        onClick={() => setSelectedBook(isSelected ? null : book.asin)}
        className="h-100"
        style={{
          width: '18rem',
          borderRadius: '30px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          backgroundColor: 'rgb(253, 236, 180)',
          border: isSelected ? '3px solid red' : 'none',
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          style={{ height: '200px', objectFit: 'cover', borderRadius: '30px' }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text style={{ color: 'green', fontWeight: 'bold' }}>${book.price}</Card.Text>
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => setSelectedBook(isSelected ? null : book.asin)}
          >
            {isSelected ? 'Nascondi commenti' : 'Mostra commenti'}
          </Button>
        </Card.Body>
      </Card>

      {isSelected && <CommentArea asin={book.asin} />}
    </>
  )
}

export default BookSingle
