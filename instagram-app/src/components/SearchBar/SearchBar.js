import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 640px;
    align-items: baseline;`

const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: cursive;`

const RightWrapper = styled.div`
    display: flex;
    padding: 0 20px;`


const SearchBar = props => {
    // console.log('props-search', props);
    return (
        <Container>
            <LeftWrapper>
                <i className="fas fa-camera"></i>
                <p>Instagram</p>
            </LeftWrapper>

            <div className='middle-box'>
                <input
                    name=''
                    type='text'
                    placeholder='    Search'
                    onChange={props.userSearch}  
                />
            </div>

            <RightWrapper>
            <RightWrapper><i className="far fa-compass"></i></RightWrapper>
            <RightWrapper><i className="far fa-heart"></i></RightWrapper>
            <RightWrapper><i className="far fa-user"></i></RightWrapper>
            </RightWrapper>


        </Container>  //Search-bar-container

    )
}

export default SearchBar;