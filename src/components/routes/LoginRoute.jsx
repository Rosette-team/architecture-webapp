import React, {useState} from "react";
import {UserDataStoreContext} from "../../index";
import {observer} from "mobx-react";
import {useNavigate} from "react-router";

function LoginRoute() {
    const navigate = useNavigate();

    const userDataStore = React.useContext(UserDataStoreContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        userDataStore.setUsername(username)
        userDataStore.setPassword(password)
        navigate('/users')
        event.preventDefault();
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control" name="username" type="username" placeholder="Имя пользователя" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <input className="form-control" name="password" type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-primary" type="submit">Войти</button>
            </form>
        </div>
    )
}

export default observer(LoginRoute);