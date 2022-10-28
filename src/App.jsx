import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import MakePost from './Components/Make Post/MakePost';
import PostLists from './Components/PostsList/PostsList';
import './App.css';

function App() {

  const [postEntries, setPostEntries] = useState([]);

  const addNewPost = post => {
    let newPosts = [...postEntries, post];
    setPostEntries(newPosts)
  }

  return (
    <div className='App'>
      <div>
        <NavigationBar />
      </div>
      <div>
        <MakePost addPost={addNewPost}/>
      </div>
      <div>
        <PostLists />
      </div>
    </div>
  );
}

export default App;
