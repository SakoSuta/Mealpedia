<script lang="ts">
export default {
  name: 'CategoryView',
  methods: {
    SearchingC() {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.SearchCategory}`)
        .then(response => response.json())
        .then(json => {
          console.log(json.meals);
          this.ByCategory = json.meals
        })
        .catch(error => console.error(error));
    }
  },
    data() {
      return {
        SearchCategory: "",
        ByCategory: []
      }
    }
}
</script>

<template>
  <div class="category">
    <h1>Meal by Category</h1>
    <form>
      <input type="text" v-model="SearchCategory" @input="SearchingC" placeholder="Search by category of the meal">
    </form>
    <div class="gridd">
      <div v-for="BC in ByCategory" v-if="SearchCategory" class="result">
        <RouterLink :to="{ path: '/ID/' + BC.idMeal }">
          <div class="ImageN"><img v-bind:src=BC.strMealThumb alt="Image"></div>
          <p>{{ BC.strMeal }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .category {
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

  .category .result div.ImageN img{
    width: 100px;
  }
}
</style>