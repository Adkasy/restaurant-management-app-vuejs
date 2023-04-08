<template>
  <h1>This is homepage</h1>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    const user = localStorage.getItem("dataUser");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style></style>
