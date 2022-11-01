import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import CreatePostsForm from './Components/CreatePostForm/CreatePostsForm';
import PostLists from './Components/PostsList/PostsList';
import './App.css'
import { ListGroup } from 'react-bootstrap';

function App() {

  const [postEntries, setPostEntries] = useState([{name: 'Armando Beltran', post: 'Learning to develop, one line of code at a time!'}]);

  const addNewPost = post => {
    let newPosts = [...postEntries, post];
    setPostEntries(newPosts)
  }

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <ListGroup className='app-postslist'>
        <div>
          <CreatePostsForm addPost={addNewPost}/>
        </div>
        <div>
          <PostLists groupPosts={postEntries}/>
        </div>
      </ListGroup>
    </div>
  );
}

export default App;
