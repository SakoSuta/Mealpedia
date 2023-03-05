<script lang="ts">
export default {
  name: 'NameView',
  methods: {
    Searching() {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.SearchName}`)
        .then(response => response.json())
        .then(json => {
          console.log(json.meals);
          this.ByName = json.meals
        })
        .catch(error => console.error(error));
    }
  },
    data() {
      return {
        SearchName: "",
        ByName: []
      }
    }
}
</script>

<template>
  <div class="random">
    <h1>Meal by Name</h1>
    <form>
      <input type="text" v-model="SearchName" @input="Searching" placeholder="Search by name of the meal">
    </form>
    <div class="gridd">
      <div v-for="BN in ByName" v-if="SearchName" class="result">
        <div class="Image"><img v-bind:src=BN.strMealThumb alt="Image"></div>
        <p>{{ BN.strMeal }}</p>
      </div>
    </div>
    
    <!-- <img v-for="NImage in NameImage" v-bind:src=NImage alt="Image"> -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .random {
    min-height: 100vh;
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

  .random .result div.Image img{
    width: 100px;
  }
}
</style>
