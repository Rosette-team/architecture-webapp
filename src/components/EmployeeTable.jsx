import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import EmployeeTableRow from "./EmployeeTableRow";
import {UserDataStoreContext} from "../index";
import DoctorApi from "../backend/api/DoctorApi";
import ManagerApi from "../backend/api/ManagerApi";

function EmployeeTable() {
    const [employees, setEmployees] = useState([]);

    let doctorApi = new DoctorApi(React.useContext(UserDataStoreContext))
    let managerApi = new ManagerApi(React.useContext(UserDataStoreContext))

    useEffect(() => {
        doctorApi.getDoctors().then(
            (doctors) =>
            {
                managerApi.getManagers().then(
                    (managers) => {
                        setEmployees(doctors.concat(managers))
                    })
            })
    }, []);

    let rows = []
    employees.forEach(employee => rows.push(<EmployeeTableRow key={employee.id} employee={employee}/>))

    return(
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Код отделения</th>
                <th>Специальность</th>
                <th>Редактировать</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default observer(EmployeeTable)