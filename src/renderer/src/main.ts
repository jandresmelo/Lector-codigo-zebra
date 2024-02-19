import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import JsonExcel from "vue-json-excel3";

const app = createApp(App)
app.component("downloadExcel", JsonExcel);

app.mount('#app')
