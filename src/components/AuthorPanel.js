import React from 'react'
import { AuthorType } from '../config/Constants';
import AuthorCollectivePanel from './AuthorCollectivePanel';
import AuthorIndividualPanel from './AuthorIndividualPanel';

/**
 * Send a sidebar about an instance of Author
 * @param {Author} author 
 * @returns 
 */
function AuthorPanel({author}) {
    switch(author.author_type){
        case AuthorType.AUTHOR_COLLECTIVE:
            return(<AuthorCollectivePanel author={author} />);
        case AuthorType.AUTHOR_INDIVIDUAL:
            return(<AuthorIndividualPanel author={author} />)
        default:
            return null;
    }
}

export default AuthorPanel;