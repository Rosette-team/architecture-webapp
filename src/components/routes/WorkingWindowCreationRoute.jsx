import {observer} from "mobx-react";
import FormRow from "../FormGroup";
import React, {useState} from "react";
import WorkingWindowApi from "../../backend/api/WorkingWindowApi";
import {UserDataStoreContext} from "../../index";
import {useNavigate, useParams} from "react-router";
import DayOfWeekInput from "../DayOfWeekInput";

function WorkingWindowCreationRoute() {
    const [workingWindow, setWorkingWindow] = useState({});

    const [beginDate, setBeginDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [dayOfWeek, setDayOfWeek] = useState(null);
    const [beginTime, setBeginTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const {doctorId} = useParams()

    let workingWindowApi = new WorkingWindowApi(React.useContext(UserDataStoreContext))

    let navigate = useNavigate()

    function onSubmit(event) {
        event.preventDefault();
        if (new Date(beginDate) < new Date()) {
            return;
        }
        if (new Date(beginDate) > new Date(endDate)) {
            return
        }
        if (beginTime > endTime) {
            return
        }
        if (beginDate == null || endDate == null || dayOfWeek == null || beginTime == null || endTime == null) {
            return;
        }

        workingWindowApi.createWorkingWindow({
            "doctorId": doctorId,
            "beginDate": beginDate,
            "endDate": endDate,
            "dayOfWeek": dayOfWeek,
            "beginTime": beginTime,
            "endTime": endTime
        }).then()
        navigate(`/employee/${doctorId}/schedule`)
    }

    function onCancel() {
        navigate(`/employee/${doctorId}/schedule`)
    }

    return(
        <form onSubmit={onSubmit}>
            <FormRow label="Дата начала">
                <input className="form-control" type="date" id="name" defaultValue={workingWindow.beginDate} onChange={e => setBeginDate(e.target.value)}/>
            </FormRow>
            <FormRow label="Дата окончания">
                <input className="form-control" type="date" id="name" defaultValue={workingWindow.endDate} onChange={e => setEndDate(e.target.value)}/>
            </FormRow>
            <FormRow label="День недели">
                <DayOfWeekInput defaultValue={workingWindow.dayOfWeek} onChange={e => setDayOfWeek(e.target.value)}/>
            </FormRow>
            <FormRow label="Время начала">
                <input className="form-control" type="time" id="name" defaultValue={workingWindow.beginTime} onChange={e => setBeginTime(e.target.value)}/>
            </FormRow>
            <FormRow label="Время окончания">
                <input className="form-control" type="time" id="name" defaultValue={workingWindow.endTime} onChange={e => setEndTime(e.target.value)}/>
            </FormRow>
            <button className="btn btn-primary" type="submit" >Сохранить</button>
            <button className="btn btn-danger" onClick={onCancel}>Отменить</button>
        </form>
    )
}

export default observer(WorkingWindowCreationRoute)