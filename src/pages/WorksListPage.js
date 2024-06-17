import { Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function WorksListPage(){
    return(
        <>
            <Container>
                    <ListGroup className="my-2">
                        <ListGroup.Item>
                            <ListGroup horizontal="sm" className="my-2">
                                <ListGroup.Item>
                                    <p>Livres</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to={"/works/books"}>Page</Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <ListGroup horizontal="sm" className="my-2">
                                <ListGroup.Item>
                                    <p>Vidéos</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to={"/works/movies"}>Page</Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <ListGroup horizontal="sm" className="my-2">
                                <ListGroup.Item>
                                    <p>Documents sonores</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to={"/works/audios"}>Page</Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
            </Container>
        </>
    );
}

export default WorksListPage