<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <div class="max-w-3xl mx-auto px-6 py-24">
      <router-link
        to="/"
        class="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
        </svg>
        Retour
      </router-link>

      <h1 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-16">
        {{ $t('mentions') }}
      </h1>

      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-14">{{ $t('mentions1') }}</p>

      <div class="space-y-10">
        <section>
          <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{{ $t('mentions2') }}</h2>
          <div class="text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
            <p>{{ $t('mentions3') }}</p>
            <p>{{ $t('mentions4') }}</p>
            <p>{{ $t('mentions5') }}</p>
            <p>{{ $t('mentions6') }}</p>
          </div>
        </section>

        <section>
          <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{{ $t('mentions7') }}</h2>
          <div class="text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
            <p>{{ $t('mentions8') }} contact@mathieulp.fr</p>
            <p>{{ $t('mentions9') }}</p>
            <p class="pt-1">{{ $t('mentions10') }}</p>
          </div>
        </section>

        <section>
          <h2 class="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{{ $t('mentions11') }}</h2>
          <div class="text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
            <p>{{ $t('mentions12') }}</p>
            <p>{{ $t('mentions13') }}</p>
            <p>{{ $t('mentions14') }}</p>
          </div>
        </section>
      </div>

      <div class="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <p class="text-sm text-zinc-400 dark:text-zinc-500">
          &copy; {{ getCurrentYear() }} — Mathieu Le Puil
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const getCurrentYear = () => new Date().getFullYear()
</script>
