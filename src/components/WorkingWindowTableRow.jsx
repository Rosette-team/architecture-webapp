import {observer} from "mobx-react";
import React from "react";
import {useNavigate} from "react-router";
import {UserDataStoreContext} from "../index";
import WorkingWindowApi from "../backend/api/WorkingWindowApi";

function WorkingWindowTableRow(props) {
    const navigate = useNavigate();

    let days = {
        "MONDAY": "Понедельник",
        "TUESDAY": "Вторник",
        "WEDNESDAY": "Среда",
        "THURSDAY": "Четверг",
        "FRIDAY": "Пятница",
        "SUNDAY": "Суббота",
        "SATURDAY": "Воскресенье",
    }

    let workingWindowApi = new WorkingWindowApi(React.useContext(UserDataStoreContext))

    function onEdit() {
        navigate(`/employee/${props.workingWindow.doctorId}/schedule/${props.workingWindow.id}`)
    }

    function onDelete() {
        workingWindowApi.deleteWorkingWindow(props.workingWindow.id).then()
    }

    return(
        <tr>
            <td>{props.workingWindow.beginDate}</td>
            <td>{props.workingWindow.endDate}</td>
            <td>{days[props.workingWindow.dayOfWeek]}</td>
            <td>{props.workingWindow.beginTime}</td>
            <td>{props.workingWindow.endTime}</td>
            <td>
                <button type="button" className="btn btn-success" onClick={onEdit}>
                    <i className="bi bi-pencil-square"/> Данные
                </button>
                <button type="button" className="btn btn-danger" onClick={onDelete}>
                    <i className="bi bi-x-square"/> Удалить
                </button>
            </td>
        </tr>
    )
}

export default observer(WorkingWindowTableRow)