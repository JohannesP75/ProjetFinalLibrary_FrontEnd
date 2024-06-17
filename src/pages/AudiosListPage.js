import { Container, Row } from "react-bootstrap";
import AudioList from "../components/AudioList";

function AudiosListPage(){
    return(
        <>
            <Container>
                <Row>
                    <p>Liste des documen audios présents dans notre bibliothèque.</p>
                </Row>
                <Row>
                    <AudioList />
                </Row>
            </Container>
        </>
    );
}

export default AudiosListPage