import React from 'react'

function SingleComment({ comment }) {
  return (
    <div data-testid="single-comment" style={{ marginBottom: '10px', border: '1px solid black', padding: '10px' }}>
      <p><strong>{comment.comment}</strong></p>
      <p>Valutazione: {comment.rate} / 5</p>
    </div>
  )
}

export default SingleComment
