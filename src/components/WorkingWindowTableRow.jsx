import {observer} from "mobx-react";
import React from "react";
import {useNavigate} from "react-router";

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

    function onEdit() {
        navigate(`/employee/${props.workingWindow.doctorId}/schedule/${props.workingWindow.id}`)
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
                <button type="button" className="btn btn-danger">
                    <i className="bi bi-x-square"/> Удалить
                </button>
            </td>
        </tr>
    )
}

export default observer(WorkingWindowTableRow)