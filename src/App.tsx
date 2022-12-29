import React from 'react';

import ListCompany from "./components/listCompany/listCompany";
import EmployeeCompany from "./components/employeeCompany/employeeCompany";

import './App.css';

function App() {
    return (
        <div className="App">
            <ListCompany/>
            <EmployeeCompany/>
        </div>
    );
}

export default App;
