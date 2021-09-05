import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars,faStar,faHandshake,faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars,faStar,faHandshake,faThumbsUp);

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app');
