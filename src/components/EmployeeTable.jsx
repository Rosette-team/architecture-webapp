import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import EmployeeTableRow from "./EmployeeTableRow";

function EmployeeTable() {
    const [employees, setEmployees] = useState([
    ]);

    useEffect(() => {
        let headers = new Headers()
        headers.append('Authorization', 'Basic ' + btoa('user:user'));
        fetch('http://127.0.0.1:8080/doctor',
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