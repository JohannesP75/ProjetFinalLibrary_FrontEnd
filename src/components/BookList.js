import React, { useState } from 'react'
import { Book } from '../models/Document'
import BookListItem from './BookListItem'

function BookList(props) {
    const [listBooks, setListBooks]=useState(props.listBooks!==null?
        props.listBooks:
        Book.getAll())

    return (
        <>
            {
                listBooks.map(book=>(
                    <BookListItem book={book} />
                ))
            }
        </>
    )
}

export default BookList