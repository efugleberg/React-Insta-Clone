import React from 'react';

const InsertComment = props => {
    return (
        <form onSubmit={props.addNewComment}>
                <input
                name='insertComment'
                type='text'
                placeholder='Add a comment...' 
                value={props.insertComment}
                onChange={props.handleChanges}/>
            </form>
    )
}

export default InsertComment;