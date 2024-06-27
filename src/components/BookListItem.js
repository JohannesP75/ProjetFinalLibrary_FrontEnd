import { useState } from "react";
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import { Book } from "../models/Document";

function BooksListItem(props){
    const [book, setBook]=useState(props.book);
    const [bookPage, setBookPage]=useState(Book.tableName+"/"+branch.id);

    return(
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                <p>{book.title}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={bookPage} />
            </ListGroup.Item>
        </ListGroup>
    )
}

export default BooksListItem