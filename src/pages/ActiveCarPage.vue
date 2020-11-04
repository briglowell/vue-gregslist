<template>
  <div class="active-car col-6 offset-3 card text-center">
    <img :src="car.imgUrl" class="img-fluid" alt="">
    <h3>{{ car.make }} {{ car.model }}</h3>
    <p>{{ car.price }} {{ car.year }}</p>
    <p>{{ car.description }}</p>
    <button class="btn btn-danger mb-3" @click="removeCar">
      Delete
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveCar',
  setup() {
    const route = useRoute()
    onMounted(() => {
      carsService.getActiveCar(route.params.carId)
    })
    return {
      car: computed(() => AppState.activeCar),
      removeCar() {
        carsService.removeCar(route.params.carId)
      }
    }
  }
}
</script>

<style scoped>

</style>
