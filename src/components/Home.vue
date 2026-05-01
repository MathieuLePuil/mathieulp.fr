<template>
  <section id="home" class="min-h-[calc(100vh-4rem)] flex items-center bg-white dark:bg-black dots">
    <div class="max-w-6xl mx-auto px-6 w-full py-20 md:py-28">
      <div class="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 mb-8">
            <span class="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
            <span class="text-xs font-medium text-red-700 dark:text-red-400">{{ $t('homep') }}</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05] mb-5">
            Mathieu<br>Le Puil
          </h1>

          <p class="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-10">
            {{ $t('homeh2') }} / {{ $t('homeh3') }}
          </p>

          <div class="flex items-center gap-2 mb-10 justify-center md:justify-start">
            <a
              href="https://github.com/MathieuLePuil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub de Mathieu Le Puil"
              class="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150"
            >
              <font-awesome-icon :icon="['fab', 'github']" class="text-lg" />
            </a>
            <a
              href="https://twitter.com/MathieuLePuil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil X (Twitter) de Mathieu Le Puil"
              class="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150"
            >
              <font-awesome-icon :icon="['fab', 'x-twitter']" class="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/mathieulepuil/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn de Mathieu Le Puil"
              class="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-lg" />
            </a>
          </div>

          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="mailto:contact@mathieulp.fr"
              class="px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors duration-150"
            >
              {{ $t('contactme') }}
            </a>
            <a
              href="/#projects"
              class="px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-150"
            >
              {{ $t('projects') }} →
            </a>
          </div>
        </div>

        <div class="flex-shrink-0">
          <img
            src="../assets/img/me.webp"
            srcset="../assets/img/me.webp 1x, ../assets/img/me@2x.webp 2x"
            alt="Photo de Mathieu Le Puil"
            class="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
          />
        </div>

      </div>
    </div>
  </section>
</template>
