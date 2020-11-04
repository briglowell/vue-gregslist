<template>
  <div class="active-house col-6 offset-3 border border-dark text-center p-2 shadow-lg rounded bg-dark text-white mt-4">
    <img :src="house.imgUrl" class="img-fluid " alt="">
    <h3>Levels: {{ house.levels }} Beds: {{ house.bedrooms }} Baths: {{ house.bathrooms }}</h3>
    <p>Year: {{ house.year }}</p>
    <p>${{ house.price }}</p>
    <p>{{ house.description }}</p>
    <button class="btn btn-danger btn-block mb-3" @click="removeHouse">
      Delete
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveHouse',
  setup() {
    const route = useRoute()
    onMounted(() => {
      housesService.getActiveHouse(route.params.houseId)
    })
    return {
      house: computed(() => AppState.activeHouse),
      removeHouse() {
        housesService.removeHouse(route.params.houseId)
      }
    }
  }
}
</script>

<style scoped>

</style>
