import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n'; // Importez Vue-i18n ici
import router from './router';

// Créez une instance de Vue-i18n
const i18n = createI18n({
    locale: 'fr', // Langue par défaut
    messages: {
        en: {
            home: 'Home',
            projects: 'My projects',
            whoami: "Who Am I ?",
            skills: "My skills",
            prices: "My prices",
        },
        fr: {
            home: 'Accueil',
            projects: "Mes réalisations",
            whoami: "Qui suis-je ?",
            skills: "Mes compétences",
            prices: "Mes tarifs",
        },
    },
});

const app = createApp(App);

// Utilisez Vue-i18n
app.use(i18n);

app.use(router);

app.mount('#app');
