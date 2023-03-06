<script lang="ts">
export default {
  name: 'IdView',
  mounted() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.IDCategorie = json.meals[0].strCategory,
        this.IDName = json.meals[0].strMeal,
        this.IDOrigin = json.meals[0].strArea,
        this.IDImage = json.meals[0].strMealThumb;

        for (let i = 1; i <= 20; i++) {
          this['IDIngre' + i] = json.meals[0]['strIngredient' + i];
        }

        for (let i = 1; i <= 20; i++) {
          this['IDMeasr' + i] = json.meals[0]['strMeasure' + i];
        }

      })
      .catch(error => console.error(error));
  },
  data() {
    return {
        IDCategorie: "",
        IDName: "",
        IDOrigin: "",
        IDImage: "",

        IDIngre1: "",
        IDIngre2: "",
        IDIngre3: "",
        IDIngre4: "",
        IDIngre5: "",
        IDIngre6: "",
        IDIngre7: "",
        IDIngre8: "",
        IDIngre9: "",
        IDIngre10: "",
        IDIngre11: "",
        IDIngre12: "",
        IDIngre13: "",
        IDIngre14: "",
        IDIngre15: "",
        IDIngre16: "",
        IDIngre17: "",
        IDIngre18: "",
        IDIngre19: "",
        IDIngre20: "",

        IDMeasr1: "",
        IDMeasr2: "",
        IDMeasr3: "",
        IDMeasr4: "",
        IDMeasr5: "",
        IDMeasr6: "",
        IDMeasr7: "",
        IDMeasr8: "",
        IDMeasr9: "",
        IDMeasr10: "",
        IDMeasr11: "",
        IDMeasr12: "",
        IDMeasr13: "",
        IDMeasr14: "",
        IDMeasr15: "",
        IDMeasr16: "",
        IDMeasr17: "",
        IDMeasr18: "",
        IDMeasr19: "",
        IDMeasr20: "",
    }
  }
}
</script>

<template>
  <div class="id">
    <h1>Meal ID</h1>
    <div class="Image"><img v-bind:src=IDImage alt="Image"></div>
    <h2>Titre : {{ IDName }}</h2>
    <h3>Categorie : {{ IDCategorie }}</h3>
    <h3>Origin : {{ IDOrigin }}</h3>
    <h3>Ingredients : </h3>
    <ul>
      <li v-for="i in 20" :key="i">{{ this['IDMeasr' + i] }} {{ this['IDIngre' + i] }}</li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .id {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .id div.Image{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .id div.Image img{
    width: 50%;
  }
}
</style>
