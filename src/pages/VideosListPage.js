import { Container, Row } from "react-bootstrap";
import VideoList from "../components/VideoList";

function VideosListPage(){
    return(
        <>
            <Container>
                <Row>
                    <p>Liste des vidéos présentes dans notre bibliothèque.</p>
                </Row>
                <Row>
                    <VideoList />
                </Row>
            </Container>
        </>
    );
}

export default VideosListPage