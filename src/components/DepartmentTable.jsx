import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {provideRequest} from "../api/ApiController";
import DepartmentTableRow from "./DepartmentTableRow";

function DepartmentTable() {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        provideRequest('http://localhost:8080/department').then(
            (value) => {
                setDepartments(value)
            }
        )
    }, []);

    let rows = []
    departments.forEach(department => rows.push(<DepartmentTableRow key={department.id} department={department}/>))

    return(
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Код отделения</th>
                <th>Название</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default observer(DepartmentTable);