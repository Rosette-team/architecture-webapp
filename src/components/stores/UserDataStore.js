import {action, makeObservable, observable} from 'mobx';

export default class UserDataStore {
    username = null;
    password = null;

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
    }

    setPassword(password) {
        this.password = password;
    }
}
