<template>
  <div>
    <h1>Search Results</h1>
    <p>Search query: {{ $route.params.query }}</p>
    <!-- Display search results here -->
     <NursingHomesTable />
  </div>
</template>

<script>
import NursingHomesTable from './NursingHomesTable.vue';
export default {
  created() {
    if (!this.$route.params.query) {
      this.$router.push({ name: "searchLandingPage" });
    }
  },
    components: {
      NursingHomesTable,
    },
};
</script>