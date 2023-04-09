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
    <button @click="addNewRestaurant">Edit</button>
  </form>
</template>

<script>
import HeaderPage from "./Header.vue";

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

  mounted() {
    const user = localStorage.getItem("dataUser");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style></style>
