//importing hooks
import { useEffect, useState, useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {

    const [allBooks, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/books/")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.allBooks);
                console.log(data); 
            })
            .catch((error) => console.error(error));
    }, [])

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme? light: dark;

    return (
        <div>
            <h1 style={{background: theme.bg, color: theme.syntax}}> Book List </h1>
            <ul>
                {allBooks && allBooks.map((book) => (
                    <li key={book._id}>
                        <p><strong>Title: {book.title}</strong></p>
                        <p>Author: {book.author}</p>
                        <p>Pages: {book.pages}</p>
                        <p>Price: Php {book.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;