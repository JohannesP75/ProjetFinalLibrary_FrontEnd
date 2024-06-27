import { useState } from "react"
import { ItemVideo } from "../models/Item"
import ItemsVideoListItem from "./ItemsBookListItem"

function ItemsVideoList(props){
    const [listItems, setListItems]=useState(props.listItems!==null?props.listItems:ItemVideo.getAll())

    return(
        <>
            {
                listItems.map(video=>(
                    <ItemsVideoListItem itemVideo={video} />
                ))
            }
        </>
    )
}

export default ItemsVideoList