import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as echarts from 'echarts'
import "leaflet/dist/leaflet.css";
import "leaflet.pm";
import "leaflet.pm/dist/leaflet.pm.css";

const app = createApp(App)
app.use(echarts)
app.mount('#app')
