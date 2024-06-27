import { useState } from "react"
import { ItemBook } from "../models/Item"
import ItemsBookListItem from "./ItemsBookListItem"

function ItemsBookList(props){
    const [listItems, setListItems]=useState(props.listItems!==null?props.listItems:ItemBook.getAll())

    return(
        <>
            {
                listItems.map(book=>(
                    <ItemsBookListItem itemBook={book} />
                ))
            }
        </>
    )
}

export default ItemsBookList