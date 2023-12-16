import { Route, Routes } from "react-router-dom";
import Navbar from "./elements/Navbar";
import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/EmployeeForm";




function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/home" element={<Dashboard></Dashboard>}/>
      <Route path="/form" element={<EmployeeForm></EmployeeForm>}></Route>
    </Routes>
    
    
    </>
  );
}

export default App;
