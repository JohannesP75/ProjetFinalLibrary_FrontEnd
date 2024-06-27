import { useState } from "react"

function ANSCRListItem(props){
    const [anscr, setAnscr]=useState(props.anscr)
    const [anscrPage, setAnscrPage]=useState("/works/audios/anscr/"+anscr.id)

    return(
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                <p>{anscr.code}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{anscr.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={anscrPage}>
                    {anscr.audios.length} audio(s)
                </Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default ANSCRListItem