import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom'
import AuthorLink from './AuthorLink';
import { Audio } from '../models/Document';

function AudioListItem({audioWork}) {
    const pageDetails=Audio.tableName+"/"+audioWork.id;
    const lengthArrayAuthors=audioWork.authors.length;
    const lengthArrayInterpreters=audioWork.interpreters.length;
    const hours=Math.floor(audioWork.length/3600);
    const minutes=Math.floor(audioWork.length/60);
    const seconds=audioWork.length%60;
    let musicLength="";
    
    if(hours!=0)musicLength+=`${hours} h`
    if(minutes!=0){
        if(musicLength!="")musicLength+=` ${minutes} '`;
        else musicLength+=`${minutes} '`;
    }
    if(seconds!=0){
        if(musicLength!="")musicLength+=` ${seconds} ''`;
        else musicLength+=`${seconds} ''`;
    }

    return (
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                {/** Title of the work */}
                <p>{audioWork.title} ({musicLength})</p>
            </ListGroup.Item>
            <ListGroup.Item>
                {/** ANSCR call number */}
                <p>ANSCR : {audioWork.anscr.code} ({audioWork.anscr.name})</p>
            </ListGroup.Item>
            <ListGroup.Item>
                {/** Authors list */}
                {
                    audioWork.authors.map((author, count)=>{
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
                {/** Interpreters list */}
                {
                    audioWork.interpreters.map((author, count)=>{
                        <AuthorLink author={author} />

                        switch(count){
                            case lengthArrayInterpreters-1:
                                break;
                            case lengthArrayInterpreters-2:
                                (<p> et </p>)
                                break;
                            default:
                                (<p>, </p>)
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

export default AudioListItem