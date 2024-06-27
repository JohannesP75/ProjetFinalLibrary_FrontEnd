import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom'
import AuthorLink from './AuthorLink';
import { Video } from '../models/Document';

function VideoListItem(props) {
    const [video, setVideo]=useState(props.video);
    const pageDetails=Video.tableName+"/"+videoWork.id;
    const lengthArrayAuthors=videoWork.authors.length;

    return (
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                {/** Title of the work */}
                <p>{video.title}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                {/** Authors list */}
                {
                    video.authors.map((author, count)=>{
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