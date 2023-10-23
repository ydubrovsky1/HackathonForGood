<template>
  <div class="search-page">
        <div class="header">
          <div id="img1" class="background-image"></div>
                   <h1>Search For Skilled Nursing Facilities</h1>
        </div>
    <h2> By Zip Code: </h2>
    <form @submit.prevent="search" class="search-form">
      <input v-model="searchText" type="text" placeholder="Enter search text" class="search-input"/>
      <button type="submit" class="search-button">Search</button>
    </form>
  </div>
</template>

<script>
import {snfDataServiceMain} from "../services/SkilledNursingFacilityDataService";

export default{
      data() {
        return {
          searchText: '',
        };
      },
  methods: {
    async search() {

       console.log(snfDataServiceMain);
       console.log("yep");
      this.$router.push({ name: "results", params: { query: this.searchText } });

    },





},

};
</script>


<style scoped>
.search-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #007BFF; /* Header background color */
  padding: 20px;
  color: #fff; /* Text color */
  font-family: Arial, sans-serif;
}

.header {
  text-align: center;
}

.logo {
  max-width: 200px;
}
.search-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  font-size: 16px;
}

.search-button {
  background-color: #0056b3; /* Button background color */
  color: #fff; /* Text color */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0056b3; /* Change to your desired hover color */
}
.background-image {
  background-image: url('../img/nursing-home-nurse-patients.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center top;
  min-height: 200px; /* Adjust the height as needed */
  width: 100%;
}
</style>