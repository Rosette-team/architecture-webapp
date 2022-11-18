import {observer} from "mobx-react";
import {useNavigate} from "react-router";
import DepartmentApi from "../backend/api/DepartmentApi";
import React from "react";
import {UserDataStoreContext} from "../index";
import DoctorApi from "../backend/api/DoctorApi";

function EmployeeTableRow(props) {
    let navigate = useNavigate()

    let doctorApi = new DoctorApi(React.useContext(UserDataStoreContext))

    function onEdit() {
        if (props.employee.role == 'ROLE_DOCTOR') {
            navigate('/employee/' + props.employee.id + '?employeeType=doctor')
        } else {
            navigate('/employee/' + props.employee.id + '?employeeType=manager')
        }
    }

    function onDelete() {
        doctorApi.deleteDoctor(props.employee.id)
    }

    return(
        <tr>
            <td>{props.employee.name}</td>
            <td>{props.employee.surname}</td>
            <td>{props.employee.departmentId}</td>
            <td>{props.employee.speciality}</td>
            <td>
                <button type="button" className="btn btn-success" onClick={onEdit}>
                    <i className="bi bi-pencil-square"/> Данные
                </button>
                <button type="button" className="btn btn-warning">
                    <i className="bi bi-calendar4-week"/> Расписание
                </button>
                <button type="button" className="btn btn-danger" onClick={onDelete}>
                    <i className="bi bi-x-square"/> Удалить
                </button>
            </td>
        </tr>
    )
}
export default observer(EmployeeTableRow)