import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './CreatePostsForm.css';


const CreatePostsForm = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    const handleName = e => setName(e.target.value)
    const handlePost = e => setPost(e.target.value)

    function handleSubmit(e) {
        e.preventDefault();       
        const newPost = {name: name, post: post};
        props.addPost(newPost)
        setName('')
        setPost('')
    }

    return (  
        <Container className='create-post-container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='input-label'>
                        <label>Name</label>
                    </div>
                    <div>
                        <input type='text' className='name-textbox' placeholder='Your name...' value={name} onChange={handleName}/>
                    </div>
                </div>
                <div className='post-container'>
                    <div className='input-label'>
                        <label>Post</label>
                    </div>
                    <div className='button-spacing'>
                        <input type='text' className='post-textbox' placeholder='Write something...' value={post} onChange={handlePost}/>
                    </div>
                </div>
                <div className='button-div'>
                    <button type='submit' className='create-button'>Create</button>
                </div>
            </form>
        </Container>
    );
}
 
export default CreatePostsForm;