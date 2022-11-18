import ApiClient from "../ApiClient";

export default class DepartmentApi extends ApiClient {
    constructor(userDataStore) {
        super(userDataStore);
    }

    async getDepartment(id) {
        return await this.provideRequest(`http://localhost:8080/department/${id}`)
    }

    async getDepartments() {
        return await this.provideRequest(`http://localhost:8080/department`)
    }

    createDepartment(department) {
        this.provideRequest(`http://localhost:8080/department`, 'POST', department).then()
    }

    updateDepartment(id, department) {
        this.provideRequest(`http://localhost:8080/department/${id}`, 'PUT', department).then()
    }

    deleteDepartment(id) {
        this.provideRequest(`http://localhost:8080/department/${id}`, 'DELETE').then()
    }

}