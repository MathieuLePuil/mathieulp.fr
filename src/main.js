import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import router from "./router";


const i18n = createI18n({
  legacy: false,
  locale: "fr",
  messages: {
    en: {
      home: "Home",
      projects: "Projects",
      experience: "Experiences",

      homeh3: "Symfony Developer",
      homeh2: "PrestaShop",
      homep: "Not available for Freelance missions or Full-Time Job",

      portfolio:
        "Professional portfolio built to develop my image in order to find work.",
      codeclipper:
        "CodeClipper is a website to save and share code snippets.",
      symstartsaas:
        "SymsStartSaaS is a Symfony 7 template to quickly launch a SaaS.",
      pocmagiline:
        "During my studies, we created a 3D pool configurator for Magiline.",
      popeye:
        "At Popeye, my work-study company, I redesign the website and create associated tools.",
      exerdevai:
        "ExerDevAI is a development exercise generator using the OpenAI API.",
      websitelink: "Website Link",
      personnal: "(Personal project)",
      group: "(Group project)",
      professional: "(Professional project)",

      scaledevdate: "January 2025 - Present",
      scaledevname: "ScaleDEV Web Developer",
      scaledevdesc:
        "E-commerce Web Developer specializing in PrestaShop (store and modules)",

      freelancedate: "July 2023 - January 2025",
      freelancename: "Freelance Developer",
      freelancedesc:
        "I started my own business to develop my micro-enterprise alongside my studies and my work-study programme.",

      popeyedate: "December 2022 - August 2024",
      popeyename: "Web Developer Work-Study Popeye",
      popeyedesc:
        "Total redesign of the company's website. Creation of a management tool (prices, services...)",

      studydate: "September 2021 - August 2024",
      studyname: "BUT Multimedia and Internet Professions",
      studydesc: "Higher education in web development.",

      readmore: "Read more",
      contactme: "Contact me",

      name: "First / Last name",
      phone: "Phone",
      footer: "All rights reserved",

      mentions: "Legal notices",
      mentions1:
        "In accordance with the provisions of law no. 2004-575 of 21 June 2004 on confidence in the digital economy, users of the mathieulp.fr website are informed of the identity of the various parties involved in its creation and monitoring.",
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
      mentions14: "Host's telephone number : 04.22.14.13.60",
    },
    fr: {
      home: "Accueil",
      projects: "Projets",
      experience: "Expériences",

      homeh3: "Symfony",
      homeh2: "Développeur PrestaShop",
      homep: "Indisponible pour missions Freelance ou CDI",

      portfolio:
        "Portfolio professionnel construit pour développer mon image afin de trouver du travail.",
      codeclipper:
        "CodeClipper est un site web pour enregistrer et partager des extraits de code. ",
      symstartsaas:
        "SymStartSaaS est un template Symfony 7 pour lancer rapidement un SaaS.",
      pocmagiline:
        "Pendant mes études, nous avons réalisé un configurateur 3D de piscine pour Magiline.",
      popeye:
        "Chez Popeye, mon entreprise en alternance, je refonds le site web et crée des outils associés.",
      exerdevai:
        "ExerDevAI est un générateur d'exercices de développement utilisant l'API OpenAI.",
      websitelink: "Lien du site",
      personnal: "(Projet personnel)",
      group: "(Projet de groupe)",
      professional: "(Projet professionnel)",

      scaledevdate: "Janvier 2025 - En cours",
      scaledevname: "Développeur Web ScaleDEV",
      scaledevdesc:
        "Développeur Web E-commerce spécialisé PrestaShop (boutique et modules)",

      freelancedate: "Juillet 2023 - Janvier 2025",
      freelancename: "Développeur Freelance",
      freelancedesc:
        "Je me suis lancé à mon compte afin de développer ma micro-entreprise en parallèle de mes études et de mon alternance.",

      popeyedate: "Décembre 2022 - Août 2024",
      popeyename: "Alternance Développeur Web Popeye",
      popeyedesc:
        "Refonte totale du site web de l'entreprise. Création d'un outil de gestion (tarifs, prestations...)",

      studydate: "Septembre 2021 - Août 2024",
      studyname: "BUT Métiers du Multimédia et de l'Internet",
      studydesc: "Études supérieures dans le domaine de développement web.",

      readmore: "En savoir plus",
      contactme: "Me contacter",

      name: "Prénom / Nom",
      phone: "Téléphone",

      footer: "Tous droits réservés",

      mentions: "Mentions légales",
      mentions1:
        "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site mathieulp.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.",
      mentions2: "Éditeur",
      mentions3: "Nom : Mathieu Le Puil",
      mentions4: "Adresse : 53 avenue Anatole France, 10000 Troyes",
      mentions5: "Statut : Entreprise Individuelle (EI)",
      mentions6: "Numéro d'inscription au RCS : 977990977",
      mentions7: "Contact",
      mentions8: "Adresse e-mail :",
      mentions9: "Numéro de téléphone :",
      mentions10: "Numéro de TVA intracommunautaire : FR72977990977",
      mentions11: "Hébergeur",
      mentions12: "Nom ou raison sociale de l'hébergeur : PulseHeberg",
      mentions13: "Adresse : 9, Boulevard de Strasbourg 83000 Toulon",
      mentions14: "Numéro de téléphone de l'hébergeur :",
    },
  },
});

const app = createApp(App);

// Utilisez Vue-i18n
app.use(i18n);

app.use(router);

app.mount("#app");
