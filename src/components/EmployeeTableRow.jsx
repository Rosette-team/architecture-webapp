import {observer} from "mobx-react";
import {useNavigate} from "react-router";

function EmployeeTableRow(props) {
    let navigate = useNavigate()

    function onEdit() {
        if (props.employee.role == 'ROLE_DOCTOR') {
            navigate('/employee/' + props.employee.id + '?employeeType=doctor')
        } else {
            navigate('/employee/' + props.employee.id + '?employeeType=manager')
        }
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
                <button type="button" className="btn btn-danger">
                    <i className="bi bi-x-square"/> Удалить
                </button>
            </td>
        </tr>
    )
}
export default observer(EmployeeTableRow)