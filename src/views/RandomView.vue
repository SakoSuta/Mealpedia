<script lang="ts">
export default {
  name: 'RandomView',
  mounted() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.RandomCategorie = json.meals[0].strCategory,
        this.RandomName = json.meals[0].strMeal,
        this.RandomOrigin = json.meals[0].strArea,
        this.RandomImage = json.meals[0].strMealThumb;

        for (let i = 1; i <= 20; i++) {
      this['RandomIngre' + i] = json.meals['strIngredient' + i];
      }
      })
      .catch(error => console.error(error));
  },
  data() {
    return {
        RandomCategorie: "",
        RandomName: "",
        RandomOrigin: "",
        RandomImage: "",

        RandomIngre1: ""
    }
  }
}
</script>

<template>
  <div class="random">
    <h1>Meal Random</h1>
    <h2>Titre :</h2>
    <h3>{{ RandomImage }}</h3>
    <h3>{{ RandomName }}</h3>
    <h3>{{ RandomCategorie }}</h3>
    <h3>{{ RandomOrigin }}</h3>
    <h3>{{ RandomIngre1 }}</h3>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .random {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
