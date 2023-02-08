import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './components/all'
import Errorpage from './components/errorpage';
import Singleitem from './components/singleitem';
import AllProducts from './components/allproducts';
import Category from './components/category';

function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<All/>}/>
          <Route path='/singleproduct' element ={<All/>}/>
          <Route path='/singleitem' element={<Singleitem />}/>
          <Route path='/singleitem/' element={<Singleitem />}/>
          <Route path='/allproducts' element={<AllProducts />}/>
          <Route path='/category' element ={<Category />}/>
          <Route path='*' element={<Errorpage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
