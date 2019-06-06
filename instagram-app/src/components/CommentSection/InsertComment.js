import React from 'react';
import styled from 'styled-components';

const input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    width: 100%;
    border-radius: 3px;
    `;

const InsertComment = props => {
    return (
        
        <form onSubmit={props.addNewComment}>
            <div>
            <input 
                id='input-form'
                name='insertComment'
                type='text'
                placeholder='Add a comment...' 
                value={props.insertComment}
                onChange={props.handleChanges}
            />
            </div>
        </form>
        
    )
}

export default InsertComment;