import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom'
import AuthorLink from './AuthorLink';

function VideoListItem({videoWork}) {
    const pageDetails="/video/"+videoWork.id;
    const lengthArrayAuthors=videoWork.authors.length;
    /*const hours=Math.floor(videoWork.length/60);
    const minutes=videoWork.length%60;
    let videoLength="";
    
    if(hours!=0)videoLength+=`${hours} h`
    if(minutes!=0){
        if(S!="")videoLength+=` ${minutes} '`;
        else videoLength+=`${minutes} '`;
    }*/

    return (
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                {/** Title of the work */}
                <p>{videoWork.title}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                {/** Authors list */}
                {
                    videoWork.authors.map((author, count)=>{
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
                <Link href={pageDetails}>Détails ici</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default VideoListItem