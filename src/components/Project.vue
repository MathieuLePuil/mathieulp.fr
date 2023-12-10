<template>
    <section id="projects" class="min-h-screen pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-20">
        <h4 class="mt-10 text-2xl sm:!text-3xl lg:!text-6xl ml-[10%] text-my-purple font-medium z-20">{{ $t('projects') }}</h4>
        <div class="flex flex-wrap mx-[10%] z-20">
            <div class="w-80 mt-14 m-auto lg:mt-16 max-w-full">
                <img src="../assets/img/portfolio.webp" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
                <div class="bg-white shadow-2xl rounded-b-3xl pb-8">
                    <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">Portfolio</h2>
                    <div class="w-5/6 m-auto">
                        <p class="text-sm sm:!text-base text-center text-gray-500 pt-5"><br>{{ $t('portfolio') }}<br><br></p>
                    </div>
                    <div class="flex justify-around text-2xl mt-5">
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3-alt"></i>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-php"></i>
                    </div>
                    <a href="https://portfolio.mathieulp.fr" target="_blank" class="cursor-pointer">
                        <div class="bg-my-purple w-[80%] lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-600 rounded-lg text-white text-center shadow-xl shadow-bg-blue-700 hover:scale-105 transition-all duration-200 ease">
                            <button class="lg:text-sm text-lg font-medium">{{ $t('websitelink') }}</button>
                        </div>
                    </a>
                </div>
            </div>
            <div class="w-80 mt-14 m-auto lg:mt-16 max-w-full">
                <img src="../assets/img/codeclipper.webp" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
                <div class="bg-white shadow-2xl rounded-b-3xl pb-8">
                    <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">CodeClipper</h2>
                    <div class="w-5/6 m-auto">
                        <p class="text-sm sm:!text-base text-center text-gray-500 pt-5"><br>{{ $t('codeclipper') }}<br><br></p>
                    </div>
                    <div class="flex justify-around text-2xl mt-5">
                        <i class="fa-brands fa-symfony"></i>
                        <img src="../assets/img/tailwind-icon.svg" class="w-6 p-0" alt="">
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <a href="https://codeclipper.dev" target="_blank" class="cursor-pointer">
                        <div class="bg-my-purple w-[80%] lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-600 rounded-lg text-white text-center shadow-xl shadow-bg-blue-700 hover:scale-105 transition-all duration-200 ease">
                            <button class="lg:text-sm text-lg font-medium">{{ $t('websitelink') }}</button>
                        </div>
                    </a>
                </div>
            </div>
            <div class="w-80 mt-14 m-auto lg:mt-16 max-w-full">
                <img src="../assets/img/MySymfonyTemplate.webp" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
                <div class="bg-white shadow-2xl rounded-b-3xl pb-8">
                    <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">MySymfonyTemplate</h2>
                    <div class="w-5/6 m-auto">
                        <p class="text-sm sm:!text-base text-center text-gray-500 pt-5"><br>{{ $t('mysymfonytemplate') }}<br><br></p>
                    </div>
                    <div class="flex justify-around text-2xl mt-5">
                        <i class="fa-brands fa-symfony"></i>
                        <img src="../assets/img/tailwind-icon.svg" class="w-6 p-0" alt="">
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <a href="https://github.com/MathieuLePuil/MySymfonyTemplate" target="_blank" class="cursor-pointer">
                        <div class="bg-my-purple w-[80%] lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-600 rounded-lg text-white text-center shadow-xl shadow-bg-blue-700 hover:scale-105 transition-all duration-200 ease">
                            <button class="lg:text-sm text-lg font-medium">{{ $t('websitelink') }}</button>
                        </div>
                    </a>
                </div>
            </div>
            <div class="w-80 mt-14 m-auto lg:mt-16 max-w-full">
                <img src="../assets/img/3event.webp" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
                <div class="bg-white shadow-2xl rounded-b-3xl pb-8">
                    <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">3Event</h2>
                    <div class="w-5/6 m-auto">
                        <p class="text-sm sm:!text-base text-center text-gray-500 pt-5"><br>{{ $t('troyesevent') }}<br><br></p>
                    </div>
                    <div class="flex justify-around text-2xl mt-5">
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3-alt"></i>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-symfony"></i>
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <a href="https://mmi21b12.sae301dev.ovh/" target="_blank" class="cursor-pointer">
                        <div class="bg-my-purple w-[80%] lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-600 rounded-lg text-white text-center shadow-xl shadow-bg-blue-700 hover:scale-105 transition-all duration-200 ease">
                            <button class="lg:text-sm text-lg font-medium">{{ $t('websitelink') }}</button>
                        </div>
                    </a>
                </div>
            </div>
            <div class="w-80 mt-14 m-auto lg:mt-16 max-w-full z-20">
                <img src="../assets/img/popeye.webp" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
                <div class="bg-white shadow-2xl rounded-b-3xl pb-8">
                    <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">Popeye Troyes</h2>
                    <div class="w-5/6 m-auto">
                        <p class="text-sm sm:!text-base text-center text-gray-500 pt-5"><br>{{ $t('popeye') }}<br><br></p>
                    </div>
                    <div class="flex justify-around text-2xl mt-5">
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-sass"></i>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-php"></i>
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <a href="https://popeye-troyes.fr" target="_blank" class="cursor-pointer">
                        <div class="bg-my-purple w-[80%] lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-600 rounded-lg text-white text-center shadow-xl shadow-bg-blue-700 hover:scale-105 transition-all duration-200 ease">
                            <button class="lg:text-sm text-lg font-medium">{{ $t('websitelink') }}</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>