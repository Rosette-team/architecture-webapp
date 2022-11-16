import {observer} from "mobx-react";
import NavigationBar from "../NavigationBar";
import EmployeeTable from "../EmployeeTable";

function EmployeeManagementRoute() {
    return(
        <div>
            <NavigationBar/>
            <button type="button" className="btn btn-primary">
                <i className="bi bi-person-plus"/> Добавить сотрудника
            </button>
            <EmployeeTable/>
        </div>
    )
}

export default observer(EmployeeManagementRoute);