import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import EmployeeList from './Components/EmployeeList';
import Employee from './Components/Employee';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<EmployeeList />}></Route>
            <Route path="/employees" element={<EmployeeList />}></Route>
            <Route path="/add-employee" element={<Employee />} ></Route>
            <Route path="/edit-employee/:id" element={<Employee />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;