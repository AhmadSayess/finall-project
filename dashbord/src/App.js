import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Admins from "./pages/Admins";
import Employees from "./pages/Employees";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Postes from "./pages/Postes";
import { Category } from "./pages/Category";
import { Aboutus } from "./pages/Aboutus";
import { Message } from "./pages/Message";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="Admins" element={<Admins />} />
            <Route path="postes" element={<Postes />} />
            <Route path="Category" element={<Category />} />
            <Route path="Employees" element={<Employees />} />
            <Route path="Teams" element={<Teams />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Aboutus" element={<Aboutus />} />
            <Route path="Messages" element={<Message />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
