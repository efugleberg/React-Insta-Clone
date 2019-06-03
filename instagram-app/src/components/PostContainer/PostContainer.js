import React from 'react';
import PostImage from './PostIamge';
// import CommentSection from './CommentSection';



const PostContainer = props => {
    console.log('props', props);
    return (
        <div>
            {props.taskData.map(item => (
                <div className='post-container11'>
                < PostImage key={item.imageUrl} item={item}/>
                </div>

                    // <PostImage key={item.timestamp} imageUrl={item.imageUrl} />
                    
                    ))}

        </div>
    )
}

export default PostContainer;