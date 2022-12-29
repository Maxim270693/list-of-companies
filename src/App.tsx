import React from 'react';

import ListCompanies from "./components/listCompanies/listCompanies";
import EmployeeCompany from "./components/employeeCompany/employeeCompany";

import './App.css';

function App() {
    return (
        <div className="App">
            <ListCompanies/>
            <EmployeeCompany/>
        </div>
    );
}

export default App;
