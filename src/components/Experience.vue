<template>
  <section id="experience" class="py-24 bg-white dark:bg-black dots">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-16">
        {{ $t('experience') }}
      </h2>

      <div class="max-w-2xl">
        <ol class="relative pl-7 border-l border-zinc-200 dark:border-zinc-800 space-y-10">
          <li v-for="item in items" :key="item.key" class="relative">
            <div class="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-700"></div>
            <time class="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              {{ $t(item.date) }}
            </time>
            <h3 class="text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-1 mb-1">
              {{ $t(item.name) }}
            </h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {{ $t(item.desc) }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { key: 'scaledev', date: 'scaledevdate', name: 'scaledevname', desc: 'scaledevdesc' },
  { key: 'freelance', date: 'freelancedate', name: 'freelancename', desc: 'freelancedesc' },
  { key: 'popeye', date: 'popeyedate', name: 'popeyename', desc: 'popeyedesc' },
  { key: 'study', date: 'studydate', name: 'studyname', desc: 'studydesc' },
]
</script>
