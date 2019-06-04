import React from 'react';

const Comments = props => {
    return (
        <div>
            <p><strong>{props.commentComment.username} </strong>{props.commentComment.text}</p>
        </div>
    )
}

export default Comments;