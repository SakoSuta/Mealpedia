<script lang="ts">
import { RouterLink} from 'vue-router'
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
  <div class="name">
    <h1>Meal by Name</h1>
    <form>
      <input type="text" v-model="SearchName" @input="Searching" placeholder="Search by name of the meal">
    </form>
    <div class="gridd">
     
      <div v-for="BN in ByName" v-if="SearchName" class="result">
        <RouterLink :to="{ path: '/ID/' + BN.idMeal }">
          <div class="ImageN"><img v-bind:src=BN.strMealThumb alt="Image"></div>
          <p>{{ BN.strMeal }}</p>
        </RouterLink>
      </div>
    
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .name {
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

  .name .result div.ImageN img{
    width: 100px;
  }
}
</style>
