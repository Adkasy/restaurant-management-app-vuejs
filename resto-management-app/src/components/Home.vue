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
        <td>Action</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <td>{{ restaurant.id }}</td>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.contact }}</td>
        <td>{{ restaurant.location }}</td>
        <td>
          <router-link :to="'/update/' + restaurant.id">Edit</router-link> |
          <a href="#" @click="deleteRestaurant(restaurant.id)">Delete</a>
        </td>
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

  methods: {
    async loadData() {
      //TODO: Nampilin tabel restaurantnya
      const restaurantList = await axios.get(
        "http://localhost:3000/Restaurants"
      );
      this.restaurants = restaurantList.data;
    },

    async deleteRestaurant(id) {
      const deleteData = await axios.delete(
        "http://localhost:3000/Restaurants/" + id
      );

      console.log(deleteData);
      if (deleteData.status == 200) {
        this.loadData();
      }
    },
  },

  components: {
    HeaderPage,
  },

  async mounted() {
    //TODO: Untuk dapetin data user dari local storage
    const user = localStorage.getItem("dataUser");

    //TODO: Untuk nampilin nama user di homepage
    this.name = JSON.parse(user).data[0].name;

    //TODO: Navigation guard untuk user gak bisa masuk ke home sebelum signup atau login
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    //TODO: Ngeload data saat mounting
    this.loadData();
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
