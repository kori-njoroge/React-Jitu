import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './components/all'

function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<All/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
