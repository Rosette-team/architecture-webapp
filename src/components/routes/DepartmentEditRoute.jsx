import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {UserDataStoreContext} from "../../index";
import DepartmentApi from "../../backend/api/DepartmentApi";

function DepartmentEditRoute(props) {
    const [department, setDepartment] = useState({});
    const [name, setName] = useState('');

    const navigate = useNavigate();
    const {id} = useParams()

    let departmentApi = new DepartmentApi(React.useContext(UserDataStoreContext))

    useEffect(() => {
        departmentApi.getDepartment(id).then(
            (value) => {
                setDepartment(value)
            }
        )
    }, []);

    function handleSubmit(event) {
        departmentApi.updateDepartment(id, {
            'id': null,
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
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Код отделения</label>
                <div className="col-sm-10">
                    <input className="form-control" id="id" placeholder={department.id} readOnly/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Название</label>
                <div className="col-sm-10">
                    <input className="form-control" id="name" onChange={e => setName(e.target.value)} defaultValue={department.name}/>
                </div>
            </div>
            <button className="btn btn-primary" type="submit" >Сохранить</button>
            <button className="btn btn-danger" onClick={onCancel}>Отменить</button>
        </form>
    )
}

export default observer(DepartmentEditRoute);