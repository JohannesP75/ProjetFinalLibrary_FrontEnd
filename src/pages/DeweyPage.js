import { useState } from "react";
import { Dewey } from "../models/Classification";
import BookList from "../components/BookList";

function DeweyPage(){
    const {id}=useParams();
    const [dewey, setDewey]=useState(Dewey.get(id))

    if(dewey!==null){
        document.title=dewey.code;

        return(
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="formSurname">
                        <Form.Label>Code</Form.Label>
                        <Form.Control type="text" placeholder={dewey.code} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGivenName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder={dewey.name} />
                    </Form.Group>
                </Form>

                <BookList listBooks={dewey.books} />
            </>
        )
    }else{
        return(
            <div>Le Dewey n'existe pas !</div>
        )
    }
}

export default DeweyPage