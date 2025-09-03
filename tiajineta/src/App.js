import React from "react";
import "./App.css";
import abu from "./img/abu.jpg";

const fotos = [
  { id: 1, src: "", title: "Camiseta 1" },
  { id: 2, src: "/img/cam2.jpg", title: "Camiseta 2" },
  { id: 3, src: "/img/cam3.jpg", title: "Camiseta 3" },
  { id: 4, src: "/img/cam4.jpg", title: "Camiseta 4" },
  { id: 5, src: "/img/cam5.jpg", title: "Camiseta 5" },
  { id: 6, src: "/img/cam6.jpg", title: "Camiseta 6" },
  { id: 7, src: "/img/cam7.jpg", title: "Camiseta 7" },
  { id: 8, src: "/img/cam8.jpg", title: "Camiseta 8" },
  { id: 9, src: "/img/cam9.jpg", title: "Camiseta 9" },
  { id: 10, src: "/img/cam10.jpg", title: "Camiseta 10" },
];

function App() {
  return (
    <div className="App">
      <div>
        <img src={abu} className="img-abu" alt="logo" />
      </div>

      <div>
        {/* Galeria de imagenes para las camisetas con scroll horizontal */}
        <div className="scroll-container d-flex gap-3">
          {fotos.map((foto) => (
            <div key={foto.id} className="card" style={{ width: "10rem" , height: '10rem', flexShrink: 0}}>
              <img src={foto.src} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{foto.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
