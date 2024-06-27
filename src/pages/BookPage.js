import BookPanel from "../components/BookPanel";
import ItemsBookList from "../components/ItemsBookList";
import { Book } from "../models/Document";

/**
 * Page about a book
 * @returns 
 */
function BookPage() {
    const {id}=useParams();
    const [book, setBook]=useState(Book.get(id))
    document.title=book.title

    if(book!==null){
        return(
            /**
             * Upper part of the page
             */
            <Container>
                <Row>
                    <Col>
                        <p>{book.description}</p>
                    </Col>
                    <Col>
                        <BookPanel book={book} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    {/* Liste des oeuvres réalisées */
                    auth.items.length>0?
                        <ItemsBookList listItems={book.items} />
                        :<div>Aucun exemplaire de l'ouvrage</div>
                    }
                    </Col>
                </Row>
            </Container>
        )
    }else{
        return(
            <div>Le livre n'existe pas !</div>
        )
    }
}

export default BookPage