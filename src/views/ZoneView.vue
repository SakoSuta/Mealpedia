<script lang="ts">
export default {
  name: 'ZoneView',
  methods: {
    SearchingC() {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.SearchZone}`)
        .then(response => response.json())
        .then(json => {
          console.log(json.meals);
          this.ByZone = json.meals
        })
        .catch(error => console.error(error));
    }
  },
    data() {
      return {
        SearchZone: "",
        ByZone: []
      }
    }
}
</script>

<template>
  <div class="zone">
    <h1>Meal by Zone</h1>
    <form>
      <input type="text" v-model="SearchZone" @input="SearchingC" placeholder="Search by zone of the meal">
    </form>
    <div class="gridd">
      <div v-for="BN in ByZone" v-if="SearchZone" class="result">
        <div class="ImageN"><img v-bind:src=BN.strMealThumb alt="Image"></div>
        <p>{{ BN.strMeal }}</p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .zone {
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

  .zone .result div.ImageN img{
    width: 100px;
  }
}
</style>