class APIHandler {
  constructor() {
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    })

  }

  getFullList() {
    return this.axiosApp.get('/characters')
  }

  getOneRegister = (characterId) => {
    return this.axiosApp.get(`/characters/${characterId}`)
  }

  createOneRegister = (characterInfo) => {
    return this.axiosApp.post(`/characters`, characterInfo)
  }

  updateOneRegister = (characterInfo) => {
    return this.axiosApp.put(`/characters/${characterInfo.id}`, characterInfo)
  }

  deleteOneRegister = (characterId) => {
    return this.axiosApp.delete(`/characters/${characterId}`)
  }
}
