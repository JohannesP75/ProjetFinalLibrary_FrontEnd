import { Container, Row } from "react-bootstrap";
import BookList from "../components/BookList";

function BooksListPage(){
    return(
        <>
            <Container>
                <Row>
                    <p>Liste des livres présents dans notre bibliothèque.</p>
                </Row>
                <Row>
                    <BookList />
                </Row>
            </Container>
        </>
    );
}

export default BooksListPage