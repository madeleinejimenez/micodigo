import logo from './logo.svg';
import gato from './imagenes/gato.jpg';
import Button from './components/button';
import './App.css';


import Image from "./components/image";

function App() {
  let valorBotn = "";
  const lanzarAlerta = () => {
    alert("SOY UNA ALERTA!");
  };
  return (
    <div>
      <header>
        <p>
          Holi Made <code>src/App.js</code> and save to reload.
        </p>
        <Image parametrologo={logo} />
        <Image parametrologo={gato} />
        <Button id={"alerta"} name={"alerta"} events={()=> {
          lanzarAlerta();
        }
        }/>
      </header>
    </div>
  );
}

export default App;
