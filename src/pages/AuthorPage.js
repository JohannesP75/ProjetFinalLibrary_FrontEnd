import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AuthorPanel from '../components/AuthorPanel';
import AudioList from '../components/AudioList';
import WorkList from '../components/WorkList';
import {Author, CollectiveAuthor, IndividualAuthor} from "../models/Author"
import { AuthorType } from '../config/Constants';

/**
 * Page about an author
 * @returns 
 */
function AuthorPage() {
    const {id}=useParams();
    const [author, setAuthor]=useState(Author.get(id))
    document.title=(author.author_type==AuthorType.AUTHOR_INDIVIDUAL?(author.givenName+" "):(""))+author.name;

    if(author!==null){
        return(
            /**
             * Upper part of the page
             */
            <Container>
                <Row>
                    <Col>
                        <p>{author.description}</p>
                    </Col>
                    <Col>
                        <AuthorPanel author={author} />
                    </Col>
                </Row>

                {/* Liste des oeuvres réalisées */
                auth.audios.length>0?
                <Row>
                    <Col>
                        <WorkList listWorks={author.documents} />
                    </Col>
                </Row>:null
                }

                {/* Liste des oeuvres interprétées */
                auth.audios.length>0?
                <Row>
                    <Col>
                        <AudioList listAudio={author.audios} />
                    </Col>
                </Row>:null
                }
                
            </Container>
        )
    }else{
        return(
            <div>L'auteur n'existe pas !</div>
        )
    }
}

export default AuthorPage