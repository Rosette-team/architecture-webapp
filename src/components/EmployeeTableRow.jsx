import {observer} from "mobx-react";

function EmployeeTableRow(props) {
    return(
        <tr>
            <td>{props.employee.name}</td>
            <td>{props.employee.surname}</td>
            <td>{props.employee.departmentId}</td>
            <td>{props.employee.speciality}</td>
            <td>
                <button type="button" className="btn btn-success">
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