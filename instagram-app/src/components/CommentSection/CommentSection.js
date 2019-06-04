import React from 'react';
import Comments from './Comments';

import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleComment: props.singleComment,
            input: '',
            likes: props.likes
        }
    }

    // addLikes = () => {
    //     let likes = this.state.likes +1;
    //     this.setState({ likes: likes })
    // }



    render () {
        
        return (
            <div className='comment-container'>
                <div className='emoticons'>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                    
                </div>
            <div className='likes'>
            <p><strong>{this.state.likes} likes</strong></p>
            
            </div>
            <div>
                {this.state.singleComment.map((comment, key) => (<Comments commentComment={comment} key={key}/>))}
            </div>

            <form>
                <input
                // value={this.state.input}
                name='input'
                type='text'
                placeholder='Add a comment...' />
            </form>


            </div>



        )
    }
}

export default CommentSection;