import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginRoute from "./components/routes/LoginRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import {observer} from "mobx-react";
import EmployeeManagementRoute from "./components/routes/EmployeeManagementRoute";
import DepartmentManagementRoute from "./components/routes/DepartmentManagementRoute";
import DepartmentEditRoute from "./components/routes/DepartmentEditRoute";
import EmployeeEditRoute from "./components/routes/EmployeeEditRoute";
import DepartmentCreationRoute from "./components/routes/DepartmentCreationRoute";
import EmployeeCreationRoute from "./components/routes/EmployeeCreationRoute";
import ScheduleEditRoute from "./components/routes/ScheduleEditRoute";
import WorkingWindowEditRoute from "./components/routes/WorkingWindowEditRoute";
import WorkingWindowCreationRoute from "./components/routes/WorkingWindowCreationRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginRoute/>}/>
            <Route path="/employee" element={<ProtectedRoute><EmployeeManagementRoute/></ProtectedRoute>}/>
            <Route path="/employee/new" element={<ProtectedRoute><EmployeeCreationRoute/></ProtectedRoute>}/>
            <Route path="/employee/:id" element={<ProtectedRoute><EmployeeEditRoute/></ProtectedRoute>}/>
            <Route path="/employee/:doctorId/schedule" element={<ProtectedRoute><ScheduleEditRoute/></ProtectedRoute>}/>
            <Route path="/employee/:doctorId/schedule/new" element={<ProtectedRoute><WorkingWindowCreationRoute/></ProtectedRoute>}/>
            <Route path="/employee/:doctorId/schedule/:workingWindowId" element={<ProtectedRoute><WorkingWindowEditRoute/></ProtectedRoute>}/>
            <Route path="/department" element={<ProtectedRoute><DepartmentManagementRoute/></ProtectedRoute>}/>
            <Route path="/department/new" element={<ProtectedRoute><DepartmentCreationRoute/></ProtectedRoute>}/>
            <Route path="/department/:id" element={<ProtectedRoute><DepartmentEditRoute/></ProtectedRoute>}/>
            <Route path="*" element={<Navigate to={"/login"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
