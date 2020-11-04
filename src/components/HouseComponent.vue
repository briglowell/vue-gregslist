<template>
  <div class="house-component col-3 card text-center mx-4 mb-2 bg-dark text-white">
    <router-link :to="{name: 'ActiveHouse' , params: {houseId: houseProp._id}}">
      <img :src="houseProp.imgUrl" alt="house Img" class="img-fluid mt-2">
    </router-link>

    <!-- <img :src="houseProp.imgUrl"
         alt="house Img"
         class="img-fluid"
         @click="setActiveHouse"
    > -->
    <div>
      <h3 class="float-left">
        ${{ houseProp.price }}
      </h3> <p class="float-right">
        {{ houseProp.bedrooms }} bds | {{ houseProp.bathrooms }} ba | {{ houseProp.levels }} fl
      </p>
    </div>
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
