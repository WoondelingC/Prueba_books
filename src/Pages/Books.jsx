import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cards from "../Components/Cards";


const Books = () => {
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState(1);

  let items = books.slice(0, 3);

  if (pages === 2) {
    items = books.slice(3, 6);
  } else if (pages === 3) {
    items = books.slice(6, 10);
  }

  console.log(items);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const url = `https://www.etnassoft.com/api/v1/get/?id`;
    const resp = await axios.get(url);
    const data = await resp.data;
    setBooks(data);
    return data;
  };

  const previous = () => {
    if (pages === 2) {
      setPages(1);
    } else if (pages === 3) {
      setPages(2);
    }
  };

  const next = () => {
    if (pages === 1) {
      setPages(2);
    } else if (pages === 2) {
      setPages(3);
    }
  };

  return (
    <div className="container">
      {items.map((book) => {
        return (
          <Cards
            key={book.id}
            book={book}
            title={book.title}
            image={book.cover}
            autor={book.author}
            description={book.content_short}
            pages={book.pages}
          />
        );
      })}


      <div className="div_buttons">
        <div>
          <button>
            <img
              src="https://img.icons8.com/stickers/100/000000/long-arrow-left.png"
              alt="arrow"
              onClick={previous}
            />
          </button>
        </div>
        <div>
          <button>
            <img
              src="https://img.icons8.com/stickers/100/000000/long-arrow-right.png"
              alt="arrow"
              onClick={next}
            />
          </button>
        </div>
      </div>
      <div>
        <Link to="/form">
          <button id="button_plus">
            <img
              src="https://img.icons8.com/plasticine/100/000000/plus.png"
              alt=""
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Books;
