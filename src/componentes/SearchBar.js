import React, { useState } from "react";
import "../style/SearchBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Realizar la búsqueda y obtener los resultados
    fetch(`https://bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ujaqz3w25wtt4t6e/api/search?q=${searchTerm}&type=message`)
      .then((response) => response.json())
      .then((data) => {
        setError(null);
        navigate("/search-results", { state: data }); // Redirige con resultados
      })
      .catch((error) => {
        setError("Ocurrió un error en la búsqueda.");
        console.error("Error en la búsqueda:", error);
      });
  };

  return (
    <div className="form">
      <input
        className="campo"
        placeholder="Buscar..."
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearchSubmit(event);
          }
        }}
      />
      <button className="botonsearch" onClick={handleSearchSubmit}>
        search
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default SearchBar;
