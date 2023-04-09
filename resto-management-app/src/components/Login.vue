<template>
  <img class="logoImage" alt="Logo" src="../assets/Logo-Line-Livy.png" />
  <h1>Login</h1>
  <div class="register-form">
    <input type="email" name="" id="" placeholder="Email" v-model="email" />
    <input
      type="password"
      name=""
      id=""
      placeholder="Password"
      v-model="password"
    />
    <button @click="loginUser">Login</button>
    <p style="margin-top: 25px">
      Create account? <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async loginUser() {
      let user_login = await axios.get(
        `http://localhost:3000/User?email=${this.email}&password=${this.password}`
      );

      console.log(user_login); //Ini untuk cek, apakah di console browsernya nanti akan keluar hasil sesuai dengan filter yang di input pada form (email dan password)

      if (user_login.status == 200 && user_login.data.length > 0) {
        localStorage.setItem("dataUser", JSON.stringify(user_login));
        this.$router.push({ name: "HomePage" });
      }
    },
  },

  mounted() {
    const user = localStorage.getItem("dataUser");
    if (user) {
      this.$router.push({ path: "/" }); //Ini coba pake 'path'. kalo yang di signup pake 'name'
    }
  },
};
</script>

<style></style>
