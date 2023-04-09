<template>
  <img class="logoImage" alt="Logo" src="../assets/Logo-Line-Livy.png" />
  <h1>Sign Up</h1>
  <h3>Don't Have An Account? Register Here</h3>
  <div class="register-form">
    <input type="text" name="" id="" placeholder="Name" v-model="name" />
    <input type="email" name="" id="" placeholder="Email" v-model="email" />
    <input
      type="password"
      name=""
      id=""
      placeholder="Password"
      v-model="password"
    />
    <button @click="registerNewUser">Sign Up</button>
    <p style="margin-top: 25px">
      Already have an account? <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async registerNewUser() {
      let registeredData = await axios.post("http://localhost:3000/User", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      console.log(registeredData, "Ini data baru hasil register");

      if (registeredData.status == 201) {
        localStorage.setItem("dataUser", JSON.stringify(registeredData));

        alert("Successfully register your account");

        this.$router.push({ name: "HomePage" });
      }
    },
  },

  mounted() {
    const user = localStorage.getItem("dataUser");
    if (user) {
      this.$router.push({ name: "HomePage" }); //Ini coba pake 'name'. kalo yang di login pake 'path'
    }
  },
};
</script>

<style></style>
