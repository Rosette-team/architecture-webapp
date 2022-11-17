import {observer} from "mobx-react";

function NavigationBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/employee">Управление сотрудниками</a>
                    <a className="nav-item nav-link" href="/department">Управление отделениями</a>
                </div>
            </div>
        </nav>
    )
}

export default observer(NavigationBar);