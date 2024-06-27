import { useState } from "react"
import Loan from "../models/Loan";
import { Reader } from "../models/Person";

function LoansListItem(props){
    const [loan, setLoan]=useState(props.loan);
    const [detailPage, setDetailPage]=useState(Loan.tableName+"/"+loan.id)
    
    return(
        <ListGroup horizontal='sm' className="my-2">
            <ListGroup.Item>
                <p>{loan.item.document.title} ({loan.id})</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{Reader.getFullName(loan.reader)} ({loan.reader.id})</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{loan.dateStart}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{loan.dateDue}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{loan.dateDue}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>{loan.isReturned}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={detailPage} />
            </ListGroup.Item>
        </ListGroup>
    )
}

export default LoansListItem