import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginRoute from "./components/routes/LoginRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import {observer} from "mobx-react";
import EmployeeManagementRoute from "./components/routes/EmployeeManagementRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginRoute/>}/>
            <Route path="/users" element={<ProtectedRoute><EmployeeManagementRoute/></ProtectedRoute>}/>
            <Route path="*" element={<Navigate to={"/login"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
