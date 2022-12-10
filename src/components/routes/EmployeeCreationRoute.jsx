import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import DoctorApi from "../../backend/api/DoctorApi";
import {UserDataStoreContext} from "../../index";
import DepartmentApi from "../../backend/api/DepartmentApi";
import FormGroup from "../FormGroup";

function EmployeeCreationRoute(props) {
    const [employee, setEmployee] = useState({});
    const [departments, setDepartments] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('doctor');
    const [speciality, setSpeciality] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {id} = useParams()

    let doctorApi = new DoctorApi(React.useContext(UserDataStoreContext))
    let departmentApi = new DepartmentApi(React.useContext(UserDataStoreContext))

    useEffect(() => {
        doctorApi.getDoctor(id).then(
            (value) => {
                setEmployee(value)
                setName(value.name)
                setSurname(value.surname)
                setSpeciality(value.speciality)
            }
        )
        departmentApi.getDepartments().then(
            (value) => {
                setDepartments(value)
            }
        )
    }, []);

    function handleSubmit(event) {
        if (departmentId != 0) {
            doctorApi.createDoctor({
                'name': name,
                'surname': surname,
                'speciality': speciality,
                'departmentId': departmentId,
                'username': username,
                'password': password
            })
        } else {
            doctorApi.createDoctor({
                'name': name,
                'surname': surname,
                'speciality': speciality,
                'username': username,
                'password': password
            })
        }
        event.preventDefault();
        navigate('/employee')
    }

    function onCancel() {
        navigate('/employee')
    }

    let specialityComponent = null
    if (role == 'doctor') {
        specialityComponent = <FormGroup label="Специальность">
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
            <FormGroup label="Роль">
                <select className="form-select" aria-label="Default select example" onChange={e => setRole(e.target.value)}>
                    <option value="doctor" key={0}>Доктор</option>
                    <option value="manager" key={0}>Менеджер</option>
                </select>
            </FormGroup>
            <FormGroup label="Отделение">
                <select className="form-select" aria-label="Default select example" onChange={e => setDepartmentId(e.target.value)}>
                    {departmentComponents}
                </select>
            </FormGroup>
            {specialityComponent}
            <FormGroup label="Имя пользователя">
                <input className="form-control" id="username" type="username" onChange={e => setUsername(e.target.value)} defaultValue={employee.surname}/>
            </FormGroup>
            <FormGroup label="Пароль">
                <input className="form-control" id="password" type="password" onChange={e => setPassword(e.target.value)} defaultValue={employee.surname}/>
            </FormGroup>
            <button className="btn btn-primary" type="submit" >Сохранить</button>
            <button className="btn btn-danger" onClick={onCancel}>Отменить</button>
        </form>
    )
}

export default observer(EmployeeCreationRoute)