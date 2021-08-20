
import './App.css';
import Routes from './Routes';
import ShoplyNavbar from './ShoplyNavbar';

function App() {
  return (
    <div className="App">
      <main>
        <h1 className="display-1">React Shop</h1>
        <ShoplyNavbar/>
        <Routes/>
      </main>
    </div>
  );
}

export default App;
