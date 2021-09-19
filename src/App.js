import logo from './logo.svg';
import './App.css';
import PotentialTable from './components/potentialTable';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <PotentialTable></PotentialTable>
    </div>
  );
}

export default App;
