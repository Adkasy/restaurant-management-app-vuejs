<template>
  <img alt="Logo" src="./assets/Logo-Line-Livy.png" />
  <router-view/>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 180px;
  margin-bottom: 10px;
}
</style>
