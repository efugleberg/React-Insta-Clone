import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login'
import withAuthenticate from './components/authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  

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
