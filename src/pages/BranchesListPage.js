import React from 'react'
import BranchList from '../components/BranchList';

function BranchesListPage() {
    document.title = "Liste des branches";

    return (
        <div>
            <p>Liste des branches du système de bibliothèque.</p>

            <BranchList />
        </div>
    )
}

export default BranchesListPage