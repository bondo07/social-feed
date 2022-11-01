import { ListGroup, ListGroupItem } from 'react-bootstrap';
import LikeAndDislike from '../LikeAndDislike/LikeAndDislike';
import './Posts.css'


const Posts = (props) => {
    
    return ( 
        <ListGroup className='posts-bottom'>
            <h4>
                <ListGroupItem>{props.post.name} </ListGroupItem>
            </h4>
            <div>
                <ListGroupItem>{props.post.post} </ListGroupItem>
            </div>
            <ListGroup className='button-spacing'>
                <div>
                    <LikeAndDislike/>
                </div>
            </ListGroup>
        </ListGroup>
     );
}
 
export default Posts;