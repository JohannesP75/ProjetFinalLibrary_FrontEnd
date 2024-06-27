import { useState } from "react"
import Loan from "../models/Loan"
import LoansListItem from "./LoansListItem"

function LoansList(props){
    const [listLoans, setListLoans]=useState(props.listLoans!==null?
        props.listLoans:
        Loan.getAll())
    const [selectedLoans, setSelectedLoans]=useState("OnlyUnreturned")
    const [listDisplayedLoans, setListDisplayedLoans]=useState(sortListLoans())

    function sortListLoans(){
        var list=[]

        listLoan.forEach((loan)=>{
            if(selectedLoans=="OnlyUnreturned"&&!loan.isReturned)list.add(loan)
            else if(selectedLoans=="OnlyReturned"&&loan.isReturned)list.add(loan)
            else list.add(loan)
        })

        return list;
    }

    return(
        <>
            <Form.Select value={selectedLoans} onChange={
                e=>{
                    setSelectedLoans(e.currentTarget.value)
                    setListDisplayedLoans(sortListLoans())
                }
            }>
                <option value="AllLoans">Tous les prêts</option>
                <option value="OnlyUnreturned">Seulement ceux non restitués</option>
                <option value="OnlyReturned">Seulement ceux restitués</option>
            </Form.Select>
            {
                listDisplayedLoans.map(loan => {
                    <LoansListItem loan={loan} />
                })
            }
        </>
    )

}

export default LoansList