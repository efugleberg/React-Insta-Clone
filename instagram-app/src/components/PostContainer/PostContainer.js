import React from 'react';
import PostImage from './PostIamge';
import './PostContainer.css';
// import CommentSection from './CommentSection';



const PostContainer = props => {
    console.log('props', props);
    return (
        <div className='post-container8'>
            {props.posts.map(item => (
                <div key={item.id} className='post-container11'>
                < PostImage item={item}
                />
                </div>
                 ))}

        </div>
    )
}

export default PostContainer;