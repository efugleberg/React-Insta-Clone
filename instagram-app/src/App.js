import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    }
  }

  render() {
    // console.log(this.state.posts)
  return (
    <div className="App">
      <div className='post-container'>
        <ComponentFromWithAuthenticate
        />
      </div>
    </div>
    );
  }
}

export default App;
