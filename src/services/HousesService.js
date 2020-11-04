import { api } from './AxiosService'
import { AppState } from '../AppState'
import router from '../router'

class HousesService {
  async getAllHouses() {
    try {
      const res = await api.get('/houses')
      // console.log(res.data.data)
      AppState.houses = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getActiveHouse(houseId) {
    try {
      const res = await api.get('/houses/' + houseId)
      // console.log(res.data.data)
      AppState.activeHouse = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async removeHouse(houseId) {
    try {
      if (window.confirm()) {
        await api.delete('/houses/' + houseId)
        router.push({ name: 'Houses' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(houseData) {
    try {
      const res = await api.post('/houses', houseData)
      router.push({ name: 'ActiveHouse', params: { houseId: res.data.data._id } })
    } catch (error) {
      console.error(error)
    }
  }

  setActiveHouse(houseData) {
    try {
      AppState.activeHouse = houseData
    } catch (error) {
      console.error(error)
    }
  }
}
export const housesService = new HousesService()
