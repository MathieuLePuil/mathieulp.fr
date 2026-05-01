<template>
  <section id="projects" class="py-24 bg-zinc-50 dark:bg-zinc-950 dots">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-16">
        {{ $t('projects') }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
        >
          <div class="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <img
              :src="project.img"
              :srcset="project.imgSrcset"
              :alt="project.name"
              class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="flex flex-col flex-1 p-5">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">{{ project.name }}</h3>
              <span class="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap mt-0.5 flex-shrink-0">{{ $t(project.type) }}</span>
            </div>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">{{ $t(project.desc) }}</p>
            <div class="flex items-center gap-2">
              <template v-for="icon in project.icons" :key="icon.key">
                <font-awesome-icon
                  v-if="icon.fa"
                  :icon="icon.fa"
                  :class="icon.class"
                  class="text-base"
                />
                <img
                  v-else
                  :src="icon.src"
                  :alt="icon.alt"
                  class="w-4 h-4"
                />
              </template>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import tailwindImg from '../assets/img/tailwind.webp'
import nuxtImg from '../assets/img/nuxtjs.webp'
import threejsImg from '../assets/img/threejs.webp'
import openaiImg from '../assets/img/openai.svg'

const projects = [
  {
    name: 'YoutubeFetch',
    url: 'https://youtubefetch.com/',
    img: new URL('../assets/img/youtubefetch.webp', import.meta.url).href,
    imgSrcset: new URL('../assets/img/youtubefetch.webp', import.meta.url).href + ' 1x, ' + new URL('../assets/img/youtubefetch@2x.webp', import.meta.url).href + ' 2x',
    type: 'personnal',
    desc: 'youtubefetch',
    icons: [
      { key: 'vue', fa: ['fab', 'symfony'], class: 'text-zinc-600 dark:text-zinc-400' },
      { key: 'tw', src: tailwindImg, alt: 'TailwindCSS' },
    ],
  },
  {
    name: 'CodeClipper',
    url: '#',
    img: new URL('../assets/img/codeclipper.webp', import.meta.url).href,
    imgSrcset: new URL('../assets/img/codeclipper.webp', import.meta.url).href + ' 1x, ' + new URL('../assets/img/codeclipper@2x.webp', import.meta.url).href + ' 2x',
    type: 'personnal',
    desc: 'codeclipper',
    icons: [
      { key: 'sym', fa: ['fab', 'symfony'], class: 'text-zinc-600 dark:text-zinc-400' },
      { key: 'tw', src: tailwindImg, alt: 'TailwindCSS' },
    ],
  },
  {
    name: 'SymStartSaaS',
    url: 'https://symstartsaas.mathieulp.fr/',
    img: new URL('../assets/img/SymStartSaaS.webp', import.meta.url).href,
    imgSrcset: new URL('../assets/img/SymStartSaaS.webp', import.meta.url).href + ' 1x, ' + new URL('../assets/img/SymStartSaaS@2x.webp', import.meta.url).href + ' 2x',
    type: 'personnal',
    desc: 'symstartsaas',
    icons: [
      { key: 'sym', fa: ['fab', 'symfony'], class: 'text-zinc-600 dark:text-zinc-400' },
      { key: 'nuxt', src: nuxtImg, alt: 'NuxtJS' },
      { key: 'tw', src: tailwindImg, alt: 'TailwindCSS' },
    ],
  },
  {
    name: 'Popeye',
    url: 'https://popeye-troyes.fr/',
    img: new URL('../assets/img/popeye.webp', import.meta.url).href,
    imgSrcset: new URL('../assets/img/popeye.webp', import.meta.url).href + ' 1x, ' + new URL('../assets/img/popeye@2x.webp', import.meta.url).href + ' 2x',
    type: 'professional',
    desc: 'popeye',
    icons: [
      { key: 'sym', fa: ['fab', 'symfony'], class: 'text-zinc-600 dark:text-zinc-400' },
      { key: 'vue', fa: ['fab', 'vuejs'], class: 'text-[#41B883]' },
      { key: 'tw', src: tailwindImg, alt: 'TailwindCSS' },
    ],
  },
  {
    name: 'POC Magiline',
    url: 'https://poc-magiline.vercel.app/',
    img: new URL('../assets/img/pocmagiline.webp', import.meta.url).href,
    imgSrcset: new URL('../assets/img/pocmagiline.webp', import.meta.url).href + ' 1x, ' + new URL('../assets/img/pocmagiline@2x.webp', import.meta.url).href + ' 2x',
    type: 'group',
    desc: 'pocmagiline',
    icons: [
      { key: 'vue', fa: ['fab', 'vuejs'], class: 'text-[#41B883]' },
      { key: 'tw', src: tailwindImg, alt: 'TailwindCSS' },
      { key: 'three', src: threejsImg, alt: 'Three.JS' },
    ],
  },
  {
    name: 'ExerDevAI',
    url: '#',
    img: new URL('../assets/img/exerdevai.webp', import.meta.url).href,
    imgSrcset: new URL('../assets/img/exerdevai.webp', import.meta.url).href + ' 1x, ' + new URL('../assets/img/exerdevai@2x.webp', import.meta.url).href + ' 2x',
    type: 'personnal',
    desc: 'exerdevai',
    icons: [
      { key: 'sym', fa: ['fab', 'symfony'], class: 'text-zinc-600 dark:text-zinc-400' },
      { key: 'openai', src: openaiImg, alt: 'OpenAI' },
      { key: 'tw', src: tailwindImg, alt: 'TailwindCSS' },
    ],
  },
]
</script>
