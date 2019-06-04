import React from 'react';
import PostImage from './PostIamge';
// import CommentSection from './CommentSection';



const PostContainer = props => {
    console.log('props', props);
    return (
        <div>
            {props.taskData.map(item => (
                <div key={item.id} className='post-container11'>
                < PostImage item={item}/>
                {/* <div> */}
                {/* < CommentSection item={item} /> */}
                {/* </div> */}
                </div>
                 ))}

        </div>
    )
}

export default PostContainer;