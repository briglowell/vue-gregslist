<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link> |
    <!-- able to router-link with just /pathName but using a named route is much safer -->
    <!-- <router-link to="/cars">
      Cars
    </router-link> -->
    <router-link :to="{name: 'Cars'}">
      Cars
    </router-link>
  </div>
  <router-view />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  setup() {
    return { appState: computed(() => AppState) }
  }
}
</script>
