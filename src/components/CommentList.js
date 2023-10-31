import React from 'react'
import Comment from './Comment'

function CommentList({comments}) {
  return comments.map((comment,index)=>(
    <div key={index}>
           
             <Comment data={comment}/>
             <div className='pl-5 border  border-l-black ml-5'>
                <CommentList comments={comment.replies}/>
              {/* <Comment data={comment} />
              <Comment data={comment} />
              <Comment data={comment} /> */}
             </div>
      </div>
  ))
  
}

export default CommentList