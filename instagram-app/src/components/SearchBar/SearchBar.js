import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    console.log('props-search', props);
    return (
        <div className='search-bar-container'>
            <div className='left-box'>

            </div>

            <div className='middle-box'>
                <input
                name=''
                type='text'
                placeholder='Search' />

            </div>

            <div className='right-box'>


            </div>


        </div>

    )
}

export default SearchBar;