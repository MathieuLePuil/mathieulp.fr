<script setup>

</script>

<template>
    <section id="contact" class="h-m-screen lg:!h-screen pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-20  lg:!w-full">
        <div class="w-full flex justify-start">
            <h4 class="mt-10 text-2xl sm:!text-3xl lg:!text-6xl ml-[10%] text-my-purple font-medium z-20">Contact</h4>
        </div>
        <div class="z-20 h-full">
            <form action="#" method="POST" class="mx-auto mt-12 max-w-xl sm:mt-20">
                <div class="w-full">
                    <div class="w-full flex flex-col justify-center">
                        <label for="prenom" class="block text-sm font-semibold leading-6 text-gray-900 px-4 lg:!px-0 ml-[8%] lg:ml-0">Prénom / Nom</label>
                        <div class="mt-1 w-full flex justify-center">
                            <input type="text" name="name" id="name" autocomplete="name" class="block w-[80%] lg:!w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-4 lg:!mx-0">
                        </div>
                    </div>
                    <div class="mt-2 w-full flex flex-col justify-center">
                        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900 px-4 lg:!px-0 ml-[8%] lg:ml-0 mt-1">Email</label>
                        <div class="mt-1 w-full flex justify-center">
                            <input type="email" name="email" id="email" autocomplete="email" class="block w-[80%] lg:!w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-4 lg:!mx-0">
                        </div>
                    </div>
                    <div class="mt-2 w-full flex flex-col justify-center">
                        <label for="telephone" class="block text-sm font-semibold leading-6 text-gray-900 px-4 lg:!px-0 ml-[8%] lg:ml-0 mt-1">Téléphone</label>
                        <div class="mt-1 w-full flex justify-center">
                            <input type="tel" name="telephone" id="telephone" autocomplete="tel" class="block w-[80%] lg:!w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-4 lg:!mx-0">
                        </div>
                    </div>
                    <div class="w-full flex flex-col justify-center">
                        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900 px-4 lg:!px-0 ml-[8%] lg:ml-0 mt-2">Message</label>
                        <div class="mt-1 w-full flex justify-center">
                            <textarea name="message" id="message" rows="4" class="block w-[80%] lg:!w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-4 lg:!mx-0"></textarea>
                        </div>
                    </div>
                </div>
                <div class="mt-10 flex justify-center">
                    <button type="submit" class="block max-w-[80%] lg:!max-w-full w-full rounded-md !bg-my-purple px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:!bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Envoyer</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>

</style>
