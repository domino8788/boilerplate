const request = async (method, url, body) => {
    const options = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    return (await fetch(url, options)).json()
}

export {
    request
}