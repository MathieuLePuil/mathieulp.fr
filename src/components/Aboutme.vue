<template>
    <section id="aboutme" class="h-m-screen sm:!h-screen pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-20">
        <div class="w-full flex justify-end">
            <h4 class="mt-10 text-2xl sm:!text-3xl lg:!text-6xl mr-[10%] text-my-purple font-medium z-20">{{ $t('whoami') }}</h4>
        </div>
        <div class="flex w-full flex-col justify-center items-center lg:!flex-row z-20">
            <div class="w-[80%] flex justify-center lg:!justify-start my-10 lg:!my-0 lg:!w-[30%] lg:!ml-[10%]">
                <img src="../assets/img/me.png" alt="Moi" class="w-full max-w-[50%] sm:!max-w-[60%]">
            </div>
            <div class="text-justify text-[16px] text-my-black w-[80%] lg:!w-[50%]  lg:!mr-[10%]">
                <p>{{ $t('iam') }} <span class="text-my-purple font-medium">Mathieu Le Puil</span>, {{ $t('ageone') }} <span class="text-my-purple font-medium">20 {{ $t('agetwo') }}</span> {{ $t('txtformation') }} <span class="text-my-purple font-medium">{{ $t('working') }}</span> {{ $t('asa') }} <span class="text-my-purple font-medium">{{ $t('developper') }}</span> {{ $t('autoecole') }}</p>
                <p class="mt-4">{{ $t('txtprogrammation') }}</p>
                <p class="mt-4">{{ $t('txtstudy') }}</p>
            </div>
        </div>
    </section>
</template>