<template>
    <section class="h-full pt-[8vh] lg:!pt-0 lg:!h-[92vh]">
        <div class="w-full h-full flex flex-col items-center justify-center space-y-3 z-30">
            <div class="z-30">
                <img src="../assets/img/me.webp" alt="Photo de moi" class="w-36 rounded-full">
            </div>
            <div class="flex flex-col justify-center items-center space-y-1 z-30">
                <div>
                    <h2 class="text-white fira-code text-2xl font-semibold">Mathieu Le Puil</h2>
                </div>
                <div>
                    <h3 class="text-my-purple text-xl"><span class="italic">{{ $t('homeh2') }}</span> / {{ $t('homeh3') }}</h3>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="green-circle"></span>
                    <p class="flash-green">{{ $t('homep') }}</p>
                </div>
                <div class="flex items-center space-x-4 z-30">
                    <a href="https://www.github.com/MathieuLePuil" target="_blank">
                        <i class="fa-brands fa-github text-white text-3xl hover:scale-105 transition-all duration-200 ease"></i>
                    </a>
                    <a href="https://www.twitter.com/MathieuLePuil" target="_blank">
                        <i class="fa-brands fa-x-twitter text-white text-3xl hover:scale-105 transition-all duration-200 ease"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mathieulepuil/" target="_blank">
                        <i class="fa-brands fa-linkedin text-white text-3xl hover:scale-105 transition-all duration-200 ease"></i>
                    </a>
                </div>
            </div>
            <a href="mailto:contact@mathieulp.fr" class="z-30">
                <div class="bg-purple-200 text-black font-regular py-1 px-3 text-lg rounded hover:scale-105 transition-all duration-200 ease">
                    <i class="fa-regular fa-envelope text-black font-thin"></i>
                    {{ $t('contactme') }}
                </div>
            </a>
        </div>

        <div class="fixed bottom-0 -left-2 sm:!left-1 px-4 flex flex-col items-center z-30 space-y-1">
            <a href="mailto:contact@mathieulp.fr" target="_blank"><i class="fa-regular fa-envelope text-white text-3xl font-thin hover:scale-105 transition-all duration-200 ease"></i></a>
            <a href="https://www.linkedin.com/in/mathieulepuil/" target="_blank"><i class="fa-brands fa-linkedin text-white text-3xl font-thin hover:scale-105 transition-all duration-200 ease"></i></a>
            <a href="https://www.github.com/MathieuLePuil" target="_blank"><i class="fa-brands fa-github text-white text-3xl font-thin hover:scale-105 transition-all duration-200 ease"></i></a>
            <a href="https://www.twitter.com/MathieuLePuil" target="_blank"><i class="fa-brands fa-x-twitter text-white text-3xl font-thin hover:scale-105 transition-all duration-200 ease"></i></a>
            <div class="h-14 w-1 bg-white"></div>
        </div>
        <ul class="background z-10 hidden lg:!block">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </section>
</template>

<style scoped>
    .green-circle {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-color: #35F106;
        border-radius: 50%;
    }

    .flash-green {
        color: #35F106;
    }

    @keyframes cube {
        from {
            transform: scale(0) rotate(0deg) translate(-50%, -50%);
            opacity: 1;
        }
        to {
            transform: scale(20) rotate(960deg) translate(-50%, -50%);
            opacity: 0;
        }
    }

    .background {
        opacity: 10%;
        position: fixed;
        width: 99vw;
        height: 100vh;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .background li {
        position: absolute;
        top: 80vh;
        left: 45vw;
        width: 10px;
        height: 10px;
        border: solid 1px #dddddd;
        color: transparent;
        transform-origin: top left;
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        animation: cube 20s ease-in forwards infinite;
        z-index: 10;
    }
    .background li:nth-child(0) {
        animation-delay: 0s;
        left: 12vw;
        top: 81vh;
    }

    .background li:nth-child(1) {
        animation-delay: 2s;
        left: 33vw;
        top: 6vh;
    }

    .background li:nth-child(2) {
        animation-delay: 4s;
        left: 75vw;
        top: 61vh;
    }

    .background li:nth-child(3) {
        animation-delay: 6s;
        left: 20vw;
        top: 28vh;
    }

    .background li:nth-child(4) {
        animation-delay: 8s;
        left: 67vw;
        top: 83vh;
    }

    .background li:nth-child(5) {
        animation-delay: 10s;
        left: 84vw;
        top: 16vh;
    }

    .background li:nth-child(6) {
        animation-delay: 12s;
        left: 64vw;
        top: 19vh;
        border-color: #ffffff;
    }

    .background li:nth-child(7) {
        animation-delay: 14s;
        left: 6vw;
        top: 99vh;
        border-color: #ffffff;
    }

    .background li:nth-child(8) {
        animation-delay: 16s;
        left: 27vw;
        top: 57vh;
    }

    .background li:nth-child(9) {
        animation-delay: 18s;
        left: 52vw;
        top: 70vh;
    }

    .background li:nth-child(10) {
        animation-delay: 20s;
        left: 96vw;
        top: 39vh;
    }

    .background li:nth-child(11) {
        animation-delay: 22s;
        left: 47vw;
        top: 44vh;
        border-color: #ffffff;
    }
</style>
<script setup>
</script>