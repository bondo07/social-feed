import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import Posts from '../Posts/Posts';
import './PostsList.css'

const PostLists = (props) => {

    


    return ( 
        <Container className='postslists-container'>
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
