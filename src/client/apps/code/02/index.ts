import Vue from 'vue';
import App from './App.vue';
import { bootstrap } from 'helpers/bootstrap';

bootstrap(new Vue({
    template: `<App />`,

    components: {
        App
    },
}))
