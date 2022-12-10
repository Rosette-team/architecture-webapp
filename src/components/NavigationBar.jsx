import {observer} from "mobx-react";
import React from "react";
import {UserDataStoreContext} from "../index";
import {useNavigate} from "react-router";

function NavigationBar() {
    const userDataStore = React.useContext(UserDataStoreContext)

    const navigate = useNavigate()

    function onLogout() {
        userDataStore.setUsername(null)
        userDataStore.setPassword(null)
        navigate('/login')
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/employee">Управление сотрудниками</a>
                    <a className="nav-item nav-link" href="/department">Управление отделениями</a>
                </div>
            </div>
            <div className="mr-auto" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" onClick={onLogout}>Выход</a>
                </div>
            </div>
        </nav>
    )
}

export default observer(NavigationBar);