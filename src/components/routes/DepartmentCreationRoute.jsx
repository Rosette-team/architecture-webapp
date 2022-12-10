import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {UserDataStoreContext} from "../../index";
import DepartmentApi from "../../backend/api/DepartmentApi";
import FormRow from "../FormGroup";

function DepartmentCreationRoute(props) {
    const [department, setDepartment] = useState({});
    const [name, setName] = useState('');

    const navigate = useNavigate();
    const {id} = useParams()

    let departmentApi = new DepartmentApi(React.useContext(UserDataStoreContext))

    function handleSubmit(event) {
        departmentApi.createDepartment({
            'name': name
        })
        event.preventDefault();
        navigate('/department')
    }

    function onCancel() {
        navigate('/department')
    }

    return(
        <form onSubmit={handleSubmit}>
            <FormRow label="Название">
                <input className="form-control" id="name" onChange={e => setName(e.target.value)}/>
            </FormRow>
            <button className="btn btn-primary" type="submit" >Сохранить</button>
            <button className="btn btn-danger" onClick={onCancel}>Отменить</button>
        </form>
    )
}

export default observer(DepartmentCreationRoute);