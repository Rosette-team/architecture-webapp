export async function provideRequest(url, method = 'GET', body = null) {
    let headers = new Headers()
    headers.append('Authorization', 'Basic ' + btoa('user:user'));
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