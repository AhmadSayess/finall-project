import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";
import { Activities } from "./pages/Activities";
import { Dashbord } from "./pages/Dashbor/Dashbord";
import Footer from "./components/Footer/Footer";
import { Activitiess } from "./pages/Activitiess";
import ProtectedRoute from "./components/protectedRoute";
import { ActivitiesCat } from "./pages/ActivitiesCat";
import { Loading } from "./components/Loading/Loading";
// import { appendFile } from 'fs';

function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute token={token} />}>
          <Route index path="/dashbord" element={<Dashbord />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route index path="/" element={<Home />} />
        <Route index path="/activities/:id" element={<ActivitiesCat />} />
        <Route index path="/activities" element={<Activities />} />
        <Route index path="/contactus" element={<ContactUs />} />
        <Route index path="/footer" element={<Footer />} />
        <Route index path="/activitie/:id" element={<Activitiess />} />
        <Route index path="/loading" element={<Loading />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
