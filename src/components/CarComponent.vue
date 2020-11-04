<template>
  <div class="car-component col-3 card">
    <h3>
      {{ carProp.make }} {{ carProp.model }}
    </h3>
    <router-link :to="{name: 'ActiveCar' , params: {carId: carProp._id}}">
      <img :src="
             carProp.imgUrl"
           alt="car Img"
           class="img-fluid"
      >
    </router-link>

    <!-- <img :src="carProp.imgUrl"
         alt="car Img"
         class="img-fluid"
         @click="setActiveCar"
    > -->

    {{ carProp }}
  </div>
</template>

<script>
// import { useRouter } from 'vue-router'
export default {
  name: 'CarComponent',
  props: ['carProp'],
  setup(props) {
    // if using an @click to change routes, will need to import useRouter as well as create router variable to push
    // const router = useRouter()
    return {
      setActiveCar() {
        // router.push({ name: 'ActiveCar', params: { carId: props.carProp._id } })
        // carsService.setActiveCar(props.carProp)
      }
    }
  }
}
</script>

<style scoped>

</style>
