import ApiClient from "../ApiClient";

export default class WorkingWindowApi extends ApiClient {
    constructor(userDataStore) {
        super(userDataStore);
    }

    async getWorkingWindows(doctorId) {
        return await this.provideRequest(`http://localhost:8080/working-window?doctorId=${doctorId}`)
    }
}