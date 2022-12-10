import {observer} from "mobx-react";
import WorkingWindowTable from "../WorkingWindowTable";
import {useNavigate, useParams} from "react-router";
import NavigationBar from "../NavigationBar";

function ScheduleEditRoute() {
    const {doctorId} = useParams()

    let navigate = useNavigate()

    function onCreateWorkingWindow() {
        navigate(`/employee/${doctorId}/schedule/new`)
    }

    return(
        <div>
            <NavigationBar/>
            <button type="button" className="btn btn-primary m-1" onClick={onCreateWorkingWindow}>
                <i className="bi bi-person-plus"/> Добавить рабочее окно
            </button>
            <WorkingWindowTable doctorId={doctorId}/>
        </div>
    )
}

export default observer(ScheduleEditRoute);