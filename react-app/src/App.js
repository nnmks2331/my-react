
import ProductList from './components/ProductList';
import Slider from './components/Slider';
import Navbar from './components/navbar';
import logo from './logo.svg';
import {Routes , Route}from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route
      path="/"
      element={
      <>
      <Slider/>
      <ProductList/>
      </>}
      />
      <Route path="about" element={<About/>}/>
    </Routes>
   
    
    </div>
  );
}

export default App;
