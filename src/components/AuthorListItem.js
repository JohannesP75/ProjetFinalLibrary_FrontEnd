import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom'
import { AuthorType } from '../config/Constants';

function AuthorListItem({author}) {
    var isCollective=author.author_type==AuthorType.AUTHOR_COLLECTIVE;
    var hasDied=!isCollective&&author.year_death!=null;
    var pageAuthor="/authors/"+author.id;
    var hasAudioWorks=(author.audios.length>0);
    var hasWorks=(author.documents.length>0);

    return (
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                {/* Affichage du nom de l'auteur */}
                {/*isCollective?
                    (<p>{author.name}</p>)
                    :
                    (
                        <p>{(hasGivenName?
                            (author.given_name+" "):
                            "")+author.name}</p>
                    )

                */
                <p>{author.getFullName()}</p>
                }

                <p>Identifiant : "{author.id}"</p>
                <p>URL page : "{pageAuthor}"</p>
            </ListGroup.Item>
            <ListGroup.Item>
                {/* Date de naissance/création et éventuellement de décès */}
                {isCollective?
                    (<p>({author.year_birth})</p>)
                    :
                    (
                        <p>({author.year_birth+"-"+((hasDied)?author.year_death:"")})</p>
                    )

                }
            </ListGroup.Item>
            <ListGroup.Item>
                {hasWorks?
                    (<p>Nombre d'oeuvres présentes dans la bibliothèque : {author.documents.length}</p>):null
                }
                {hasAudioWorks?
                    (<p>Nombre d'interprétations audios présentes dans la bibliothèque : {author.audios.length}</p>):null
                }
            </ListGroup.Item>
            <ListGroup.Item>
                <Link href={pageAuthor}>Détails ici</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default AuthorListItem