import React from 'react'

function Cards(book) {
    return (
        <div>
            <div className="card">
                <div className="card_image">
                    <img src={book.image} alt="" />
                </div>
                <div className="card_description">
                    <h1>{book.title}</h1>
                    <p id='p_author'><i>{book.autor}</i></p>
                    <p id='parrafo_descripcion'>{book.description}</p>
                    <p id='pages'>páginas {book.pages}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
