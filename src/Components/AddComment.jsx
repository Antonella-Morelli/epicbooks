import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkYmMzZjFlMTQwNjAwMTUzMTRjOTUiLCJpYXQiOjE3NDI1Njg4ODUsImV4cCI6MTc0Mzc3ODQ4NX0.NOk294i8gPHgQbXkZT6-oUT9l54C8BoPx0Sj-zId2H0'

function AddComment({ asin, setComments }) {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit = async () => {
    if (!comment || !rating) return alert('Compila tutti i campi!')

    const newComment = {
      comment,
      rate: rating,
      elementId: asin,
    }

    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      })

      alert('Commento aggiunto con successo!')
      setComment('')
      setRating('')

      const responseComments = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await responseComments.json()
      setComments(data)
    } catch (error) {
      console.error('Errore:', error)
    }
  }

  return (
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid black', borderRadius: '10px', backgroundColor :'rgb(253, 236, 180)' }}>
      <h6>Aggiungi un commento</h6>

      <InputGroup className="mb-3" > 
        <Form.Control
          placeholder="Scrivi un commento"
          aria-label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          
        />
      </InputGroup>

      <Form.Select value={rating} onChange={(e) => setRating(e.target.value)} >
        <option value="">Aggiungi una valutazione</option>
        <option value="1">1 - Scarso</option>
        <option value="2">2 - Mediocre</option>
        <option value="3">3 - Accettabile</option>
        <option value="4">4 - Buono</option>
        <option value="5">5 - Eccellente</option>
      </Form.Select>

      <Button variant="outline-dark" className="mt-2" onClick={handleSubmit}>Conferma</Button>
    </div>
  )
}

export default AddComment
