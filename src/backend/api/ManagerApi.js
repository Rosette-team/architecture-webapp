import ApiClient from "../ApiClient";

export default class ManagerApi extends ApiClient {
    constructor(userDataStore) {
        super(userDataStore);
    }

    async getManager(id) {
        return await this.provideRequest(`http://localhost:8080/manager/${id}`)
    }

    async getManagers() {
        return await this.provideRequest(`http://localhost:8080/manager`)
    }

    createManager(manager) {
        this.provideRequest(`http://localhost:8080/manager`, 'POST', manager).then()
    }

    updateManager(id, manager) {
        this.provideRequest(`http://localhost:8080/manager/${id}`, 'PUT', manager).then()
    }

    deleteManager(id) {
        this.provideRequest(`http://localhost:8080/manager/${id}`, 'DELETE').then()
    }
}