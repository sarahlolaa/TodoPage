import { createApp } from 'vue'
import App from './App.vue'
// import firebase from 'firebase'

import BaseCard from './components/UI/BaseCard.vue'
import BaseCheckbox from './components/UI/BaseCheckbox.vue'

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-checkbox', BaseCheckbox);

app.mount('#app');

// createApp(App).mount('#app')