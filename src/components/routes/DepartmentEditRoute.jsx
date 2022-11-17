import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {provideRequest} from "../../api/ApiController";
import {useNavigate, useParams} from "react-router";

function DepartmentEditRoute(props) {
    const [department, setDepartment] = useState({});
    const [name, setName] = useState('');

    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        provideRequest('http://localhost:8080/department/' + id).then(
            (value) => {
                setDepartment(value)
            }
        )
    }, []);

    function handleSubmit(event) {
        provideRequest('http://localhost:8080/department/' + id, 'PUT', {
            'id': null,
            'name': name
        }).then()
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