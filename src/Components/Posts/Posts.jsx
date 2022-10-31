import { ListGroup, ListGroupItem } from 'react-bootstrap';


const Posts = (props) => {
    
    return ( 
        <ListGroup>
            <div>
                <ListGroupItem>{props.post.name} </ListGroupItem>
            </div>
            <div>
                <ListGroupItem>{props.post.post} </ListGroupItem>
            </div>
        </ListGroup>
     );
}
 
export default Posts;