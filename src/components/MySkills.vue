<template>
    <section id="skills" class="h-m-screen lg:!h-screen pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-20  lg:!w-full">
        <div class="w-full flex justify-start">
            <h4 class="mt-10 text-2xl sm:!text-3xl lg:!text-6xl ml-[10%] text-my-purple font-medium z-20">{{ $t('skills') }}</h4>
        </div>
        <div class="flex w-full flex-col justify-between items-center lg:!flex-row z-20">
            <div class="left w-[80%] lg:!ml-[10%] flex flex-col justify-around h-[70vh]">
                <div class="front-end mt-10">
                    <h5 class="font-bold mb-3">FRONT-END</h5>
                    <div class="flex px-3">
                        <img src="../assets/img/logo_vuejs.png" alt="Logo VueJS" class="h-[50px] px-3">
                        <img src="../assets/img/logo_sass.png" alt="Logo Sass" class="h-[50px] px-3">
                        <img src="../assets/img/logo_tailwind.png" alt="Logo Tailwind" class="h-[50px] px-3">
                    </div>
                </div>
                <div class="back-end mt-8">
                    <h5 class="font-bold mb-3">BACK-END</h5>
                    <div class="flex px-3">
                        <img src="../assets/img/logo_php.png" alt="Logo PHP" class="h-[50px] px-3">
                        <img src="../assets/img/logo_symfony.svg" alt="Logo Symfony" class="h-[50px] px-3">
                        <img src="../assets/img/logo_mysql.png" alt="Logo MySQL" class="h-[50px] px-3">
                    </div>
                </div>
                <div class="cms mt-8">
                    <h5 class="font-bold mb-3">CMS</h5>
                    <div class="flex px-3">
                        <img src="../assets/img/logo_wordpress.svg" alt="Logo Wordpress" class="h-[50px] px-3">
                        <img src="../assets/img/logo_prestashop.png" alt="Logo Prestashop" class="h-[50px] px-3">
                    </div>
                </div>
                <div class="divers mt-8">
                    <h5 class="font-bold mb-3">{{ $t('miscellaneous')}}</h5>
                    <div class="flex px-3">
                        <img src="../assets/img/logo_git.png" alt="Logo Git" class="h-[50px] px-3">
                        <img src="../assets/img/logo_github.png" alt="Logo Github" class="h-[50px] px-3">
                    </div>
                </div>
            </div>
            <div class="right flex justify-center lg:!justify-end mt-16 sm:!max-w-[50%] lg:!max-w-[30%]  lg:!mr-[10%]">
                <img src="../assets/img/CV.png" alt="Mon CV" class="w-[80%]">
            </div>
        </div>
    </section>
</template>