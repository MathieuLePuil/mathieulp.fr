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
            homeh3: "Hi, I'm",
            homeh2: "Freelance Full-Stack Developer",
            portfolio: "Portfolio built to develop my image when looking for a work-study position as a Full-Stack web developer.",
            troyesevent: "Website developed during my school studies. The aim was to create a ticketing service for (fictitious) events in our town.",
            popeye: "Popeye is my work-study company. I'm in charge of redesigning the website and creating tools (admin, for example) around it.",
            websitelink: "Website Link",
        },
        fr: {
            home: 'Accueil',
            projects: "Mes réalisations",
            whoami: "Qui suis-je ?",
            skills: "Mes compétences",
            prices: "Mes tarifs",
            homeh3: "Salut ! Moi c'est",
            homeh2: "Développeur Full-Stack Freelance",
            portfolio: "Portfolio construit pour développer mon image lors de ma recherche d'alternance en tant que développeur web.",
            troyesevent: "Site développé lors de mon cursus scolaire. L'objectif était de réalisé une billetterie pour les évènements (fictifs) de notre ville.",
            popeye: "Popeye est l'entreprise de mon alternance. Je m'occupe de la refonte du site web ainsi que la création d'outils autour de celui-ci.",
            websitelink: "Lien du site",
        },
    },
});

const app = createApp(App);

// Utilisez Vue-i18n
app.use(i18n);

app.use(router);

app.mount('#app');
