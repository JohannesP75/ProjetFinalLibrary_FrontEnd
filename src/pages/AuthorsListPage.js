import React from 'react'
import AuthorList from '../components/AuthorList';

function AuthorsListPage() {
    document.title = "Liste des auteurs";

    return (
        <div>
            <p>Liste des auteurs dont les oeuvres sont présentes dans notre bibliothèque.</p>

            <AuthorList />
        </div>
    )
}

export default AuthorsListPage