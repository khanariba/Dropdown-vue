<template>
 <component1></component1>
</template>

<script>
import component1 from './components/component1.vue'

export default {
  name: 'App',
  components: {
    component1: component1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
