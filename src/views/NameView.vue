<script lang="ts">
export default {
  name: 'NameView',
  methods: {
    Searching() {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.SearchName}`)
        .then(response => response.json())
        .then(json => {
          console.log(json),
          this.NameImage = json.meals[0].strMealThumb
        })
        .catch(error => console.error(error));
    },
    data() {
      return {
        SearchName: "",
        NameImage: ""
      }
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
