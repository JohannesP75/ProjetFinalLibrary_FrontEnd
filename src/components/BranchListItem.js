import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";

function BranchListItem({branch}){
    const branchPage="/branches/"+branch.id;

    return(
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                <p>{branch.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={branchPage} />
            </ListGroup.Item>
        </ListGroup>
    )
}

export default BranchListItem