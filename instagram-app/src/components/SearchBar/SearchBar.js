import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    console.log('props-search', props);
    return (
        <div className='search-bar-container'>
            <div className='left-box'>
                <i className="fas fa-camera"></i>
                <p>Instagram</p>
            </div>

            <div className='middle-box'>
                <input
                    name=''
                    type='text'
                    placeholder='    Search'
                    onChange={props.userSearch}  
                />
            </div>

            <div className='right-box'>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>


        </div>  //Search-bar-container

    )
}

export default SearchBar;