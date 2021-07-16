import React from "react";
import "./App.css";
import Nav from './components/nav';

function App() {
  //Ejemplo de api request de react a nodejs
  const [characters, setCharacters] = React.useState([]);
  const [comics, setComics] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const [series, setSeries] = React.useState([]);
  
  //function that calls api from backend
  /*const callFromBackend = ({state,changeState}) => {

    fetch("/api/" + state)
      .then((res) => res.json())
      .then((data) => changeState(data.message.data.results));

  }

  callFromBackend("characters", setCharacters)
  callFromBackend("comics", setComics)
  callFromBackend("events", setEvents)
  callFromBackend("series", setSeries)*/

  return (
    <div className="container">
      <Nav />
      <section id="newComics">
        <div className="row">
          {/* MIRAR .FILTER para solo coger 4 pelicuas, comics etc*/}
          {characters.map((personaje) => <div className="col-md-3"><img src={personaje.thumbnail.path + "/portrait_xlarge." + personaje.thumbnail.extension } /><p>{personaje.name}</p></div> )}
        </div>
      </section>
    </div>

  );
}

export default App;