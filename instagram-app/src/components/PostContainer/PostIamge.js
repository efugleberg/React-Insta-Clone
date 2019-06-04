import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostIamge.css';

const PostImage = props => {
    return (
        <div>
        <div className="header-wrapper">
        <div className='post-header'>
            <div>
            <img className='thumbnail-image' src={props.item.thumbnailUrl} alt='thumbnail'/>
            </div>
            <div> <strong>
            {props.item.username}</strong>
            </div>
        </div>
        </div>
        <div>
    <img className='post-image' src={props.item.imageUrl} alt='photos' />
    </div>
    <CommentSection 
    likes={props.item.likes}
    singleComment={props.item.comments}/>
    </div>
    )
}

export default PostImage;