import { useState } from "react"
import { ListGroup } from "react-bootstrap";
import { ItemBook } from "../models/Item";

function ItemsBookListItem(props){
    const [itemBook, setItemBook]=useState(props.itemBook);
    const [detailPage, setDetailPage]=useState(ItemBook.tableName+"/"+itemBook.id)
    
    return(
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                <p>{itemBook.book.title}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                {/** Authors list */}
                {
                    itemBook.book.authors.map((author, count)=>{
                        <AuthorLink author={author} />

                        switch(count){
                            case lengthArrayAuthors-1:
                                break;
                            case lengthArrayAuthors-2:
                                <p> et </p>
                                break;
                            default:
                                <p>, </p>
                        }
                    })
                }
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{itemBook.pages} p.</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{itemBook.formatBook.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>ISBN {itemBook.isbn}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={detailPage} />
            </ListGroup.Item>
        </ListGroup>
    )
}

export default ItemsBookListItem