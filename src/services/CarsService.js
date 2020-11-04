import { api } from './AxiosService'
import { AppState } from '../AppState'
import router from '../router'

class CarsService {
  async getAllCars() {
    try {
      const res = await api.get('/cars')
      // console.log(res.data.data)
      AppState.cars = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getActiveCar(carId) {
    try {
      const res = await api.get('/cars/' + carId)
      // console.log(res.data.data)
      AppState.activeCar = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async removeCar(carId) {
    try {
      if (window.confirm()) {
        await api.delete('/cars/' + carId)
        router.push({ name: 'Cars' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  async createCar(carData) {
    try {
      const res = await api.post('/cars', carData)
      router.push({ name: 'ActiveCar', params: { carId: res.data.data._id } })
      // this.getAllCars()
    } catch (error) {
      console.error(error)
    }
  }

  setActiveCar(carData) {
    try {
      AppState.activeCar = carData
    } catch (error) {
      console.error(error)
    }
  }
}
export const carsService = new CarsService()
