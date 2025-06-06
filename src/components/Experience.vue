<template>
    <section id="experience" class="h-m-screen lg:!h-screen pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-20 lg:!w-full">
        <div class="flex items-center pb-20 lg:pb-0">
            <h2 class="text-xl sm:text-3xl mt-10 lg:!text-6xl ml-[10%] text-white font-bold text-center">
                {{ $t("experience") }}
            </h2>
        </div>
        <div class="max-w-2xl mx-[10%] z-30">
            <ol class="relative border-l border-white">
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                        {{ $t("scaledevdate") }}
                    </time>
                    <h3 class="text-lg font-semibold text-white">
                        {{ $t("scaledevname") }}
                    </h3>
                    <p class="mb-4 text-base font-normal text-gray-300">
                        {{ $t("scaledevdesc") }}
                    </p>
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                        {{ $t("freelancedate") }}
                    </time>
                    <h3 class="text-lg font-semibold text-white">
                        {{ $t("freelancename") }}
                    </h3>
                    <p class="mb-4 text-base font-normal text-gray-300">
                        {{ $t("freelancedesc") }}
                    </p>
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                        {{ $t("popeyedate") }}
                    </time>
                    <h3 class="text-lg font-semibold text-white">
                        {{ $t("popeyename") }}
                    </h3>
                    <p class="mb-4 text-base font-normal text-gray-300">
                        {{ $t("popeyedesc") }}
                    </p>
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                        {{ $t("studydate") }}
                    </time>
                    <h3 class="text-lg font-semibold text-white">
                        {{ $t("studyname") }}
                    </h3>
                    <p class="mb-4 text-base font-normal text-gray-300">
                        {{ $t("studydesc") }}
                    </p>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup></script>
