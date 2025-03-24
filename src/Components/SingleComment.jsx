import React from 'react'

function SingleComment({ comment }) {
  return (
    <div style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', padding: '10px' }}>
      <p><strong>{comment.comment}</strong></p>
      <p>Valutazione: {comment.rate} / 5</p>
    </div>
  )
}

export default SingleComment
