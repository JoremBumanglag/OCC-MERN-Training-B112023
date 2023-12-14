import BookList from "./components/BookList";
import BookAdd from "./components/BookAdd";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookList/>
        <BookAdd/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
