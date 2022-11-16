import {action, makeObservable, observable} from 'mobx';

export default class UserDataStore {
    username = window.sessionStorage.getItem('username');
    password = window.sessionStorage.getItem('password');

    constructor() {
        makeObservable(this, {
            username: observable,
            password: observable,
            setUsername: action,
            setPassword: action
        });
    }

    setUsername(username) {
        this.username = username;
        window.sessionStorage.setItem('username', username);
    }

    setPassword(password) {
        this.password = password;
        window.sessionStorage.setItem('password', password)
    }
}
