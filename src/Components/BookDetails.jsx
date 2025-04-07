import React from 'react'
import { useParams } from 'react-router-dom'
import fantasyBooks from '../Generi/fantasy.json'
import Card from 'react-bootstrap/Card'
import CommentArea from './CommentArea'
import { Container } from 'react-bootstrap'

function BookDetails() {

    const { asin } = useParams()
    const book = fantasyBooks.find(book => book.asin === asin)

    return (
        <>
            <Container>
                <Card className='p-3 , my-5'
                    style={{
                        width: '18rem',
                        margin:'auto' , 
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                        backgroundColor: 'rgb(253, 236, 180)',
                    }}>
                    <Card.Img variant="top" src={book.img} alt={book.title} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text style={{ color: 'green', fontWeight: 'bold' }}>${book.price}</Card.Text>
                        <Card.Text className='fw-bold'>Genere {book.category}</Card.Text>
                    </Card.Body>
                </Card>

                <CommentArea asin={asin} />
            </Container>
        </>
    )
}

export default BookDetails
