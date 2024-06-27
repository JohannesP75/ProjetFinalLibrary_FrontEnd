import { Card } from "react-bootstrap"
import { Video } from "../models/Document"
import ItemsVideoList from "../components/ItemsVideoList"

function VideoPage(){
    const {id}=useParams();
    const [video, setVideo]=useState(Video.get(id));
    document.title=video.title

    if(video!==null){
        return(
            /**
             * Upper part of the page
             */
            <Container>
                <Row>
                    <Col>
                        <p>{video.description}</p>
                    </Col>
                    <Col>
                        <VideoPanel video={video} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    {/* Liste des oeuvres réalisées */
                    video.items.length>0?
                        <ItemsVideoList listItems={video.items} />
                        :<Card>Aucun exemplaire de la vidéo !</Card>
                    }
                    </Col>
                </Row>
            </Container>
        )
    }else{
        return(
            <Card>La vidéo n'existe pas !</Card>
        )
    }
}

export default VideoPage