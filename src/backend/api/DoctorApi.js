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

    updateDoctor(id, doctor) {
        this.provideRequest(`http://localhost:8080/doctor/${id}`, 'PUT', doctor).then()
    }

}