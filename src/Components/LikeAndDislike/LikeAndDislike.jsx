import React, { useState } from 'react';
import './LikeAndDislike.css'

const LikeAndDislike = (props) => {

    const [likeButton, setLikeButton] = useState('static-button');
    const [dislikeButton, setDislikeButton] = useState('static-button');

    function handleLikeClick() {
        if(likeButton === 'static-button') {
            setLikeButton('like-button-toggle')
        }
        else {
            setLikeButton('static-button')
        }
    }

    function handleDislikeClick() {
        if(dislikeButton === 'static-button') {
            setDislikeButton('dislike-button-toggle')
        }
        else {
            setDislikeButton('static-button')
        }
    }
    return (  
        <div>
            <div >
                <button className={likeButton} onClick={handleLikeClick} type='button'>Like</button>
            </div>
            <div >
                <button className={dislikeButton} onClick={handleDislikeClick} type='button'>Dislike</button>
            </div>
        </div>
     );
}
 
export default LikeAndDislike;