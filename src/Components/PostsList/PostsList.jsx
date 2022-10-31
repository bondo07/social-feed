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
                    })};
                </ListGroupItem>
            </ListGroup>
        </Container>
        // <table className='table table-bordered'>
        //     <tbody>
        //         {props.groupPosts.map((posts) => {
        //             return (
        //                 <tr>
        //                     <th>{props.name}</th>
        //                     <td>{props.post}</td>
        //                 </tr>
        //             )
        //         })}
        //     </tbody>
        // </table>
//      );
)};
 
export default PostLists;

// CREATE A POST THAT WILL ****CONTAIN***** THE GROUP OF POSTED POSTS
// RECREATE YOUR MAKEPOST IN A WAY THAT WILL SEND THE NEW CREATED POST.JSX TO POSTLISTS.JSX AND THEN SEND POSTLISTS.JSX TO APP.JSX