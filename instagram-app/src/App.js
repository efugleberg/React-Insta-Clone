import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: dummyData
    }
  }

  render() {
    console.log(this.state.taskData)
  return (
    <div className="App">
      <div className='search-bar'>
        <SearchBar searches={this.state.dummyData} />
      </div>
      <div className='post-container'>
      <PostContainer taskData={this.state.taskData} />
      </div>
    </div>
    );
  }
}

export default App;
