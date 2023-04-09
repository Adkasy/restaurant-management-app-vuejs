<template>
  <HeaderPage />
  <h1>Hello User, this is update page</h1>
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
    <button @click="updateRestaurant">Edit</button>
  </form>
</template>

<script>
import HeaderPage from "./Header.vue";
import axios from "axios";

export default {
  name: "UpdatePage",
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
    async updateRestaurant() {
      const newResult = await axios.patch(
        "http://localhost:3000/Restaurants/" + this.$route.params.restaurantID,
        {
          name: this.name,
          contact: this.contact,
          location: this.location,
        }
      );

      console.log(newResult);
      if (newResult.status == 200) {
        this.$router.push({ path: "/" });
      }
    },
  },

  async mounted() {
    const user = localStorage.getItem("dataUser");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    console.log(this.$route.params.restaurantID, "<-- Ini ID-nya");
    const result = await axios.get(
      "http://localhost:3000/Restaurants/" + this.$route.params.restaurantID
    );
    console.log(result.data, "<-- Ini result datanya");
    this.name = result.data.name;
    this.contact = result.data.contact;
    this.location = result.data.location;
  },
};
</script>

<style></style>
