import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import firebase from "firebase/app";
import router from './router'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyATo0J_6YUWuzAwZq32LH6PSJ_Knjgj6tg",
  authDomain: "webapp-project-login.firebaseapp.com",
  databaseURL: "https://webapp-project-login.firebaseio.com",
  projectId: "webapp-project-login",
  storageBucket: "webapp-project-login.appspot.com",
  messagingSenderId: "913418670079",
  appId: "1:913418670079:web:7d23cc8c5e5115a056a1ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
