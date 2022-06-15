import { createApp } from 'vue'
import App from './App.vue'
// import firebase from 'firebase'

import BaseCard from './components/UI/BaseCard.vue'
import BaseCheckbox from './components/UI/BaseCheckbox.vue'
import ListItems from './components/list-resources/ListItems.vue'
// import firebase from "../../config/firebase.js"

import { VueDraggableNext } from 'vue-draggable-next'

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-checkbox', BaseCheckbox);
app.component('list-items', ListItems,);
app.component('draggable', VueDraggableNext);

app.mount('#app');

// createApp(App).mount('#app')