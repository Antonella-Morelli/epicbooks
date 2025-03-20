import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function BookSingle({ book }) {
    return (
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
    )
}

export default BookSingle
