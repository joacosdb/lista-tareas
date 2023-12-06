
import './App.css';
import imgj from './Imagenes/android-chrome-192x192.png'
import { ListaTareas } from './Componentes/ListaTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
       <img 
       className='logo' 
       src={imgj} 
       alt="logoj"
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       <ListaTareas/>
      </div>
 
    </div>
  );
}

export default App;
