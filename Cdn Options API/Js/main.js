import GreetingsComponent from '../Greetings.js';
import CountComponent from '../Count.js';

      
const app = Vue.createApp({});

// Register Greetings Component
app.component('greetings', GreetingsComponent);

// Register Count Component
app.component('count', CountComponent);

app.mount('#app');