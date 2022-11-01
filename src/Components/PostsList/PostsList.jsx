// import React, { useState } from 'react';
import Posts from '../Posts/Posts';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const PostLists = (props) => {

    


    return ( 
        <Container>
            <ListGroup>
                <ListGroupItem>
                    {props.groupPosts.map((posts) =>{
                        return <Posts post={posts}/>
                    })}
                </ListGroupItem>
            </ListGroup>
        </Container>
)};
 
export default PostLists;
