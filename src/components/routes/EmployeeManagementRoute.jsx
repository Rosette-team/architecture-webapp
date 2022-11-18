import {observer} from "mobx-react";
import NavigationBar from "../NavigationBar";
import EmployeeTable from "../EmployeeTable";
import {useNavigate} from "react-router";

function EmployeeManagementRoute() {
    let navigate = useNavigate()

    function onCreateEmployee() {
        navigate('/employee/new')
    }

    return(
        <div>
            <NavigationBar/>
            <button type="button" className="btn btn-primary" onClick={onCreateEmployee}>
                <i className="bi bi-person-plus"/> Добавить сотрудника
            </button>
            <EmployeeTable/>
        </div>
    )
}

export default observer(EmployeeManagementRoute);