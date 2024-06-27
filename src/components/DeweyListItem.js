import { useState } from "react"

function DeweyListItem(props){
    const [dewey, setDewey]=useState(props.dewey)
    const [deweyPage, setDeweyPage]=useState("/works/books/dewey/"+dewey.id)

    return(
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                <p>{dewey.code}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{dewey.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={deweyPage}>
                    {dewey.books.length} livre(s)
                </Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default DeweyListItem