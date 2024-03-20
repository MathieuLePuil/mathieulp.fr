import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n'; // Importez Vue-i18n ici
import router from './router';

// Créez une instance de Vue-i18n
const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    messages: {
        en: {
            home: 'Home',
            projects: 'Projects',
            experience: "Experiences",

            homeh3: "Web Developer",
            homeh2: "Student and Freelance",
            homep: "Available for freelance missions",

            portfolio: "Professional portfolio built to develop my image in order to find work.",
            codeclipper: "CodeClipper is a website that allows you to share code snippets with other users. It is a project that I am developing in my spare time.",
            mysymfonytemplate: "MySymfonyTemplate is a template for Symfony 5. It allows you to quickly start a project with the basic features already set up.",
            troyesevent: "Website developed during my school studies. The aim was to create a ticketing service for (fictitious) events in our town.",
            popeye: "Popeye is my work-study company. I'm in charge of redesigning the website and creating tools (admin, for example) around it.",
            exerdevai: "ExerDevAI is an exercise generator powered by AI. It integrates the OpenAI API for exercise generation.",
            websitelink: "Website Link",

            freelancedate: "July 2023 - In progress",
            freelancename: "Freelance Developer",
            freelancedesc: "I started my own business to develop my micro-enterprise alongside my studies and my work-study programme.",

            popeyedate: "December 2022 - In progress",
            popeyename: "Web Developer Work-Study Popeye",
            popeyedesc: "Total redesign of the company's website. Creation of a management tool (prices, services...)",

            studydate: "September 2021 - In progress",
            studyname: "BUT Multimedia and Internet Professions",
            studydesc: "Higher education in web development.",

            readmore: "Read more",
            contactme: "Contact me",

            name: "First / Last name",
            phone: "Phone",
            footer: "All rights reserved",

            mentions: "Legal notices",
            mentions1: "In accordance with the provisions of law no. 2004-575 of 21 June 2004 on confidence in the digital economy, users of the mathieulp.fr website are informed of the identity of the various parties involved in its creation and monitoring.",
            mentions2: "Publisher",
            mentions3: "Name : Mathieu Le Puil",
            mentions4: "Address : 53 avenue Anatole France, 10000 Troyes",
            mentions5: "Status : Sole Proprietorship (EI)",
            mentions6: "Registration number in the RCS: 977990977",
            mentions7: "Contact",
            mentions8: "E-mail address :",
            mentions9: "Phone number :",
            mentions10: "VAT identification number: FR72977990977",
            mentions11: "Host",
            mentions12: "Name or corporate name of the host: PulseHeberg",
            mentions13: "Address : 9, Boulevard de Strasbourg 83000 Toulon",
            mentions14: "Host's telephone number : 04.22.14.13.60"
        },
        fr: {
            home: 'Accueil',
            projects: "Projets",
            experience: "Expériences",

            homeh3: "Développeur Web",
            homeh2: "Étudiant et Freelance",
            homep: "Disponible pour missions Freelance",

            portfolio: "Portfolio professionnel construit pour développer mon image afin de trouver du travail.",
            codeclipper: "CodeClipper est un site web permettant d'enregistrer et de partager des extraits de code avec d'autres utilisateurs. ",
            mysymfonytemplate: "MySymfonyTemplate est un template pour Symfony 5. Il permet de démarrer un projet avec les fonctionnalités de base en place.",
            troyesevent: "Site développé lors de mon cursus scolaire. L'objectif était de réalisé une billetterie pour les évènements (fictifs) de notre ville.",
            popeye: "Popeye est l'entreprise de mon alternance. Je m'occupe de la refonte du site web ainsi que la création d'outils autour de celui-ci.",
            exerdevai: "ExerDevAI est un générateur d'exercice de développement boosté à l'IA. Il intègre l'API OpenAI pour la génération d'exercice.",
            websitelink: "Lien du site",

            freelancedate: "Juillet 2023 - En cours",
            freelancename: "Développeur Freelance",
            freelancedesc: "Je me suis lancé à mon compte afin de développer ma micro-entreprise en parallèle de mes études et de mon alternance.",

            popeyedate: "Décembre 2022 - En cours",
            popeyename: "Alternance Développeur Web Popeye",
            popeyedesc: "Refonte totale du site web de l'entreprise. Création d'un outil de gestion (tarifs, prestations...)",

            studydate: "Septembre 2021 - En cours",
            studyname: "BUT Métiers du Multimédia et de l'Internet",
            studydesc: "Études supérieures dans le domaine de développement web.",

            readmore: "En savoir plus",
            contactme: "Me contacter",

            name: "Prénom / Nom",
            phone: "Téléphone",

            footer: "Tous droits réservés",

            mentions: "Mentions légales",
            mentions1: "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site mathieulp.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.",
            mentions2: "Éditeur",
            mentions3: "Nom : Mathieu Le Puil",
            mentions4: "Adresse : 53 avenue Anatole France, 10000 Troyes",
            mentions5: "Statut : Entrepreneur Individuel (EI)",
            mentions6: "Numéro d'immatriculation au RCS : 977990977",
            mentions7: "Contact",
            mentions8: "Adresse e-mail : contact@mathieulp.fr",
            mentions9: "Numéro de téléphone : 07.82.91.70.75",
            mentions10: "Numéro d'identification à la TVA : FR72977990977",
            mentions11: "Hébergeur",
            mentions12: "Nom ou dénomination sociale de l'hébergeur : PulseHeberg",
            mentions13: "Adresse : 9, Boulevard de Strasbourg 83000 Toulon",
            mentions14: "Numéro de téléphone de l'hébergeur : 04.22.14.13.60"
        },
    },
});

const app = createApp(App);

// Utilisez Vue-i18n
app.use(i18n);

app.use(router);

app.mount('#app');
