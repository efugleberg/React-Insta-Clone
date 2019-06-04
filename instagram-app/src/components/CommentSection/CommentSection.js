import React from 'react';
import Comments from './Comments';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleComment: props.singleComment,
            input: '',
            likes: ''
        }
    }

    // addLikes = () => {
    //     let likes = this.state.likes +1;
    //     this.setState({ likes: likes })
    // }



    render () {
        return (
            <div>
            <div>
            <p>{this.likes} likes</p>
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