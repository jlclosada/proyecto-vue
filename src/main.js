import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Importa el componente principal y el router
import App from './App.vue';
import router from './router';

// Importa Vuetify y los estilos necesarios
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

// Crea la instancia de Vuetify
const vuetify = createVuetify();

// Crea la aplicación y utiliza Vuetify
const app = createApp(App);
app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount('#app');
