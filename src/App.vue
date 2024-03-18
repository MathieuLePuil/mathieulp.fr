<script setup>
        import { RouterView, RouterLink } from 'vue-router'
        import { useI18n } from 'vue-i18n';
</script>

<template>
  <header class="z-30">
      <nav class="border-gray-200 z-30 fira-code text-white">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-30">
              <router-link to="/" class="flex items-center z-30">
                  <img src="./assets/img/LOGO.webp" class="h-8 mr-3" alt="Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap">Mathieu</span>
              </router-link>
              <div class="flex items-center lg:order-2 z-30">
                  <div class="relative">
                      <button @click="toggleDropdown" type="button" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600 z-30 hover:scale-105 transition-all duration-200 ease">
                          <img :src="getLocaleFlagSrc()" aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" alt="Flag">
                          {{ getLocaleLabel() }}
                      </button>
                      <!-- Dropdown -->
                      <div v-if="isDropdownOpen" class="z-50 mt-2 text-base list-none divide-gray-100 rounded-lg shadow bg-[#F6F6F6] absolute left-0 w-full">
                          <ul class="py-2 font-medium flex flex-col justify-around" role="none">
                              <li>
                                  <button @click="changeLocale('fr'); closeDropdown()" type="button" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-200 z-30">
                                      <img src="./assets/img/fr.webp" aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" alt="Test">
                                      Français
                                  </button>
                              </li>
                              <li>
                                  <button @click="changeLocale('en'); closeDropdown()" type="button" class="inline-flex w-full items-center font-medium justify-center px-4 p-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-200 z-30">
                                      <img src="./assets/img/en.webp" aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" alt="Test">
                                      English
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg lg:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-language" aria-expanded="false">
                      <span class="sr-only">Menu principal</span>
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>
              </div>
              <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 z-20 text-sm text-white" id="navbar-language">
                  <ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-4 lg:mt-0 lg:border-0 z-20">
                      <li>
                          <a href="/#home" class="block py-2 pl-3 pr-4 text-white rounded hover:text-white hover:bg-indigo-500 z-20 hover:scale-105 transition-all duration-200 ease" aria-current="page">01. {{ $t('home') }}</a>
                      </li>
                      <li>
                          <a href="/#projects" class="block py-2 pl-3 pr-4 text-white rounded hover:text-white hover:bg-indigo-500 z-20 hover:scale-105 transition-all duration-200 ease" aria-current="page">02. {{ $t('projects') }}</a>
                      </li>
                      <li>
                          <a href="/#skills" class="block py-2 pl-3 pr-4 text-white rounded hover:text-white hover:bg-indigo-500 z-20 hover:scale-105 transition-all duration-200 ease" aria-current="page">03. {{ $t('skills') }}</a>
                      </li>
                      <li>
                          <a href="/#contact" class="block py-2 pl-3 pr-4 text-white rounded hover:text-white hover:bg-indigo-500 z-20 hover:scale-105 transition-all duration-200 ease" aria-current="page">04. Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>

  <RouterView />
</template>

<script>
    import {useI18n} from "vue-i18n";

    export default {
        data() {
            return {
                isDropdownOpen: false,
            };
        },
        methods: {
            changeLocale(locale) {
                this.$i18n.locale = locale;
            },
            getLocaleFlagSrc() {
                return this.$i18n.locale === 'fr' ? 'https://img.freepik.com/vecteurs-libre/illustration-du-drapeau-france_53876-27099.jpg?size=626&ext=jpg&ga=GA1.1.600005458.1693078612&semt=ais' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/1280px-Flag_of_the_United_States_%28Pantone%29.svg.png';
            },
            getLocaleLabel() {
                return this.$i18n.locale === 'fr' ? 'Français' : 'English';
            },
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
            },
            closeDropdown() {
                this.isDropdownOpen = false;
            },
        },
    };
</script>