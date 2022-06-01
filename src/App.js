import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import Greeting from './components/Greeting';

function App() {
  return <div>
    <h1>Brand - CoderHouse</h1>
    <NavBar />
    <CartWidget />
    <Greeting />
  </div>;
}

function ItemListContainer() {

}

export default App;

