<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isDark = ref(false)
const isMobileMenuOpen = ref(false)

const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  isDark.value = dark
}

const toggleTheme = () => {
  const newDark = !isDark.value
  localStorage.setItem('theme', newDark ? 'dark' : 'light')
  applyTheme(newDark)
}

const toggleLocale = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches)
    }
  })
})
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <router-link to="/" class="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity duration-150">
        MathieuLP
      </router-link>

      <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        <li>
          <a href="/#home" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150">
            {{ $t('home') }}
          </a>
        </li>
        <li>
          <a href="/#projects" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150">
            {{ $t('projects') }}
          </a>
        </li>
        <li>
          <a href="/#experience" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150">
            {{ $t('experience') }}
          </a>
        </li>
        <li>
          <a href="/#contact" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150">
            Contact
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-1">
        <button
          @click="toggleTheme"
          :aria-label="isDark ? 'Activer le mode clair' : 'Activer le mode sombre'"
          class="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <button
          @click="toggleLocale"
          :aria-label="locale === 'fr' ? 'Switch to English' : 'Passer en Français'"
          class="h-9 px-3 flex items-center justify-center rounded-lg text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150"
        >
          {{ locale === 'fr' ? 'EN' : 'FR' }}
        </button>

        <button
          @click="toggleMobileMenu"
          :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          class="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black"
    >
      <ul class="px-6 py-5 flex flex-col gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        <li>
          <a href="/#home" @click="closeMobileMenu" class="block hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{{ $t('home') }}</a>
        </li>
        <li>
          <a href="/#projects" @click="closeMobileMenu" class="block hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{{ $t('projects') }}</a>
        </li>
        <li>
          <a href="/#experience" @click="closeMobileMenu" class="block hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{{ $t('experience') }}</a>
        </li>
        <li>
          <a href="/#contact" @click="closeMobileMenu" class="block hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
        </li>
      </ul>
    </div>
  </header>

  <RouterView />
</template>
