import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {provideRequest} from "../../api/ApiController";
import {useSearchParams} from "react-router-dom";

function EmployeeEditRoute(props) {
    const [employee, setEmployee] = useState({});
    const [departments, setDepartments] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        provideRequest('http://localhost:8080/' + searchParams.get('employeeType') + '/' + id).then(
            (value) => {
                setEmployee(value)
                setName(value.name)
                setSurname(value.surname)
                setSpeciality(value.speciality)
            }
        )
        provideRequest('http://localhost:8080/department').then(
            (value) => {
                setDepartments(value)
            }
        )
    }, []);

    function handleSubmit(event) {
        if (departmentId != 0) {
            provideRequest('http://localhost:8080/' + searchParams.get('employeeType') + '/' + id, 'PUT', {
                'name': name,
                'surname': surname,
                'speciality': speciality,
                'departmentId': departmentId
            }).then()
        } else {
            provideRequest('http://localhost:8080/' + searchParams.get('employeeType') + '/' + id, 'PUT', {
                'name': name,
                'surname': surname,
                'speciality': speciality,
            }).then()
        }
        event.preventDefault();
        navigate('/employee')
    }

    function onCancel() {
        navigate('/employee')
    }

    let specialityComponent = null
    if (searchParams.get('employeeType') == 'doctor') {
        specialityComponent = <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Специальность</label>
            <div className="col-sm-10">
                <input className="form-control" id="surname" onChange={e => setSpeciality(e.target.value)} defaultValue={employee.speciality}/>
            </div>
        </div>
    }

    let departmentComponents = [
        <option value={0} key={0}>Не привязан</option>
    ]
    departments.forEach(department => {
        if (department.id == employee.departmentId) {
            departmentComponents.push(
                <option value={department.id} key={department.id} selected>{department.name}</option>
            )
        } else {
            departmentComponents.push(
                <option value={department.id} key={department.id}>{department.name}</option>
            )
        }
    })


    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Имя</label>
                <div className="col-sm-10">
                    <input className="form-control" id="name" onChange={e => setName(e.target.value)} defaultValue={employee.name}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Фамилия</label>
                <div className="col-sm-10">
                    <input className="form-control" id="surname" onChange={e => setSurname(e.target.value)} defaultValue={employee.surname}/>
                </div>
            </div>
            {specialityComponent}
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Отделение</label>
                <div className="col-sm-10">
                    <select className="form-select" aria-label="Default select example" onChange={e => setDepartmentId(e.target.value)}>
                        {departmentComponents}
                    </select>
                </div>
            </div>

            <button className="btn btn-primary" type="submit" >Сохранить</button>
            <button className="btn btn-danger" onClick={onCancel}>Отменить</button>
        </form>
    )
}

export default observer(EmployeeEditRoute)