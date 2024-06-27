import { useState } from "react";
import { ANSCR } from "../models/Classification";
import AudioList from "../components/AudioList";

function ANSCRPage(){
    const {id}=useParams();
    const [anscr, setAnscr]=useState(ANSCR.get(id))

    if(dewey!==null){
        document.title=anscr.code;

        return(
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="formSurname">
                        <Form.Label>Code</Form.Label>
                        <Form.Control type="text" placeholder={anscr.code} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGivenName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder={anscr.name} />
                    </Form.Group>
                </Form>

                <AudioList listAudio={anscr.audios} />
            </>
        )
    }else{
        return(
            <div>L'ANSCR n'existe pas !</div>
        )
    }
}

export default ANSCRPage