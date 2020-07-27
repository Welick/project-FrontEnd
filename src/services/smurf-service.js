const smurfService = {
    loadAll: async (type) => {
        const response = await fetch(`http://localhost:8080/api/smurf/${type}`)

        return response.json()
    },
    loadOne: async (id) => {
        const response = await fetch(`http://localhost:8080/api/smurf/smurf/${id}`)
        return response.json()
    },
    create: async (data) => {
        const response = await fetch('http://localhost:8080/api/smurf',{
            headers: {
                'Content-Type':'application/json'
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(data)
        })
        return response.json()
    }
}

export default smurfService