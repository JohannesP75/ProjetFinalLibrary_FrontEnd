import { Card } from "react-bootstrap"
import { Audio } from "../models/Document"
import ItemsVideoList from "../components/ItemsVideoList"

function AudioPage(){
    const {id}=useParams();
    const [audio, setAudio]=useState(Audio.get(id))
    document.title=audio.title

    if(audio!==null){
        return(
            /**
             * Upper part of the page
             */
            <Container>
                <Row>
                    <Col>
                        <p>{audio.description}</p>
                    </Col>
                    <Col>
                        <AudioPanel audio={audio} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    {/* Liste des oeuvres réalisées */
                    audio.items.length>0?
                        <ItemsVideoList listItems={audio.items} />
                        :<Card>Aucun exemplaire de l'enregistrement audio !</Card>
                    }
                    </Col>
                </Row>
            </Container>
        )
    }else{
        return(
            <Card>L'enregistrement audio' n'existe pas !</Card>
        )
    }
}

export default AudioPage