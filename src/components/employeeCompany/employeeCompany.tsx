import React from 'react';

import SelectAll from "../selectAll/selectAll";

const EmployeeCompany = () => {
    return (
        <div>
            <h1>Table employee current company</h1>
            <SelectAll/>
            <table style={{border: '1px solid black'}}>
                <thead>
                <tr>
                    <th>Чекбокс</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Должность</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>Ivanov</td>
                    <td>Ivan</td>
                    <td>Programmer</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>Petrov</td>
                    <td>Petr</td>
                    <td>HouseWorker</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>Vladimirov</td>
                    <td>Vladimir</td>
                    <td>Driver</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>Sidorov</td>
                    <td>Kostya</td>
                    <td>Builder</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>Zhuk</td>
                    <td>Maxim</td>
                    <td>Engineer</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>Vetrova</td>
                    <td>Julia</td>
                    <td>Teacher</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeCompany;