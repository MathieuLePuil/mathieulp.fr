<template>
    <div class="w-full h-full flex flex-col items-center mt-16">
        <h1 class="text-4xl sm:!text-6xl text-my-purple font-bold">Mentions légales</h1>
    </div>

    <div class="w-[70%] mx-[15%]">
        <p class="mt-16 text-my-black">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site mathieulp.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

        <h2 class="text-my-purple text-xl font-bold mt-16">Éditeur :</h2>
        <p class="text-my-black mt-5 font-lg">Nom : Mathieu Le Puil<br>Adresse : 53 avenue Anatole France, 10000 Troyes<br>Statut : Entrepreneur Individuel (EI)<br>Numéro d'immatriculation au RCS : 977990977</p>

        <h2 class="text-my-purple text-xl font-bold mt-16">Contact :</h2>
        <p class="text-my-black mt-5 font-lg">Adresse e-mail : contact@mathieulp.fr<br>Numéro de téléphone : 07.82.91.70.75<br><br>Numéro d'identification à la TVA : FR72977990977</p>

        <h2 class="text-my-purple text-xl font-bold mt-16">Hébergeur :</h2>
        <p class="text-my-black mt-5 font-lg mb-[5%]">Nom ou dénomination sociale de l'hébergeur : PulseHeberg<br>Adresse : 9, Boulevard de Strasbourg
            83000 Toulon<br>Numéro de téléphone de l'hébergeur : 04.22.14.13.60</p>
    </div>

    <div class="w-full flex justify-center mb-5">
        <p class="text-xs sm:text-sm">&copy; 2023 - {{ $t('footer') }} - Mathieu Le Puil | <router-link to="/mentions-legales" class="text-xs sm:text-sm hover:text-my-purple">Mentions légales</router-link></p>
    </div>

</template>
<script setup>
</script>