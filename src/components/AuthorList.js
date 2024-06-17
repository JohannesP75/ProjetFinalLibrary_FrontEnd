import React from 'react'
import AuthorListItem from './AuthorListItem';

function AuthorList({authorList}) {
    var tab_auth=[
        {id: 0, author_type:1, name: "Hugo", given_name: "Victor", year_birth: 1802, year_death: 1885, documents:["Les Misérables", "Notre-Dame de Paris"], audios:[]},
        {id: 1, author_type:2, name: "Académie française", year_birth: 1673, documents:["Dictionaire"], audios:[]},
        {id: 2, author_type:1, name: "Rowlings", given_name: "J.K.", year_birth: 1953, documents:["Harry Potter"], audios:[]}
    ];

    if(authorList.length==0||authorList==null){
        authorList=tab_auth;//Author.getAll();
    }

    return (
        <>
            {
                authorList.map(auth=>(
                    <AuthorListItem author={auth} />
                ))
            }
        </>
    )
}

export default AuthorList