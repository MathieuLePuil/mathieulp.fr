<template>
    <section id="home" class="h-full pt-[8vh] lg:!pt-0 lg:!h-[92vh]">
        <div class="h-full w-full flex flex-col justify-center pl-[10%] pb-[5%] z-20">
            <h3 class="z-20 text-xl sm:!text-3xl lg:!text-4xl font-medium text-my-black mb-1 lg:mb-3">{{ $t('homeh3') }}</h3>
            <h1 class="z-20 text-4xl sm:!text-7xl lg:!text-9xl font-bold text-my-purple mb-1 lg:mb-3">Mathieu Le Puil</h1>
            <h2 class="z-20 text-sm sm:!text-3xl lg:!text-4xl font-medium text-my-purple">{{ $t('homeh2') }}</h2>
        </div>
        <div class="fixed bottom-0 -left-2 sm:!left-1 px-4 flex flex-col items-center z-30">
            <a href="mailto:contact@mathieulp.fr" target="_blank"><img src="../assets/img/email.png" class="w-4 sm:!w-8 mb-2 hover:scale-105 transition-all duration-200 ease" alt="Logo Mail" /></a>
            <a href="https://www.linkedin.com/in/mathieulepuil/" target="_blank"><img src="../assets/img/logo_linkedin.png" class="w-4 sm:!w-8 mb-2 hover:scale-105 transition-all duration-200 ease" alt="Logo Linkedin" /></a>
            <a href="https://www.github.com/MathieuLePuil" target="_blank"><img src="../assets/img/logo_github.png" class="w-4 sm:!w-8 mb-2 hover:scale-105 transition-all duration-200 ease" alt="Logo Github" /></a>
            <a href="https://www.twitter.com/MathieuLePuil" target="_blank"><img src="../assets/img/logo_x.png" class="w-4 sm:!w-8 mb-2 hover:scale-105 transition-all duration-200 ease" alt="Logo TwitterX" /></a>
            <div class="h-14 w-1 bg-my-black"></div>
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
        animation: cube 12s ease-in forwards infinite;
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