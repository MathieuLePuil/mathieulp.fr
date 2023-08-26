import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n'; // Importez Vue-i18n ici
import router from './router';

// Créez une instance de Vue-i18n
const i18n = createI18n({
    legacy: false,
    locale: 'fr', // Langue par défaut
    messages: {
        en: {
            home: 'Home',
            projects: 'My projects',
            whoami: "Who am I ?",
            skills: "My skills",
            prices: "My prices",

            homeh3: "Hi, I'm",
            homeh2: "Freelance Full-Stack Developer",

            portfolio: "Portfolio built to develop my image when looking for a work-study position as a Full-Stack web developer.",
            troyesevent: "Website developed during my school studies. The aim was to create a ticketing service for (fictitious) events in our town.",
            popeye: "Popeye is my work-study company. I'm in charge of redesigning the website and creating tools (admin, for example) around it.",
            websitelink: "Website Link",

            iam: "I am",
            ageone: "I am",
            agetwo: "years old",
            txtformation: "and I am currently in a B.U.T in Multimedia and Internet Professions at the I.U.T of Troyes. In parallel, I am",
            working: "working",
            asa: "as a",
            developper: "full-stack web developer",
            autoecole: "in the Popeye driving schools.",
            txtprogrammation: "I first became interested in programming during the first lockdown in 2020. At that time I was developing bots for Discord servers. I then became interested in databases for storing user information. Passionate about development, I decided to make it my profession.",
            txtstudy: "Studies were just around the corner. I decided to study the MMI programme because it brought together everything I loved: graphic design, communication, video and, above all, development. So, during my course, I was able to create several websites and learn about a wide range of tools. Naturally, I decided to set up my own business so that I'd always have projects to do outside my current job.",

            miscellaneous: "MISCELLANEOUS",

            standard: "Standard Website",
            advanced: "Advanced Website",
            ecommerce: "E-commerce Website",
            specific: "Specific Development",
            measure: "Developed on measure",
            chart1: "Graphic charter provided by the client (logo, colors, ...)",
            chart2: "Creation of a personalized graphic charter",
            domain: "Domain name (.fr) offered for 1 year",
            admin1: "Standard administrator interface",
            admin2: "Custom administrator interface",
            responsive: "Responsive website (adapted to all screen sizes)",
            from: "From",
            hours: "hour",
            day: "day",
            readmore: "Read more",
            contactme: "Contact me",

            name: "First / Last name",
            phone: "Phone",
            footer: "All rights reserved",
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

            iam: "Je suis",
            ageone: "j'ai",
            agetwo: "ans",
            txtformation: "et je suis actuellement en B.U.T Métiers du Multimédia et de l’Internet à l’I.U.T de Troyes. En parallèle, je suis",
            working: "alternant",
            asa: "en tant que",
            developper: "développeur web Full-Stack",
            autoecole: "dans les auto-écoles Popeye.",
            txtprogrammation: "J’ai commencé à m’intéresser à la programmation durant le premier confinement de 2020. Je développais à ce moment-là des bots pour des serveurs Discord. Je me suis ensuite intéressé aux bases de données pour stocker les informations des utilisateurs. Passionné par le développement, j’ai décidé d’en faire mon métier.",
            txtstudy: "Les études arrivaient à grands pas. Je me suis penché sur la filière MMI car elle regroupait tout ce que j’aimais : Le graphisme, la communication, la vidéo et surtout le développement. J’ai pu donc, au cours de mon cursus, créer plusieurs sites internet et découvrir de nombreux outils. Naturellement, j’ai pris la décision de me lancer en auto-entreprise afin d’avoir toujours des projets à faire en dehors de celui de mon travail actuel.",

            miscellaneous: "DIVERS",

            standard: "Site vitrine standard",
            advanced: "Site vitrine avancé",
            ecommerce: "Site e-commerce",
            specific: "Développement spécifique",
            measure: "Développé sur mesure",
            chart1: "Charte graphique fourni par le client (logo, couleurs, ...)",
            chart2: "Création d'une charte graphique personnalisée",
            domain: "Nom de domaine (.fr) offert pendant 1 an",
            admin1: "Interface administrateur standard",
            admin2: "Interface administrateur sur mesure",
            responsive: "Site responsive (adapté à toute taille d'écran)",
            from: "À partir de",
            hours: "heure",
            day: "jour",
            readmore: "En savoir plus",
            contactme: "Me contacter",

            name: "Prénom / Nom",
            phone: "Téléphone",

            footer: "Tous droits réservés",
        },
    },
});

const app = createApp(App);

// Utilisez Vue-i18n
app.use(i18n);

app.use(router);

app.mount('#app');
