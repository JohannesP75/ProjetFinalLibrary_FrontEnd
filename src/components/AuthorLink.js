import { Link } from "react-router-dom";
import {Author, CollectiveAuthor, IndividualAuthor} from "../models/Author"

/**
 * Creates a link to the page for the author
 * @param {Author} param0 author Author for whom the page should be created
 * @returns 
 */
function AuthorLink({author}) {
    const urlPage=Author.tableName+"/"+author.id;

    return (
        <>
            {
                <Link to={urlPage} >{author.getFullName()}</Link>
            }
        </>
    )
}

export default AuthorLink