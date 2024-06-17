import React from 'react'
import BranchListItem from './BranchListItem';

function BranchList({branchList}) {
    var tab_auth=[
        {id: 0, name: "Branche centrale", items: [], workers:[]},
        {id: 1, name: "C.D.I. scolaire", items: [], workers:[]}
    ];

    if(branchList.length==0||branchList==null){
        branchList=tab_auth;//Branch.getAll();
    }

    return (
        <>
            {
                branchList.map(bran=>(
                    <BranchListItem branch={bran} />
                ))
            }
        </>
    )
}

export default BranchList