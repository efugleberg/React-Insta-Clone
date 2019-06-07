import React from 'react';

import PropTypes from "prop-types";

const Comments = props => {
    return (
        <div>
            <p><strong>{props.commentComment.username} </strong>{props.commentComment.text}</p>
        </div>
    )
}

export default Comments;

Comments.propTypes = {
    item: PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  };