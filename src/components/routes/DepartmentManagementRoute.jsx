import {observer} from "mobx-react";
import NavigationBar from "../NavigationBar";
import DepartmentTable from "../DepartmentTable";
import {useNavigate} from "react-router";

function DepartmentManagementRoute() {
    let navigation = useNavigate()

    function onCreateDepartment() {
        navigation('/department/new')
    }

    return(
        <div>
            <NavigationBar/>
            <button type="button" className="btn btn-primary" onClick={onCreateDepartment}>
                <i className="bi bi-person-plus"/> Добавить отделение
            </button>
            <DepartmentTable/>
        </div>
    )
}

export default observer(DepartmentManagementRoute);