import './App.css';
import NavBar from './componentes/navBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        
        <NavBar />
        <ItemListContainer greeting='Dulces & Salado' />
        
    </div>
  );
}

export default App;
