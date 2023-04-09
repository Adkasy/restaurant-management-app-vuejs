<template>
  <HeaderPage />
  <h1>Add new restaurant to list</h1>
  <form class="add-form" onsubmit="return false">
    <input type="text" name="" placeholder="Restaurant's Name" v-model="name" />
    <input
      type="text"
      name=""
      placeholder="Restaurant's Contact"
      v-model="contact"
    />
    <input
      type="text"
      name=""
      placeholder="Restaurant's Location"
      v-model="location"
    />
    <button @click="addNewRestaurant">Add</button>
  </form>
</template>

<script>
import HeaderPage from "./Header.vue";
import axios from "axios";

export default {
  name: "AddPage",
  components: {
    HeaderPage,
  },

  data() {
    return {
      name: "",
      contact: "",
      location: "",
    };
  },

  methods: {
    async addNewRestaurant() {
      const newRestaurant = await axios.post(
        "http://localhost:3000/Restaurants",
        {
          name: this.name,
          contact: this.contact,
          location: this.location,
        }
      );
      console.log(newRestaurant.status);

      if (newRestaurant.status == 201) {
        this.$router.push({ path: "/" });
      }
    },
  },

  mounted() {
    const user = localStorage.getItem("dataUser");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0;
}
</style>
