
import './App.css';
import MemeMaker from './MemeMaker/MemeMaker';
import Todos from './TodoList/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MemeMaker/>
        <Todos/>
      </header>
    </div>
  );
}

export default App;
