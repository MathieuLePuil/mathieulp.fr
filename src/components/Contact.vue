<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const contactForm = ref(null)
const isSubmitting = ref(false)
const isSuccess = ref(false)

emailjs.init('DFr3zRvbCD78VyTjW')

const submitForm = async () => {
  isSubmitting.value = true
  try {
    await emailjs.sendForm('service_tafcc6f', 'template_obzu7bz', contactForm.value)
    isSuccess.value = true
    name.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
  } catch (err) {
    alert(JSON.stringify(err))
  } finally {
    isSubmitting.value = false
  }
}

const getCurrentYear = () => new Date().getFullYear()
</script>

<template>
  <section id="contact" class="py-24 bg-zinc-50 dark:bg-zinc-950 dots">
    <div class="max-w-lg mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-16">
        Contact
      </h2>

      <div
        v-if="isSuccess"
        class="mb-8 px-4 py-3 rounded-xl bg-green-50 dark:bg-green-950/60 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 text-sm"
      >
        Message envoyé avec succès !
      </div>

      <form @submit.prevent="submitForm" ref="contactForm" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="name" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">{{ $t('name') }}</label>
            <input
              v-model="name"
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-all duration-150"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">{{ $t('phone') }}</label>
            <input
              v-model="phone"
              type="tel"
              name="phone"
              id="phone"
              autocomplete="tel"
              class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-all duration-150"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Email</label>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            required
            class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-all duration-150"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Message</label>
          <textarea
            v-model="message"
            name="message"
            id="message"
            rows="5"
            class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-all duration-150 resize-none"
          ></textarea>
        </div>

        <div class="pt-2">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full px-8 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
          >
            {{ isSubmitting ? '...' : 'Envoyer' }}
          </button>
        </div>
      </form>
    </div>

    <div class="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <p class="text-sm text-zinc-400 dark:text-zinc-500">
        &copy; {{ getCurrentYear() }} — {{ $t('footer') }} — Mathieu Le Puil
        <span class="mx-1.5">·</span>
        <router-link to="/mentions-legales" class="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">{{ $t('mentions') }}</router-link>
      </p>
    </div>
  </section>
</template>
