import {observer} from "mobx-react";
import WorkingWindowTable from "../WorkingWindowTable";
import {useParams} from "react-router";

function ScheduleEditRoute() {
    const {doctorId} = useParams()

    function onCreateWorkingWindow() {

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