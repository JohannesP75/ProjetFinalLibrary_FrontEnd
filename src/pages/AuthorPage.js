import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AuthorPanel from '../components/AuthorPanel';
import AudioList from '../components/AudioList';
import WorkList from '../components/WorkList';
import {Author, CollectiveAuthor, IndividualAuthor} from "../models/Author"
import { AuthorType } from '../config/Constants';

/**
 * Page about an author
 * @param {Number} ID of the author 
 * @returns 
 */
function AuthorPage({id}) {
    let auth=Author.get(id);
    document.title=(auth.author_type==AuthorType.AUTHOR_INDIVIDUAL?(auth.givenName+" "):(""))+auth.name;

    return(
        /**
         * Upper part of the page
         */
        <Container>
            <Row>
                <Col>
                    <p>{auth.description}</p>
                </Col>
                <Col>
                    <AuthorPanel author={auth} />
                </Col>
            </Row>

            {/* Liste des oeuvres réalisées */
            auth.audios.length>0?
            <Row>
                <Col>
                    <WorkList listWorks={auth.documents} />
                </Col>
            </Row>:null
            }

            {/* Liste des oeuvres interprétées */
            auth.audios.length>0?
            <Row>
                <Col>
                    <AudioList listAudio={auth.audios} />
                </Col>
            </Row>:null
            }
            
        </Container>
    )
}

export default AuthorPage