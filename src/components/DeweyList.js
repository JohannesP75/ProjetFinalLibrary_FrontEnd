import DeweyListItem from "./DeweyListItem";

function DeweyList(){
    const [listDewey, setListDewey]=useState(Dewey.getAll().sort((a, b)=>{
        const nameA = a.code;
        const nameB = b.code;

        var S=0;

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return S;
    }))

    return(
        <>
            {
                listDewey.map(dewey=>(
                    <DeweyListItem dewey={dewey} />
                ))
            }
        </>
    )
}

export default DeweyList