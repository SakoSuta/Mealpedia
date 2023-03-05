<script lang="ts">
export default {
  name: 'IngredientView',
  methods: {
    SearchingI() {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.SearchIngredient}`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.ByIngredient = json.meals
        })
        .catch(error => console.error(error));
    }
  },
    data() {
      return {
        SearchIngredient: "",
        ByIngredient: []
      }
    }
}
</script>

<template>
  <div class="ingredient">
    <h1>Meal by Ingredient</h1>
    <form>
      <input type="text" v-model="SearchIngredient" @input="SearchingI" placeholder="Search by ingredient of the meal">
    </form>
    <div class="gridd">
      <div v-for="BI in ByIngredient" v-if="SearchIngredient" class="result">
        <div class="ImageN"><img v-bind:src=BI.strMealThumb alt="Image"></div>
        <p>{{ BI.strMeal }}</p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .ingredient {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1{
    text-align: center;
  }  

  form{
    width: 100%;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
  }

  form input{
    width: 80%;
    padding: 20px;
    background-color: transparent;
    border: 1px var(--color-text) solid;
    border-radius: 10px;
    color: var(--color-text);
  }

  .gridd {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .result{
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;
  }

  .ingredient .result div.ImageN img{
    width: 100px;
  }
}
</style>