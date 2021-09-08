<template>
  <div class="wrapper">
    <Club />
  </div>
</template>

<script>
import Club from "./components/Club.vue";

export default {
  components: {Club},
  setup() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

