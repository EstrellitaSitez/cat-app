import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import BreedContainer from './BreedContainer';
import NotFound from './NotFound';

function App() {
  console.log("public url", process.env.PUBLIC_URL)
  return (
    <div className="App">
      
       <Link style={{textDecoration:'none'}} to='/'><h1 className="App-header">CATz </h1></Link>
  
      {/* <h1 className="App-header">CatZzz </h1> */}
      <Routes  basename={process.env.PUBLIC_URL}>
        <Route exact={true} path="/breed/:breed" element={<BreedContainer />} />
        <Route exact={true} path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
