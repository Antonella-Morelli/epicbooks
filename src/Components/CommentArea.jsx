import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkYmMzZjFlMTQwNjAwMTUzMTRjOTUiLCJpYXQiOjE3NDI1Njg4ODUsImV4cCI6MTc0Mzc3ODQ4NX0.NOk294i8gPHgQbXkZT6-oUT9l54C8BoPx0Sj-zId2H0'

function CommentArea({ asin }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    
    if (!asin) {
      setComments([])
      setLoading(false)
      setError(null)
      return
    }
    
    const fetchComments = async () => {
      try {
        const url = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const data = await response.json()
        setComments(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (asin) fetchComments()
  }, [asin])

  

  return (
    <div data-testid="comment-area" className="comment-area" style={{ marginTop: '10px', padding: '10px', border: '1px solid gray', borderRadius: '10px' , backgroundColor: 'rgb(253, 236, 180)' }}>
      {loading && <p>Seleziona un libro per vedere o aggiungere commenti</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && <CommentList comments={comments} />}
      <AddComment asin={asin} setComments={setComments} /> 
    </div>
  )
}

export default CommentArea

