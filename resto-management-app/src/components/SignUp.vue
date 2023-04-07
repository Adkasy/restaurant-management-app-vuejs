<template>
  <h3>Don't Have An Account? Register Here</h3>
  <div class="register-form">
    <input type="text" name="" id="" placeholder="Name" />
    <input type="email" name="" id="" placeholder="Email" />
    <input type="password" name="" id="" placeholder="Password" />
    <button>Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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
  border-radius: 10px;
  height: 35px;
  width: 150px;
  background-color: dimgrey;
  color: white;
  border: 2px solid black;
}
</style>
