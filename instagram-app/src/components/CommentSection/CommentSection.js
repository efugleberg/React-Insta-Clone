import React from 'react';
import Comments from './Comments';

import './CommentSection.css';
import InsertComment from './InsertComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            insertComment: '',
            singleComment: props.singleComment,
            likes: props.likes
        }
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState({
            singleComment: [...this.state.singleComment,
            { username: 'ericf', text: this.state.insertComment }],
            insertComment: ''
        })
        }   

        handleChanges = e => {
            this.setState({[e.target.name]: e.target.value})
        }

    addLikes = () => {
        let likes = this.state.likes +1;
        this.setState({ likes: likes })
    }



    render () {
        
        return (
            <div className='comment-container'>
                <div className='emoticons'>
                    <button onClick={this.addLikes}>
                <i className="far fa-heart"></i>
                </button>
                <i className="far fa-comment"></i>
                    
                </div>
            <div className='likes'>
            <p><strong>{this.state.likes} likes</strong></p>
            
            </div>
            <div>
                {this.state.singleComment.map((comment, key) => (<Comments commentComment={comment} key={key}/>))}
            </div>

            <div>
                <InsertComment
                handleChanges={this.handleChanges}
                addNewComment={this.addNewComment}
                singleComment={this.state.singleComment}
                insertComment={this.state.insertComment} />

            </div>

            


            </div>



        )
    }
}

export default CommentSection;