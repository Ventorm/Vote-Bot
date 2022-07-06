const { default: axios } = require('axios')
const { PORT } = require('../const.data.js')


class playersAPI {
    //get all id from players, where bot is enabled
    async getAll(usual_query = true) {
        const receivedGet = await axios.get(`http://localhost:${PORT}/players/?usual_query=${usual_query}`)
        return receivedGet
    }

    //get player for check
    async get(id) {
        const receivedGet = await axios.get(`http://localhost:${PORT}/players/${id}`)
        return receivedGet
    }

    //if player has Blocked or Unblocked bot
    async update(id, enabled) {
        const receivedPut = await axios.put(`http://localhost:${PORT}/players/${id}`, {id, enabled})
        return receivedPut
    }
    
    //creating new player
    async create(data) {
        const receivedPost = await axios.post(`http://localhost:${PORT}/players/`, data)
        return receivedPost
    }
}

module.exports = new playersAPI()