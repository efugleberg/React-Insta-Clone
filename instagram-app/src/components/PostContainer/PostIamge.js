import React from 'react';

const PostImage = props => {
    return (
        <div>
    <img className='post-image' src={props.item.imageUrl} alt='photos' />
    </div>
    )
}

export default PostImage;