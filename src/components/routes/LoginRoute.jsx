import React, {useEffect, useState} from "react";
import {UserDataStoreContext} from "../../index";
import {observer} from "mobx-react";
import './LoginRoute.css'
import {useNavigate} from "react-router";
import UserApi from "../../backend/api/UserApi";

function LoginRoute() {
    const navigate = useNavigate();

    const userDataStore = React.useContext(UserDataStoreContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isWrongCredentials, setIsWrongCredentials] = useState(false);

    useEffect(() => {
        if (userDataStore.username != null) {
            navigate('/employee')
        }
    }, []);

    function handleSubmit(event) {
        userDataStore.setUsername(username)
        userDataStore.setPassword(password)
        let userApi = new UserApi(userDataStore)
        userApi.login().then(
            (value) => {
                if (value != null) {
                    navigate('/employee')
                }
                else {
                    setIsWrongCredentials(true)
                }
            }
        )
        event.preventDefault();
    }

    return(
        <div className="container-fluid login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group m-2">
                    <input className="form-control" name="username" type="username" placeholder="Имя пользователя" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="form-group m-2">
                    <input className="form-control" name="password" type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-primary m-1" type="submit">Войти</button>
                { isWrongCredentials &&
                    <p className="text-danger">
                        Неправильное имя пользователя или пароль
                    </p>
                }
            </form>
        </div>
    )
}

export default observer(LoginRoute);