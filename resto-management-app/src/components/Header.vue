<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a href="#" @click="logoutButton">Log Out</a>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  methods: {
    logoutButton() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
div .navbar {
  background-color: grey;
  overflow: hidden;
  height: 55px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-top: 0;
}

.navbar a {
  float: left;
  color: white;
  text-align: center;
  font-size: 15px;
  text-decoration: none;
  margin-right: 18px;
}

.navbar a:hover {
  /* background-color: blue; */
  color: black;
}
</style>
