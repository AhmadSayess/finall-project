import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import { Activities } from './pages/Activities';
import { Dashbord } from './pages/Dashbor/Dashbord';
import Footer from "./components/Footer/Footer";
import { Activitiess } from './pages/Activitiess';
// import { appendFile } from 'fs';



function App() {
  return (
  <BrowserRouter>
  <Routes>

 
  {localStorage.getItem("token") !==null?   <Route index path="/dashbord" element={<Dashbord/>}/> :     <Route index path="/login" element={<Login/>}/>
 }
  <Route index path="/login" element={<Login/>}/>
  
  <Route index path="/dashbord" element={<Dashbord/>}/>
  <Route index path="/" element={<Home/>}/>
  <Route index path="/activities" element={<Activities/>}/>
  <Route index path="/contactus" element={<ContactUs/>}/>
  <Route index path="/footer" element={<Footer/>}/>
  <Route index path="/activitie/:id" element={<Activitiess/>}/>


 
  </Routes>
  </BrowserRouter>    
      
  );
}

export default App;
