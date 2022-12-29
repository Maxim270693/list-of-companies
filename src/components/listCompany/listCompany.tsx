import React from 'react';

import SelectAll from "../selectAll/selectAll";

const ListCompany = () => {
    return (
        <div>
            <h1>Table list with company</h1>
            <SelectAll/>
            <table>
                <thead>
                <tr>
                    <th>Чекбокс</th>
                    <th>Название компании</th>
                    <th>Кол-во сотрудников</th>
                    <th>Адрес</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>MTZ</td>
                    <td>10</td>
                    <td>Minsk</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>HORIZONT</td>
                    <td>5</td>
                    <td>Brest</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>BELSHINA</td>
                    <td>6</td>
                    <td>Gomel</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListCompany;