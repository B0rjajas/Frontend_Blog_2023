const handleSearch = (query) => {
    fetch(`https://bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ujaqz3w25wtt4t6e/api/search?q=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud.");
        }
        return response.json();
      })
      .then((data) => {
        setError(null);
        // Filtra los resultados para incluir solo los que tienen el título o el contenido coincidente
        const filteredResults = data.filter(
          (result) =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.message.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults); // Actualiza el estado con los resultados de la búsqueda filtrados
      })
      .catch((error) => {
        setError(
          "Ocurrió un error en la búsqueda. Por favor, inténtelo de nuevo más tarde."
        );
        console.error("Error en la búsqueda:", error);
      });
  };
  