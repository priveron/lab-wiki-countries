import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
      <CountryList />
        <Routes>
          <Route path=":id" element={<CountryDetails />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
