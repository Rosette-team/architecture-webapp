import {observer} from "mobx-react";
import React from "react";

function WorkingWindowTableRow(props) {
    let beginDate = props.workingWindow.beginDate[2] + '.' + props.workingWindow.beginDate[1] + '.' + props.workingWindow.beginDate[0]
    let endDate = props.workingWindow.endDate[2] + '.' + props.workingWindow.endDate[1] + '.' + props.workingWindow.endDate[0]
    let beginTime = props.workingWindow.beginTime[0] + ':' + props.workingWindow.beginTime[1]
    let endTime = props.workingWindow.endTime[0] + ':' + props.workingWindow.endTime[1]

    return(
        <tr>
            <td>{beginDate}</td>
            <td>{endDate}</td>
            <td>{props.workingWindow.dayOfWeek}</td>
            <td>{beginTime}</td>
            <td>{endTime}</td>
            <td>
                <button type="button" className="btn btn-success">
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