import ApiClient from "../ApiClient";

export default class UserApi extends ApiClient {
    constructor(userDataStore) {
        super(userDataStore);
    }

    async login() {
        try {
            return await this.provideRequest(`http://localhost:8080/user/login`)
        } catch (error) {
            return null
        }
    }
}