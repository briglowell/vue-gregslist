<template>
  <div class="cars-page container-fluid">
    <h1>Cars</h1>
    <form class="form-group" @submit.prevent="createCar">
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Make"
             v-model="state.newCar.make"
      >
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Model"
             v-model="state.newCar.model"
      >
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Description"
             v-model="state.newCar.description"
      >
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="ImgUrl"
             v-model="state.newCar.imgUrl"
      >
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Year"
             v-model="state.newCar.year"
      >
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Price"
             v-model="state.newCar.price"
      >
      <button type="submit" class="btn btn-info">
        Create Car
      </button>
    </form>
    <div class="row">
      <car-component v-for="car in cars" :key="car._id" :car-prop="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { carsService } from '../services/CarsService'
import CarComponent from '../components/CarComponent'
import { AppState } from '../AppState'
export default {
  name: 'CarsPage',
  components: { CarComponent },
  setup() {
    const state = reactive({
      newCar: {}
    })
    onMounted(() => {
      carsService.getAllCars()
    })
    return {
      state,
      cars: computed(() => AppState.cars),
      createCar() {
        carsService.createCar(state.newCar)
      }
    }
  }
}
</script>

<style scoped>

</style>
