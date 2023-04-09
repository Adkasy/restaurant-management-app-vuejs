<template>
  <HeaderPage />
  <h1>Hello User, this is update page</h1>
</template>

<script>
import HeaderPage from "./Header.vue";

export default {
  name: "UpdatePage",
  components: {
    HeaderPage,
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
