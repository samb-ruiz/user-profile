<template>
  <div>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      WELCOME!
      <div class="email">
        <input type="email" v-model="email" placeholder="email">
  </div>
  <div class="password">
    <input type="password" v-model="password" placeholder="password">
  </div>
  <button type="submit">Register</button>
  </form>
   <span>Already have an account? Click here to <router-link to="/login">login.</router-link></span>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    async pressed(){
      try{
      const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log(user)
      this.$router.replace({name: "Profile"});
      }catch(err){
        console.log(err)
      
      }

    }
  },

data() {
  return {
    email: "",
    password: '',
    error: ''
    }
  }
}
</script>

<style>
.erroe {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 10px;
  margin: 20px;
  font-size: 21px;

}
button{
  width: 100px;
  height: 50px;
  margin: 10px;
  font-size: 100%;
}
</style>
