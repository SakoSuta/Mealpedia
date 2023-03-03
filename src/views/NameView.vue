<script lang="ts">
export default {
  name: 'NameView',
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
          this['RandomIngre' + i] = json.meals[0]['strIngredient' + i];
        }

        for (let i = 1; i <= 20; i++) {
          this['RandomMeasr' + i] = json.meals[0]['strMeasure' + i];
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

        RandomIngre1: "",
        RandomIngre2: "",
        RandomIngre3: "",
        RandomIngre4: "",
        RandomIngre5: "",
        RandomIngre6: "",
        RandomIngre7: "",
        RandomIngre8: "",
        RandomIngre9: "",
        RandomIngre10: "",
        RandomIngre11: "",
        RandomIngre12: "",
        RandomIngre13: "",
        RandomIngre14: "",
        RandomIngre15: "",
        RandomIngre16: "",
        RandomIngre17: "",
        RandomIngre18: "",
        RandomIngre19: "",
        RandomIngre20: "",

        RandomMeasr1: "",
        RandomMeasr2: "",
        RandomMeasr3: "",
        RandomMeasr4: "",
        RandomMeasr5: "",
        RandomMeasr6: "",
        RandomMeasr7: "",
        RandomMeasr8: "",
        RandomMeasr9: "",
        RandomMeasr10: "",
        RandomMeasr11: "",
        RandomMeasr12: "",
        RandomMeasr13: "",
        RandomMeasr14: "",
        RandomMeasr15: "",
        RandomMeasr16: "",
        RandomMeasr17: "",
        RandomMeasr18: "",
        RandomMeasr19: "",
        RandomMeasr20: "",
    }
  }
}
</script>

<template>
  <div class="random">
    <h1>Meal Random</h1>
    <div class="Image"><img v-bind:src=RandomImage alt="Image"></div>
    <h2>Titre : {{ RandomName }}</h2>
    <h3>Categorie : {{ RandomCategorie }}</h3>
    <h3>Origin : {{ RandomOrigin }}</h3>
    <h3>Ingredients : </h3>
    <ul>
      <li v-for="i in 20" :key="i">{{ this['RandomMeasr' + i] }} {{ this['RandomIngre' + i] }}</li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .random {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .random div.Image{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .random div.Image img{
    width: 50%;
  }
}
</style>
