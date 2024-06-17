import React from 'react'
//import BookListItem from './BookListItem'

function BookList({listBooks}) {
    return (
        <>
            {
                listBooks.map(book=>(
                    //<BookListItem book={book} />
                    <p>book.name</p>
                ))
            }
        </>
    )
}

export default BookList