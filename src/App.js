import "./App.css";

// Traemos los hooks necesarios de react-redux
import { useSelector, useDispatch } from "react-redux";

// Traemos los action declarados anteriormente
import { addCounter, decreaseCounter } from "./redux/actions";

const App = () => {
  // Traemos la propiedad 'count' del estado
  const count = useSelector((state) => state.count);

  // Creamos el dispatcher
  const dispatcher = useDispatch();

  // Ejecutamos el dispatcher cuando hagamos el llamado a nuestras funciones con el botón
  const add = () => dispatcher(addCounter());
  const decrease = () => dispatcher(decreaseCounter());

  return (
    <div className="App">
      <h1>Contador de clicks con hooks: {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
};
export default App;
