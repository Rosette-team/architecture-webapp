import {observer} from "mobx-react";
import {useNavigate} from "react-router";
import DepartmentApi from "../backend/api/DepartmentApi";
import React from "react";
import {UserDataStoreContext} from "../index";

function DepartmentTableRow(props) {
    let navigate = useNavigate();

    let departmentApi = new DepartmentApi(React.useContext(UserDataStoreContext))

    function onEdit() {
        navigate('/department/' + props.department.id)
    }

    function onDelete() {
        departmentApi.deleteDepartment(props.department.id)
    }

    return(
        <tr>
            <td>{props.department.id}</td>
            <td>{props.department.name}</td>
            <td>
                <button type="button" className="btn btn-success m-1" onClick={onEdit}>
                    <i className="bi bi-pencil-square"/> Данные
                </button>
                <button type="button" className="btn btn-danger m-1" onClick={onDelete}>
                    <i className="bi bi-x-square"/> Удалить
                </button>
            </td>
        </tr>
    )
}

export default observer(DepartmentTableRow);