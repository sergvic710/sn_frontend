/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// import './bootstrap';
import { createApp } from 'vue';
import Navbar from "./components/Navbar.vue"
import router from "./routes";
import axios from 'axios'
import store from "./store";
import App from "./App.vue"

import './assets/reset.css'
import './assets/app.css'

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp(App);
app.use(router);
app.use(store);

axios.defaults.withCredentials = true;

// According to the latest changes, there is a new property: withXSRFToken.
// You need to explicitly set it true to send the XSRF token.
axios.defaults.withXSRFToken = true
axios.defaults.baseURL= import.meta.env.VITE_API_URL;
// app.config.globalProperties.$apiUrl = import.meta.env.VITE_API_URL;


// app.component('example-component', ExampleComponent);
app.component('navbar', Navbar);

// app.component('searchaccount', Searchaccount);
// app.component('v-select', vSelect)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
