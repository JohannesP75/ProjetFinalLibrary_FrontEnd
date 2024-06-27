import React, { useState } from 'react'
import WorkersListItem from './WorkersListItem';

function WorkersList(props) {
    const [workersList, setWorkersList]=useState([]);

    var tab_auth=[
        {id: 0, name: "Branche centrale", items: [], workers:[]},
        {id: 1, name: "C.D.I. scolaire", items: [], workers:[]}
    ];

    if(props.workersList===null){
        workersList=tab_auth;//Workers.getAll();
    }

    return (
        <>
            {
                workersList.map(work=>(
                    <WorkersListItem worker={work} />
                ))
            }
        </>
    )
}

export default WorkersList