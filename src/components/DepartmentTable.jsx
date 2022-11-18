import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import DepartmentTableRow from "./DepartmentTableRow";
import {UserDataStoreContext} from "../index";
import DepartmentApi from "../backend/api/DepartmentApi";

function DepartmentTable() {
    const [departments, setDepartments] = useState([]);

    let departmentApi = new DepartmentApi(React.useContext(UserDataStoreContext))

    useEffect(() => {
        departmentApi.getDepartments().then(
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