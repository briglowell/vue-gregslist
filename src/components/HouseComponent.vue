<template>
  <div class="house-component col-4 card">
    <h3>
      Levels:{{houseProp.levels}} Beds:{{ houseProp.bedrooms }} Baths:{{ houseProp.bathrooms }}
    </h3>
    <router-link :to="{name: 'ActiveHouse' , params: {houseId: houseProp._id}}">
      <img :src="houseProp.imgUrl" alt="house Img" class="img-fluid">
    </router-link>

    <!-- <img :src="houseProp.imgUrl"
         alt="house Img"
         class="img-fluid"
         @click="setActiveHouse"
    > -->

    {{houseProp.year}} ${{ houseProp.price }}
  </div>
</template>

<script>
// import { useRouter } from 'vue-router'
export default {
  name: 'HouseComponent',
  props: ['houseProp'],
  setup(props) {
    // if using an @click to change routes, will need to import useRouter as well as create router variable to push
    // const router = useRouter()
    return {
      setActiveHouse() {
        // router.push({ name: 'ActiveHouse', params: { houseId: props.houseProp._id } })
        // housesService.setActiveHouse(props.houseProp)
      }
    }
  }
}
</script>

<style scoped>

</style>
