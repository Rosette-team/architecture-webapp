import {observer} from "mobx-react";
import {useNavigate} from "react-router";

function DepartmentTableRow(props) {
    let navigate = useNavigate();

    function onEdit() {
        navigate('/department/' + props.department.id)
    }

    return(
        <tr>
            <td>{props.department.id}</td>
            <td>{props.department.name}</td>
            <td>
                <button type="button" className="btn btn-success" onClick={onEdit}>
                    <i className="bi bi-pencil-square"/> Данные
                </button>
                <button type="button" className="btn btn-danger">
                    <i className="bi bi-x-square"/> Удалить
                </button>
            </td>
        </tr>
    )
}

export default observer(DepartmentTableRow);