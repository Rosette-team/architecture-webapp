import {observer} from "mobx-react";
import NavigationBar from "../NavigationBar";
import DepartmentTable from "../DepartmentTable";

function DepartmentManagementRoute() {
    return(
        <div>
            <NavigationBar/>
            <button type="button" className="btn btn-primary">
                <i className="bi bi-person-plus"/> Добавить отделение
            </button>
            <DepartmentTable/>
        </div>
    )
}

export default observer(DepartmentManagementRoute);