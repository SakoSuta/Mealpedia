<script lang="ts">
export default {
  name: 'ZoneView',
  mounted() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
      .catch(error => console.error(error));
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <div class="random">
    <h1>Meal Random</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .random {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
