import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import './PostContainer.css';

class PostsPage extends React.Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        filteredPosts: []
      }
    }
  
    componentDidMount() {
      this.setState({
        posts: dummyData
      })
    }
  
    userSearch = e => {
      const posts = this.state.posts.filter((user) => {
        if (user.username.includes(e.target.value)) {
          return user;
          } return '';
        })
      this.setState({filteredPosts: posts})
    }
  
    render() {
    //   console.log(this.state.posts)
    
    return (
      <div className="App">
        <div className='search-bar'>
          <SearchBar 
            userSearch={this.userSearch} 
            />
        </div>

        <div className='post-container'>
          <PostContainer posts={this.state.filteredPosts.length > 0 ?
                this.state.filteredPosts :
                this.state.posts} 
                />
        </div>
      </div>
      );
    }
  }
  

export default PostsPage;