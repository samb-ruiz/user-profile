<template>
    <div>
        Login
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" placeholder="username" v-model="email">
            </div>
            <div class="password">
                <input type="password" placeholder="password" v-model="password">
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
        <span>Don't have an account? Register <router-link to="/register">here.</router-link></span>

    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
        data(){
            return {
                email: '',
                password: '',
                error: ''
            }
        },
    methods: {
        async pressed() {
            try{
                const val = await firebase.auth().signInWithEmailAndPassword(this.email, this. password)
                console.log(val);
                this.$router.replace({name: "profile"})
            }catch(err){
                console.log(err);
                //alert (err);
            }
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>