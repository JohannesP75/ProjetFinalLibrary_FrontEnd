import { useState } from "react";
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";

function WorkersListItem(props){
    const [worker, setWorker]=useState(props.worker)
    const workerPage="/workers/"+worker.id;

    return(
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                <p>{worker.givenName+" "+worker.surname}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={workerPage} />
            </ListGroup.Item>
        </ListGroup>
    )
}

export default WorkersListItem