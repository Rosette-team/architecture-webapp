import {observer} from "mobx-react";
import WorkingWindowTable from "../WorkingWindowTable";
import {useNavigate, useParams} from "react-router";

function ScheduleEditRoute() {
    const {doctorId} = useParams()

    let navigate = useNavigate()

    function onCreateWorkingWindow() {
        navigate(`/employee/${doctorId}/schedule/new`)
    }

    return(
        <div>
            <button type="button" className="btn btn-primary" onClick={onCreateWorkingWindow}>
                <i className="bi bi-person-plus"/> Добавить рабочее окно
            </button>
            <WorkingWindowTable doctorId={doctorId}/>
        </div>
    )
}

export default observer(ScheduleEditRoute);