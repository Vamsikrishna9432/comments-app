// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, date} = commentDetails

  const updateLike = () => {
    const {likeUpdate} = props
    likeUpdate(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  const commenttime = formatDistanceToNow(date)
  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-item">
      <div className="name-con">
        <p className="letter">{name.slice(0, 1)}</p>
        <div className="con">
          <div className="na">
            <p className="name">{name}</p>
            <p className="time">{commenttime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>

      <div className="btn-container">
        <button className="fi" type="button" onClick={updateLike}>
          {' '}
          <img className="like-image" alt="like" src={likedImage} />
        </button>
        <button
          className="fi"
          type="button"
          onClick={onDeleteComment}
          testid="delete"
        >
          <img
            className="delete-image"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <div>
        <hr className="top-bottom" />
      </div>
    </li>
  )
}

export default CommentItem
