import ApiClient from "../ApiClient";

export default class WorkingWindowApi extends ApiClient {
    constructor(userDataStore) {
        super(userDataStore);
    }

    async getWorkingWindow(id) {
        return await this.provideRequest(`http://localhost:8080/working-window/${id}`)
    }

    async getWorkingWindows(doctorId) {
        return await this.provideRequest(`http://localhost:8080/working-window?doctorId=${doctorId}`)
    }

    async updateWorkingWindow(id, workingWindow) {
        this.provideRequest(`http://localhost:8080/working-window/${id}`, 'PUT', workingWindow).then()
    }

    async deleteWorkingWindow(id) {
        this.provideRequest(`http://localhost:8080/working-window/${id}`, 'DELETE').then()
    }
}