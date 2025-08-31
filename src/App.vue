<script setup>
import { RouterView, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
</script>

<template>
  <header class="z-30" id="home">
    <nav class="border-gray-200 z-30 fira-code text-white">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-30"
      >
        <router-link to="/" class="flex items-center z-30">
          <img src="./assets/img/LOGO.webp" srcset="./assets/img/LOGO.webp 1x, ./assets/img/LOGO@2x.webp 2x" class="h-8 mr-3" alt="Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap"
            >MathieuLP</span
          >
        </router-link>
        <div class="flex items-center lg:order-2 z-30">
          <div class="relative">
            <button
              @click="toggleDropdown"
              type="button"
              :aria-label="getLocaleButtonAria()"
              aria-haspopup="true"
              :aria-expanded="isDropdownOpen ? 'true' : 'false'"
              aria-controls="language-menu"
              class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600 z-30 hover:scale-105 transition-all duration-200 ease"
            >
              <span class="mr-2 inline-flex h-3.5 w-3.5 rounded-full overflow-hidden">
                <img
                  :src="getLocaleFlagSrc()"
                  :srcset="getLocaleFlagSrc() + ' 1x, ' + getLocaleFlag2x() + ' 2x'"
                  aria-hidden="true"
                  class="h-full w-full object-cover"
                  alt=""
                />
              </span>
              <span class="hidden sm:block">{{ getLocaleLabel() }}</span>
              <font-awesome-icon icon="sort-down" class="pb-1.5 ml-2" />
            </button>
            <div
              v-if="isDropdownOpen"
              id="language-menu"
              role="menu"
              class="z-50 mt-2 text-base list-none divide-gray-100 rounded-lg shadow bg-[#F6F6F6] absolute left-0 w-full"
            >
              <ul
                class="py-2 font-medium flex flex-col justify-around items-center"
                role="none"
              >
                <li>
                  <button
                    @click="
                      changeLocale('fr');
                      closeDropdown();
                    "
                    type="button"
                    aria-label="Changer la langue en Français"
                    class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-200 z-30"
                  >
                    <span class="mr-2 inline-flex h-3.5 w-3.5 rounded-full overflow-hidden">
                      <img
                        src="./assets/img/fr.webp"
                        srcset="./assets/img/fr.webp 1x, ./assets/img/fr@2x.webp 2x"
                        aria-hidden="true"
                        class="h-full w-full object-cover"
                        alt=""
                      />
                    </span>
                      <span class="hidden sm:block">Français</span>
                  </button>
                </li>
                <li>
                  <button
                    @click="
                      changeLocale('en');
                      closeDropdown();
                    "
                    type="button"
                    aria-label="Change language to English"
                    class="inline-flex w-full items-center font-medium justify-center px-4 p-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-200 z-30"
                  >
                    <span class="mr-2 inline-flex h-3.5 w-3.5 rounded-full overflow-hidden">
                      <img
                        src="./assets/img/en.webp"
                        srcset="./assets/img/en.webp 1x, ./assets/img/en@2x.webp 2x"
                        aria-hidden="true"
                        class="h-full w-full object-cover"
                        alt=""
                      />
                    </span>
                      <span class="hidden sm:block">English</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg lg:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span class="sr-only">Menu principal</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 z-20 text-sm text-white"
          id="navbar-language"
        >
          <ul
            class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-4 lg:mt-0 lg:border-0 z-20"
          >
            <li>
              <a
                href="/#home"
                class="block py-2 pl-3 pr-4 text-white rounded hover:text-white hover:underline z-20 hover:scale-105 transition-all duration-200 ease"
                aria-current="page"
                >01. {{ $t("home") }}</a
              >
            </li>
            <li>
              <a
                href="/#projects"
                class="block py-2 pl-3 pr-4 text-white rounded hover:text-white hover:underline z-20 hover:scale-105 transition-all duration-200 ease"
                aria-current="page"
                >02. {{ $t("projects") }}</a
              >
            </li>
            <li>
              <a
                href="/#experience"
                class="block py-2 pl-3 pr-4 text-white rounded hover:text-white hover:underline z-20 hover:scale-105 transition-all duration-200 ease"
                aria-current="page"
                >03. {{ $t("experience") }}</a
              >
            </li>
            <li>
              <a
                href="/#contact"
                class="block py-2 pl-3 pr-4 text-white rounded hover:text-white hover:underline z-20 hover:scale-105 transition-all duration-200 ease"
                aria-current="page"
                >04. Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import { useI18n } from "vue-i18n";

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
      return this.$i18n.locale === "fr"
        ? new URL('./assets/img/fr.webp', import.meta.url).href
        : new URL('./assets/img/en.webp', import.meta.url).href;
    },
    getLocaleLabel() {
      return this.$i18n.locale === "fr" ? "Français" : "English";
    },
    getLocaleFlag2x() {
      return this.$i18n.locale === "fr"
        ? new URL('./assets/img/fr@2x.webp', import.meta.url).href
        : new URL('./assets/img/en@2x.webp', import.meta.url).href;
    },
    getLocaleButtonAria() {
      return this.$i18n.locale === "fr"
        ? "Changer de langue, langue actuelle Français"
        : "Change language, current language English";
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
