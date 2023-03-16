import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import ErrorFetch from "./components/ErrorFetch";
import ResidentInfo from "./components/ResidentInfo";

function App() {
  const [location, setLocation] = useState();
  const [inputSearch, setInputSearch] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let URL;
    if (inputSearch) {
      URL = `https://rickandmortyapi.com/api/location/${inputSearch}`;
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126 + 1);
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`;
    }

    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [inputSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputSearch(e.target.inputSearch.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id="inputSearch" type="text" />
        <button>Search</button>
      </form>
      {hasError ? (
        <ErrorFetch />
      ) : (
        <>
          <Location location={location} />
          <div className="residents__container">
            {location?.residents.map((url) => (
              <ResidentInfo key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
