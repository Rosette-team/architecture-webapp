import {observer} from "mobx-react";
import EmployeeTableRow from "./EmployeeTableRow";
import {useEffect, useState} from "react";

function EmployeeTable() {
    const [employees, setEmployees] = useState([
        {
            'name': '',
            'surname': '',
            'departmentId': '',
            'speciality': ''
        }
    ]);

    useEffect(() => {
        let headers = new Headers()
        headers.append('Authorization', 'Basic ' + btoa('user:user'));
        fetch('http://127.0.0.1:8080/doctor?departmentId=8',
            {
                method: 'GET',
                headers: headers
            })
            .then((response) => {
                response.json().then(
                    (value) => {
                        setEmployees(value)
                    }
                )
            })
    }, []);

    return(
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Код департамента</th>
                <th>Специальность</th>
                <th>Редактировать</th>
            </tr>
            </thead>
            <tbody>
                <EmployeeTableRow employee={employees[0]}/>
            </tbody>
        </table>
    )
}

export default observer(EmployeeTable)