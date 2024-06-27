import { ANSCR } from "../models/Classification";
import ANSCRListItem from "./ANSCRListItem";

function ANSCRList(){
    const [listAnscr, setLlistAnscr]=useState(ANSCR.getAll().sort((a, b)=>{
        const nameA = a.code;
        const nameB = b.code;

        var S=0;

        if (nameA < nameB) {
            S=-1;
        }
        else if (nameA > nameB) {
            S=1;
        }

        return S;
    }))

    return(
        <>
            {
                listAnscr.map(anscr=>(
                    <ANSCRListItem anscr={anscr} />
                ))
            }
        </>
    )
}

export default ANSCRList