<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Picture</th>
        <th>Data 1</th>
        <th>Data 2</th>
        <th>Data 3</th>
        <th>Data 4</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="nursingHome in nursingHomes" :key="nursingHome.id">
        <td>{{ nursingHome.name }}</td>
        <td><img :src="nursingHome.picture" alt="Nursing Home" /></td>
        <td>{{ nursingHome.data1 }}</td>
        <td>{{ nursingHome.data2 }}</td>
        <td>{{ nursingHome.data3 }}</td>
        <td>{{ nursingHome.data4 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      nursingHomes: [
        {
          id: 1,
          name: 'Nursing Home 1',
          picture: 'nursing-home-1.jpg',
          data1: 'Value 1',
          data2: 'Value 2',
          data3: 'Value 3',
          data4: 'Value 4',
        },
        {
          id: 2,
          name: 'Nursing Home 2',
          picture: 'nursing-home-2.jpg',
          data1: 'Value 1',
          data2: 'Value 2',
          data3: 'Value 3',
          data4: 'Value 4',
        },
        // Add more nursing homes as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add your CSS styling here */
</style>