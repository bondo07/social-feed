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
    }

    return (  
        <Container className='post-container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' className='form-control' value={name} onChange={handleName}/>
                </div>
                <div>
                    <label>Post</label>
                    <input type='text' className='form-control' value={post} onChange={handlePost}/>
                </div>
                <button type='submit'>Create</button>
            </form>
        </Container>
    );
}
 
export default CreatePostsForm;