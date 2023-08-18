<script setup>

</script>

<template>
    <section id="price" class="h-m-screen lg:!h-screen pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-20">
        <div class="w-full flex justify-end">
            <h4 class="mt-10 text-2xl sm:!text-3xl lg:!text-6xl mr-[10%] text-my-purple font-medium z-20">Tarifs</h4>
        </div>
        <div class="flex w-full flex-col justify-between lg:px-[10%] items-center lg:!flex-row z-20 mt-10">

            <!--            TARIF 1             -->
            <div class="w-[80%] lg:!w-full h-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-8 lg:mb-0">
                <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Site vitrine standard</h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="ml-1 text-xs font-normal text-gray-500 dark:text-gray-400 mr-3">À partir de</span>
                    <span class="text-5xl font-bold tracking-tight">499</span>
                    <span class="text-3xl font-semibold">€</span>
                </div>
                <ul role="list" class="space-y-2 my-7">
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Wordpress</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Charte graphique fourni par le client (logo, couleurs, ...)</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Interface administrateur standard</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Site responsive (adapaté à toute taille d'écran)</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">...</span>
                    </li>
                </ul>
                <button type="button" class="text-white !bg-my-purple hover:!bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-3">En savoir plus</button>
            </div>
            <!--            FIN TARIF 1             -->

            <!--            TARIF 2             -->
            <div class="w-[80%] lg:!w-full h-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-8 lg:mx-10 lg:mb-0">
                <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Site vitrine avancé</h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="ml-1 text-xs font-normal text-gray-500 dark:text-gray-400 mr-3">À partir de</span>
                    <span class="text-5xl font-bold tracking-tight">799</span>
                    <span class="text-3xl font-semibold">€</span>
                </div>
                <ul role="list" class="space-y-4 my-7">
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Développé sur mesure</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Création d'une charte graphique personnalisée</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Nom de domaine (.fr) offert pendant 1 an</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Interface administrateur sur mesure</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">...</span>
                    </li>
                </ul>
                <button type="button" class="text-white !bg-my-purple hover:!bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">En savoir plus</button>
            </div>
            <!--            FIN TARIF 2             -->

            <!--            TARIF 3             -->
            <div class="w-[80%] lg:!w-full h-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-8 lg:mb-0">
                <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Site e-commerce</h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="ml-1 text-xs font-normal text-gray-500 dark:text-gray-400 mr-3">À partir de</span>
                    <span class="text-5xl font-bold tracking-tight">1499</span>
                    <span class="text-3xl font-semibold">€</span>
                </div>
                <ul role="list" class="space-y-4 my-7">
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Wordpress ou Prestashop</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Création d'une charte graphique personnalisée</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Nom de domaine (.fr) offert pendant 1 an</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Interface administrateur sur mesure</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">...</span>
                    </li>
                </ul>
                <button type="button" class="text-white !bg-my-purple hover:!bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">En savoir plus</button>
            </div>
            <!--            FIN TARIF 3             -->

            <div class="flex flex-col justify-between lg:!ml-10">

                <!--            TARIF 4             -->
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700 mb-8 h-full lg:h-[33vh] xl:!h-full">
                    <h5 class="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Maintenance</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white mt-8">
                        <span class="text-5xl font-bold tracking-tight">40</span>
                        <span class="text-3xl font-semibold">€</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/heure</span>
                    </div>
                    <div class="space-y-5 mt-12">
                        <button type="button" class="text-white !bg-my-purple hover:!bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">En savoir plus</button>
                    </div>
                </div>
                <!--            FIN TARIF 4             -->

                <!--            TARIF 5             -->
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700 h-full lg:h-[33vh] xl:!h-full">
                    <h5 class="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Développement spécifique</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white mt-6">
                        <span class="text-5xl font-bold tracking-tight">300</span>
                        <span class="text-3xl font-semibold">€</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/jour</span>
                    </div>
                    <div class="space-y-5 mt-9">
                        <button type="button" class="text-white !bg-my-purple hover:!bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">En savoir plus</button>
                    </div>
                </div>
                <!--            FIN TARIF 5             -->

            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
