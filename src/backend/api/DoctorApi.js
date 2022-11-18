import ApiClient from "../ApiClient";

export default class DoctorApi extends ApiClient {
    constructor(userDataStore) {
        super(userDataStore);
    }

    async getDoctor(id) {
        return await this.provideRequest(`http://localhost:8080/doctor/${id}`)
    }

    async getDoctors() {
        return await this.provideRequest(`http://localhost:8080/doctor`)
    }

    createDoctor(department) {
        this.provideRequest(`http://localhost:8080/doctor`, 'POST', department).then()
    }

    updateDoctor(id, doctor) {
        this.provideRequest(`http://localhost:8080/doctor/${id}`, 'PUT', doctor).then()
    }

    deleteDoctor(id) {
        this.provideRequest(`http://localhost:8080/doctor/${id}`, 'DELETE').then()
    }
}