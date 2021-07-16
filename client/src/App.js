import React from "react";
import "./App.css";
import Nav from './components/nav';

function App() {
  //Ejemplo de api request de react a nodejs
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message.data.results));
  }, [data]);
  console.log(data);

  return (
    <div className="container">
      <Nav />
      <section id="newComics">
        <div className="row">
          {data.map((personaje) => <div className="col-md-3"><img src={personaje.thumbnail.path + "/portrait_xlarge." + personaje.thumbnail.extension } /><p>{personaje.name}</p></div> )}
        </div>
      </section>
    </div>

  );
}

export default App;