import React from 'react'
import { useParams } from 'react-router-dom'
import fantasyBooks from '../Generi/fantasy.json'
import Card from 'react-bootstrap/Card'

function BookDetails() {

    const { asin } = useParams()
    const book = fantasyBooks.find(book => book.asin === asin)

    return (
        <Card style={{
            width: '18rem',
            margin: 'auto',
            padding: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            backgroundColor: 'rgb(253, 236, 180)',
            marginTop: '2em'
        }}>
            <Card.Img variant="top" src={book.img} alt={book.title} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text><strong>Prezzo:</strong> ${book.price}</Card.Text>
                <Card.Text><strong>Categoria:</strong> {book.category}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookDetails
