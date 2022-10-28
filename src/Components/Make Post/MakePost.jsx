import React, { useState } from 'react';


const MakePost = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    const handleName = e => setName(e.target.value)
    const handlePost = e => setPost(e.target.value)

    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {name: name, post: post};
        console.log(newPost)
        props.addPost(newPost)
    }

    return (  
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={handleName}/>
            </div>
            {/* <br></br> */}
            <div>
                <label>Post</label>
                <input type='text' className='form-control' value={post} onChange={handlePost}/>
            </div>
            <button type='submit'>Create</button>
        </form>
    );
}
 
export default MakePost;