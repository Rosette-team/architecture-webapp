import React from "react";

export default class ApiClient {
    constructor(userDataStore) {
        this.userDataStore = userDataStore
    }

    async provideRequest(url, method = 'GET', body = null) {
        let headers = new Headers()
        headers.append('Authorization', 'Basic ' + btoa(`${this.userDataStore.username}:${this.userDataStore.password}`));
        if (body != null) {
            headers.append('Content-Type', 'application/json')
            let response = await fetch(url,
                {
                    method: method,
                    headers: headers,
                    body: JSON.stringify(body)
                })
            console.log(response)
            return await response.json()
        } else {
            let response = await fetch(url,
                {
                    method: method,
                    headers: headers,
                })
            return await response.json()
        }
    }
}
