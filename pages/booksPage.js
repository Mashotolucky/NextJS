import React from 'react';
import { useState, useEffect } from "react";

function  BooksPage() {
    const [books, setBooks] = useState([]);

    const fetchBook = async () => {
        const res = await fetch('/api/books')
       
        .then(bookies => {
            const data = bookies.json();
            console.log(data);
            setBooks(data);
        })
        
    }


    return (
        <>

            <div className="container">
                <button className="btn btn-outline-info" onClick={fetchBook}>Get books</button>
                {
                    books.map(book => {
                        <div key={book.id} class="card">
                            <div class="card-body">
                                <h4 class="card-title">{book.title}</h4>
                                <p class="card-text">{book.pages}</p>
                            </div>
                        </div>
                    })
                }
            </div>

        </>
    )
}

export default BooksPage