<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.logoImage {
  width: 180px;
  margin-bottom: 10px;
  margin-top: 50px;
}

body {
  margin: 0;
  padding: 0;
}

.register-form input,
.add-form input {
  height: 50px;
  width: 330px;
  padding-left: 20px;
  border: 2px solid black;
  border-radius: 10px;
  display: block;
  margin: 0 auto 10px;
}

button {
  margin-top: 20px;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  background-color: #2897f8;
  color: white;
  border: 2px solid white;
  cursor: pointer;
}

button:hover {
  background-color: #0275d8;
}
</style>
