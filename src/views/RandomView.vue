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
        this.RandomImage = json.meals[0].strMealThumb,
        console.log(json.meals[0]['strIngredient' + 1])

        for (let i = 1; i <= 20; i++) {
      this['RandomIngre' + i] = json.meals[0]['strIngredient' + i];
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

        RandomIngre1: "a",
        RandomIngre2: "a",
        RandomIngre3: "a",
        RandomIngre4: "a",
        RandomIngre5: "a",
        RandomIngre6: "a",
        RandomIngre7: "a",
        RandomIngre8: "a",
        RandomIngre9: "a",
        RandomIngre10: "a",
        RandomIngre11: "a",
        RandomIngre12: "a",
        RandomIngre13: "a",
        RandomIngre14: "a",
        RandomIngre15: "a",
        RandomIngre16: "a",
        RandomIngre17: "a",
        RandomIngre18: "a",
        RandomIngre19: "a",
        RandomIngre20: "a",
    }
  }
}
</script>

<template>
  <div class="random">
    <h1>Meal Random</h1>
    <img v-bind:src=RandomImage alt="Image" width=200>
    <h2>Titre : {{ RandomName }}</h2>
    <h3>Categorie : {{ RandomCategorie }}</h3>
    <h3>Origin : {{ RandomOrigin }}</h3>
    <h3>Ingredients : </h3>
    <ul>
  <li v-for="i in 20" :key="i" v-if="this['RandomIngre' + i] !== 'a'">{{ this['RandomIngre' + i] }}</li>
</ul>



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
