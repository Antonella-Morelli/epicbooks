import React from 'react'
import SingleComment from './SingleComment'

function CommentList({ comments }) {
  return (
    <div  className='d-flex flex-wrap'>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList
