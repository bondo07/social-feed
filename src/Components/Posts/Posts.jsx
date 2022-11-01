import { ListGroup, ListGroupItem } from 'react-bootstrap';
import LikeAndDislike from '../LikeAndDislike/LikeAndDislike';


const Posts = (props) => {
    
    return ( 
        <ListGroup>
            <h4>
                <ListGroupItem>{props.post.name} </ListGroupItem>
            </h4>
            <div>
                <ListGroupItem>{props.post.post} </ListGroupItem>
            </div>
            <div>
                <LikeAndDislike/>
            </div>
        </ListGroup>
     );
}
 
export default Posts;