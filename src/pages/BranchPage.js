import { Col, Container, ListGroup, Row } from "react-bootstrap";
import WorkList from "../components/WorkList";

function BranchPage({id}){
    const branch={id: 0, name: "Branche centrale", items: [], workers:[]};//Branch.get(id);

    return(
        <Container>
            <Col>
                <Row>
                    <p>Inventaire des exemplaires présents dans la branche :</p>
                    <WorkList listWorks={branch.items} />
                </Row>
                <Row>
                    <p>Employés de la branche :</p>
                    <div>TODO: créer WorkersList</div>
                </Row>
            </Col>
        </Container>
    );

}

export default BranchPage