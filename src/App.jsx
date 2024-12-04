import { useState } from "react";

function App() {
  // Stato iniziale Array "articles" (vuoto)
  const [articles, setArticles] = useState([]);

  // Stato iniziale dell'input
  const [addNewArticle, setAddNewArticle] = useState("");

  // gestisce nuovi titoli inseriti nel input (value)
  const handleInputChange = (event) => {
    setAddNewArticle(event.target.value);
  };

  // gestisce l'invio nuovi titoli dal form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (addNewArticle === "") {
      alert("Devi inserire un titolo da aggiungere!");
      return;
    }

    console.log(`L'articolo "${addNewArticle}" è stato aggiunto!`);

    // aggiunge il nuovo titolo all'array "articles" clonato
    const newArticle = [...articles, addNewArticle];
    setArticles(newArticle);
    setAddNewArticle(""); //reset value input
  };

  // gestisce eliminazione di un titolo
  const handleRemoveArticle = (removeIndex) => {
    const removedArticle = articles[removeIndex];
    const newArticle = articles.filter((article, index) => {
      return index !== removeIndex;
    });
    setArticles(newArticle);
    console.log(`L'articolo "${removedArticle}" è stato eliminato.`);
  };

  return (
    <>
      <div className="container text-start ">
        <h1 className="mt-5 mb-4">ARTICOLI</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="p-2 w-50"
            type="text"
            placeholder="Inserisci titolo articolo..."
            value={addNewArticle}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary ms-3">Invia</button>
        </form>
        <hr />
        <ul className="text-start list-group">
          {articles.map((article, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              {article}
              <button
                className="btn btn-outline-danger btn-sm ms-3 "
                onClick={() => handleRemoveArticle(index)}
              >
                Elimina
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
