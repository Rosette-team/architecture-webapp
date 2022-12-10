import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import DoctorApi from "../../backend/api/DoctorApi";
import {UserDataStoreContext} from "../../index";
import DepartmentApi from "../../backend/api/DepartmentApi";
import ManagerApi from "../../backend/api/ManagerApi";
import FormGroup from "../FormGroup";

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

    let doctorApi = new DoctorApi(React.useContext(UserDataStoreContext))
    let managerApi = new ManagerApi(React.useContext(UserDataStoreContext))
    let departmentApi = new DepartmentApi(React.useContext(UserDataStoreContext))

    useEffect(() => {
        if (searchParams.get('role') == 'doctor') {
            doctorApi.getDoctor(id).then(
                (value) => {
                    setEmployee(value)
                    setName(value.name)
                    setSurname(value.surname)
                    setSpeciality(value.speciality)
                }
            )
        } else {
            managerApi.getManager(id).then(
                (value) => {
                    setEmployee(value)
                    setName(value.name)
                    setSurname(value.surname)
                    setSpeciality(value.speciality)
                }
            )
        }
        departmentApi.getDepartments().then(
            (value) => {
                setDepartments(value)
            }
        )
    }, []);

    function handleSubmit(event) {
        let body = {}
        if (departmentId != 0) {
            body = {
                'name': name,
                'surname': surname,
                'speciality': speciality,
                'departmentId': departmentId
            }
        } else {
            body = {
                'name': name,
                'surname': surname,
                'speciality': speciality,
                'departmentId': departmentId
            }
        }
        if (searchParams.get('role') == 'doctor') {
            doctorApi.updateDoctor(id, body);
        } else {
            managerApi.updateManager(id, body);
        }
        event.preventDefault();
        navigate('/employee')
    }

    function onCancel() {
        navigate('/employee')
    }

    let specialityComponent = null
    if (searchParams.get('role') == 'doctor') {
        specialityComponent =
            <FormGroup label="Специальность">
                <input className="form-control" id="surname" onChange={e => setSpeciality(e.target.value)} defaultValue={employee.speciality}/>
            </FormGroup>
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
            <FormGroup label="Имя">
                <input className="form-control" id="name" onChange={e => setName(e.target.value)} defaultValue={employee.name}/>
            </FormGroup>
            <FormGroup label="Фамилия">
                <input className="form-control" id="surname" onChange={e => setSurname(e.target.value)} defaultValue={employee.surname}/>
            </FormGroup>
            {specialityComponent}
            <FormGroup label="Отделение">
                <select className="form-select" aria-label="Default select example" onChange={e => setDepartmentId(e.target.value)}>
                    {departmentComponents}
                </select>
            </FormGroup>

            <button className="btn btn-primary" type="submit" >Сохранить</button>
            <button className="btn btn-danger" onClick={onCancel}>Отменить</button>
        </form>
    )
}

export default observer(EmployeeEditRoute)