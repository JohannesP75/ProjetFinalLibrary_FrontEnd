import { useState } from "react"
import { ListGroup } from "react-bootstrap";
import { ItemVideo } from "../models/Item";

function ItemsVideoListItem(props){
    const [itemVideo, setItemBook]=useState(props.itemVideo);
    const [detailPage, setDetailPage]=useState(ItemVideo.tableName+"/"+itemVideo.id)
    
    return(
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                <p>{itemVideo.video.title}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                {/** Authors list */}
                {
                    itemVideo.video.authors.map((author, count)=>{
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
                <p>{itemVideo.length}'</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{itemVideo.formatVideo.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>ISAN {itemVideo.isan}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={detailPage} />
            </ListGroup.Item>
        </ListGroup>
    )
}

export default ItemsVideoListItem