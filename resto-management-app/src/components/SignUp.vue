<template>
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

        this.$router.push({name:'HomePage'})
      }
    },
  },

  mounted(){
    const user = localStorage.getItem('dataUser')
    if(user){
      this.$router.push({name:'HomePage'})
    }
  }
};
</script>

<style>
.register-form input {
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
  background-color: dimgrey;
  color: white;
  border: 2px solid black;
  cursor: pointer;
}
</style>
