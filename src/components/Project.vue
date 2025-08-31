<template>
    <section id="projects" class="lg:!h-screen h-full pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-30">
        <div class="flex items-center pb-20 lg:pb-0">
            <h2 class="h2 text-xl sm:text-3xl mt-10 lg:!text-6xl ml-[10%] text-white font-bold text-center">
                {{ $t("projects") }}
            </h2>
        </div>
        <div class="gallery-container grid grid-cols-1 lg:grid-cols-3 gap-4 z-30">
            <div class="image-container relative hover:scale-105 transition-all duration-200 ease"
                 @click="hideClickIndicator">
                <img class="h-auto w-full rounded-lg border-white border-2" src="../assets/img/portfolio.webp"
                     alt=""/>
                <div class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-0.5 md:space-y-2"
                    style="background: rgb(255, 255, 255, 0.95)">
                    <div class="flex flex-row justify-between items-center">
                        <h3 class="font-bold text-sm sm:text-xl fira-code">Portfolio</h3>
                        <p class="hidden lg:block text-xs">{{ $t("personnal") }}</p>
                    </div>
                    <p class="text-xs sm:text-sm">{{ $t("portfolio") }}</p>
                    <div class="flex flex-row justify-between items-center">
                        <a href="https://mathieulp.fr/" target="_blank" class="MathieuLP">
                            <font-awesome-icon icon="caret-right" class="mr-2" />
                            {{ $t("websitelink") }}
                        </a>
                        <div class="flex flex-row space-x-1 items-center">
                            <font-awesome-icon :icon="['fab','vuejs']" />
                            <img src="../assets/img/tailwind.webp" alt="TailwindCSS Logo" class="w-5">
                        </div>
                    </div>
                </div>
                <font-awesome-icon icon="hand-pointer" class="click-indicator" v-if="showClickIndicator" />
            </div>

            <div class="image-container relative hover:scale-105 transition-all duration-200 ease">
                <img class="h-auto w-full rounded-lg border-white border-2" src="../assets/img/codeclipper.webp"
                     alt=""/>
                <div class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-0.5 md:space-y-2"
                     style="background: rgb(255, 255, 255, 0.95)">
                    <div class="flex flex-row justify-between items-center">
                        <h3 class="font-bold text-sm sm:text-xl fira-code">CodeClipper</h3>
                        <p class="hidden lg:block text-xs">{{ $t("personnal") }}</p>
                    </div>
                    <p class="text-xs sm:text-sm">{{ $t("codeclipper") }}</p>
                    <div class="flex flex-row justify-between items-center">
                        <a href="https://codeclipper.dev/" target="_blank" class="CodeClipper">
                            <font-awesome-icon icon="caret-right" class="mr-2" />
                            {{ $t("websitelink") }}
                        </a>
                        <div class="flex flex-row space-x-1 items-center">
                            <font-awesome-icon :icon="['fab','symfony']" />
                            <img src="../assets/img/tailwind.webp" alt="TailwindCSS Logo" class="w-5">
                        </div>
                    </div>
                </div>
            </div>

            <div class="image-container relative hover:scale-105 transition-all duration-200 ease">
                <img class="h-auto w-full rounded-lg border-white border-2" src="../assets/img/SymStartSaaS.webp"
                     alt=""/>
                <div class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-0.5 md:space-y-2"
                     style="background: rgb(255, 255, 255, 0.95)">
                    <div class="flex flex-row justify-between items-center">
                        <h3 class="font-bold text-sm sm:text-xl fira-code">SymStartSaaS</h3>
                        <p class="hidden lg:block text-xs">{{ $t("personnal") }}</p>
                    </div>
                    <p class="text-xs sm:text-sm">{{ $t("symstartsaas") }}</p>
                    <div class="flex flex-row justify-between items-center">
                        <a href="https://symstartsaas.mathieulp.fr/" target="_blank" class="SymStartSaaS">
                            <font-awesome-icon icon="caret-right" class="mr-2" />
                            {{ $t("websitelink") }}
                        </a>
                        <div class="flex flex-row space-x-1 items-center">
                            <font-awesome-icon :icon="['fab','symfony']" />
                            <img src="../assets/img/nuxtjs.webp" alt="NuxtJS Logo" class="w-5">
                            <img src="../assets/img/tailwind.webp" alt="TailwindCSS Logo" class="w-5">
                        </div>
                    </div>
                </div>
            </div>

            <div class="image-container relative hover:scale-105 transition-all duration-200 ease">
                <img class="h-auto w-full rounded-lg border-white border-2" src="../assets/img/popeye.webp"
                     alt=""/>
                <div class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-0.5 md:space-y-2"
                     style="background: rgb(255, 255, 255, 0.95)">
                    <div class="flex flex-row justify-between items-center">
                        <h3 class="font-bold text-sm sm:text-xl fira-code">Popeye</h3>
                        <p class="hidden lg:block text-xs">{{ $t("professional") }}</p>
                    </div>
                    <p class="text-xs sm:text-sm">{{ $t("popeye") }}</p>
                    <div class="flex flex-row justify-between items-center">
                        <a href="https://popeye-troyes.fr/" target="_blank" class="Popeye">
                            <font-awesome-icon icon="caret-right" class="mr-2" />
                            {{ $t("websitelink") }}
                        </a>
                        <div class="flex flex-row space-x-1 items-center">
                            <font-awesome-icon :icon="['fab','symfony']" />
                            <font-awesome-icon :icon="['fab','vuejs']" />
                            <img src="../assets/img/tailwind.webp" alt="TailwindCSS Logo" class="w-5">
                        </div>
                    </div>
                </div>
            </div>

            <div class="image-container relative hover:scale-105 transition-all duration-200 ease">
                <img class="h-auto w-full rounded-lg border-white border-2" src="../assets/img/pocmagiline.webp"
                     alt=""/>
                <div class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-0.5 md:space-y-2"
                     style="background: rgb(255, 255, 255, 0.95)">
                    <div class="flex flex-row justify-between items-center">
                        <h3 class="font-bold text-sm sm:text-xl fira-code">POC Magiline</h3>
                        <p class="hidden lg:block text-xs">{{ $t("group") }}</p>
                    </div>
                    <p class="text-xs sm:text-sm">{{ $t("pocmagiline") }}</p>
                    <div class="flex flex-row justify-between items-center">
                        <a href="https://poc-magiline.vercel.app/" target="_blank" class="POC Magiline">
                            <font-awesome-icon icon="caret-right" class="mr-2" />
                            {{ $t("websitelink") }}
                        </a>
                        <div class="flex flex-row space-x-1 items-center">
                            <font-awesome-icon :icon="['fab','vuejs']" />
                            <img src="../assets/img/tailwind.webp" alt="TailwindCSS Logo" class="w-5">
                            <img src="../assets/img/threejs.webp" alt="Three.JS Logo" class="w-4">
                        </div>
                    </div>
                </div>
            </div>

            <div class="image-container relative hover:scale-105 transition-all duration-200 ease">
                <img class="h-auto w-full rounded-lg border-white border-2" src="../assets/img/exerdevai.webp"
                     alt=""/>
                <div class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-0.5 md:space-y-2"
                     style="background: rgb(255, 255, 255, 0.95)">
                    <div class="flex flex-row justify-between items-center">
                        <h3 class="font-bold text-sm sm:text-xl fira-code">ExerDevAI</h3>
                        <p class="hidden lg:block text-xs">{{ $t("personnal") }}</p>
                    </div>
                    <p class="text-xs sm:text-sm">{{ $t("exerdevai") }}</p>
                    <div class="flex flex-row justify-between items-center">
                        <a href="https://exerdevai.dev/" target="_blank" class="ExerDevAI">
                            <font-awesome-icon icon="caret-right" class="mr-2" />
                            {{ $t("websitelink") }}
                        </a>
                        <div class="flex flex-row space-x-1 items-center">
                            <font-awesome-icon :icon="['fab','symfony']" />
                            <img src="../assets/img/openai.svg" alt="OpenAI Logo" class="w-4">
                            <img src="../assets/img/tailwind.webp" alt="TailwindCSS Logo" class="w-5">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.image-container:hover .image-overlay {
    opacity: 1;
}
</style>

<style>
.gallery-container {
    margin: 0 100px;
}

@media (max-width: 500px) {
    .gallery-container {
        margin: 0 50px;
    }
}

.h2 {
    position: relative;
}

.h2::before {
    content: "";
    position: absolute;
    top: 40%;
    left: 47%;
    width: 100%;
    height: 60%;
    background: #6366f1;
    transform: translate(-43%, 5%);
    z-index: -1;
}

.image-container {
    position: relative;
    cursor: pointer;
}

@media (min-width: 1025px) {
    .click-indicator {
        display: none !important;
    }
}

@media (max-width: 1024px) {
    .click-indicator {
        display: block !important;
    }
}

.click-indicator {
    position: absolute;
    top: 35%;
    left: 40%;
    transform: translate(-100%, -100%);
    font-size: 4rem;
    color: #fff;
    animation: clickAnimation 2s infinite;
    z-index: 10;
    pointer-events: none;
    opacity: 1;
}

@keyframes clickAnimation {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}
</style>

<script>
export default {
    data() {
        return {
            showClickIndicator: true,
        };
    },
    methods: {
        hideClickIndicator() {
            this.showClickIndicator = false;
        },
    },
};
</script>
