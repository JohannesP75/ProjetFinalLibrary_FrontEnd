import { Col, Container, ListGroup, Row } from "react-bootstrap";
import WorkList from "../components/WorkList";
import { useState } from "react";
import WorkersList from "../components/WorkersList";
import { useParams } from "react-router-dom";

function BranchPage(){
    const {id}=useParams();
    const [branch, setBranch]=useState({id: 0, name: "Branche centrale", items: [], workers:[]}); //Branch.get(id);

    return(
        <Container>
            <Col>
                <Row>
                    <p>Inventaire des exemplaires présents dans la branche :</p>
                    <WorkList listWorks={branch.items} />
                </Row>
                <Row>
                    <p>Employés de la branche :</p>
                    <WorkersList workersList={branch.workers} />
                </Row>
            </Col>
        </Container>
    );

}

export default BranchPage