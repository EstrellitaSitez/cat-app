import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import BreedContainer from './BreedContainer'

function App() {
  
  return (
    <div className="App">
      
       <Link style={{textDecoration:'none'}} to='/'><h1 className="App-header">CATz </h1></Link>
  
      {/* <h1 className="App-header">CatZzz </h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breed/:breed" element={<BreedContainer />} />
      </Routes>

    </div>
  );
}

export default App;
