import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import BreedContainer from './BreedContainer';
import NotFound from './NotFound';

function App() {
  
  return (
    <div className="App">
      
       <Link style={{textDecoration:'none'}} to='/'><h1 className="App-header">CATz </h1></Link>
  
      {/* <h1 className="App-header">CatZzz </h1> */}
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact={true} path="/breed/:breed" element={<BreedContainer />} />
        <Route exact={true} path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
