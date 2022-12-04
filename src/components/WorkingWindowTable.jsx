import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {UserDataStoreContext} from "../index";
import WorkingWindowApi from "../backend/api/WorkingWindowApi";
import EmployeeTableRow from "./EmployeeTableRow";
import WorkingWindowTableRow from "./WorkingWindowTableRow";

function WorkingWindowTable(props) {
    const [workingWindows, setWorkingWindows] = useState([]);

    let workingWindowApi = new WorkingWindowApi(React.useContext(UserDataStoreContext))

    useEffect(() => {
        workingWindowApi.getWorkingWindows(props.doctorId).then(
            (value) => {
                setWorkingWindows(value)
                console.log(value)
            }
        )
    }, []);

    let rows = []
    workingWindows.forEach(workingWindow => rows.push(<WorkingWindowTableRow key={workingWindow.id} workingWindow={workingWindow}/>))

    return(
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Начало действия</th>
                <th>Конец действия</th>
                <th>День недели</th>
                <th>Время начала</th>
                <th>Время окончания</th>
                <th>Редактировать</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default observer(WorkingWindowTable);