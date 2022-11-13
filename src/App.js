import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginRoute from "./components/routes/LoginRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import UsersRoute from "./components/routes/UsersRoute";
import {observer} from "mobx-react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginRoute/>}/>
            <Route path="/users" element={<ProtectedRoute><UsersRoute/></ProtectedRoute>}/>
            <Route path="*" element={<Navigate to={"/login"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
