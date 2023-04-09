<template>
  <HeaderPage />
  <h1>Hello {{ name }}, this is homepage</h1>

  <table border="1">
    <thead>
      <tr>
        <td class="id-table">ID</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Location</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <td>{{ restaurant.id }}</td>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.contact }}</td>
        <td>{{ restaurant.location }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import HeaderPage from "./Header.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    HeaderPage,
  },
  async mounted() {
    const user = localStorage.getItem("dataUser");

    this.name = JSON.parse(user).data[0].name;
    // console.log("Nama User:", this.name);

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    // Nampilin tabel restaurantnya
    const restaurantList = await axios.get("http://localhost:3000/Restaurants");
    this.restaurants = restaurantList.data;
    // console.log(this.restaurants);
  },
};
</script>

<style scoped>
table {
  margin: 20px auto;
}

td {
  width: 160px;
  height: 30px;
}
</style>
