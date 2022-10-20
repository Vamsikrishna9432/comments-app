import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onchangeName = event => {
    this.setState({name: event.target.value})
  }

  onchangeComment = event => {
    this.setState({comment: event.target.value})
  }

  updateCommentList = event => {
    const {name, comment} = this.state
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  likeUpdate = id => {
    const {commentsList} = this.state
    console.log(commentsList)
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="bg-container">
        <div className="content">
          <h1 className="heading">Comments</h1>
          <div className="input-top-part">
            <div className="input-container">
              <p className="para">Say something about 4.0 Technologies</p>
              <form className="comment-form" onSubmit={this.updateCommentList}>
                <input
                  className="name-box"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.onchangeName}
                />
                <textarea
                  placeholder="Your Comment"
                  value={comment}
                  className="comment-box"
                  rows="8"
                  cols="26"
                  onChange={this.onchangeComment}
                />
                <button className="btn" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              className="image"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
          <hr className="top-bottom" />
          <p className="comment">
            <span className="com-num">{commentsList.length}</span> Comments
          </p>
          <ul className="final-comments-container">
            {commentsList.map(each => (
              <CommentItem
                commentDetails={each}
                key={each.id}
                likeUpdate={this.likeUpdate}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
