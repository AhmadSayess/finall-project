import './App.css';
// import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Nabbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login';
function App() {
  return (
  <BrowserRouter>
  <Routes>

    <Route index path="/" element={<Navbar/>}/>
    <Route index path="/login" element={<Login/>}/>

  </Routes>
  </BrowserRouter>    
      
  );
}

export default App;
