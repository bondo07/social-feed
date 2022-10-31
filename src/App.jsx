import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import CreatePostsForm from './Components/CreatePostForm/CreatePostsForm';
import PostLists from './Components/PostsList/PostsList';

function App() {

  const [postEntries, setPostEntries] = useState([{name: 'Armando', post: 'Test Post'}]);

  const addNewPost = post => {
    let newPosts = [...postEntries, post];
    setPostEntries(newPosts)
  }

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <CreatePostsForm addPost={addNewPost}/>
      </div>
      <div>
        <PostLists groupPosts={postEntries}/>
      </div>
    </div>
  );
}

export default App;
