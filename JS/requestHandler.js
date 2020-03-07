export function makeRequest(url, method, formData, callback) {
    fetch(url, {
        method: method,
        body: formData
    }).then((response) => {
        return response.json()
    }).then((result) => {
        callback(result)
    }).catch((err) => {
        console.log("Error : ", err);
    })
}
