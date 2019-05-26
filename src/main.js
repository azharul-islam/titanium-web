import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import router from './router'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgkoTAZEDhkg17jeuAnMDVABoX8ZKEgdc",
    authDomain: "titanium-web-d61a5.firebaseapp.com",
    databaseURL: "https://titanium-web-d61a5.firebaseio.com",
    projectId: "titanium-web-d61a5",
    storageBucket: "titanium-web-d61a5.appspot.com",
    messagingSenderId: "241083196110",
    appId: "1:241083196110:web:9b0331991d931cf0"
};

Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
