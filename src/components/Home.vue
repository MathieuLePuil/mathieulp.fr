<script>
import 'animate.css';
</script>

<template>
  <section class="h-full pt-[8vh] lg:!pt-0 lg:!h-[92vh]">
    <div
      class="w-full h-full flex flex-col items-center justify-center space-y-3 z-30"
    >
      <div class="z-30 animate__animated animate__fadeInDown img-photo">
        <img
          src="../assets/img/me.webp"
          srcset="../assets/img/me.webp 1x, ../assets/img/me@2x.webp 2x"
          alt="Photo de moi"
          class="w-36 rounded-full"
        />
      </div>
      <div class="flex flex-col justify-center items-center space-y-1 z-30 animate__animated animate__fadeInDown presentation">
        <div>
          <h1 class="text-white fira-code text-2xl font-semibold">
            Mathieu Le Puil
          </h1>
        </div>
        <div>
          <h2 class="text-my-purple text-xl text-center mx-3">
            {{ $t("homeh2") }} / {{ $t("homeh3") }}
          </h2>
        </div>
        <div class="flex items-center space-x-2">
          <span class="red-circle"></span>
          <p class="flash-red">{{ $t("homep") }}</p>
        </div>
        <div class="flex items-center space-x-4 z-30">
          <a href="https://www.github.com/MathieuLePuil" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le profil GitHub de Mathieu Le Puil">
            <font-awesome-icon :icon="['fab','github']" class="text-white text-3xl hover:scale-105 transition-all duration-200 ease" />
          </a>
          <a href="https://www.twitter.com/MathieuLePuil" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le profil X (Twitter) de Mathieu Le Puil">
            <font-awesome-icon :icon="['fab','x-twitter']" class="text-white text-3xl hover:scale-105 transition-all duration-200 ease" />
          </a>
          <a href="https://www.linkedin.com/in/mathieulepuil/" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le profil LinkedIn de Mathieu Le Puil">
            <font-awesome-icon :icon="['fab','linkedin']" class="text-white text-3xl hover:scale-105 transition-all duration-200 ease" />
          </a>
        </div>
      </div>
      <a href="mailto:contact@mathieulp.fr" class="z-30 animate__animated animate__fadeInDown mail">
        <div
          class="bg-purple-200 text-black font-regular py-1 px-3 text-lg rounded hover:scale-105 transition-all duration-200 ease"
        >
          <font-awesome-icon :icon="['far','envelope']" class="text-black font-thin" />
          {{ $t("contactme") }}
        </div>
      </a>
    </div>

    <div
      class="hidden sm:flex fixed bottom-0 -left-2 sm:!left-1 px-4 flex-col items-center z-30 space-y-1"
    >
      <a href="mailto:contact@mathieulp.fr" target="_blank" aria-label="Envoyer un e‑mail à contact@mathieulp.fr"><font-awesome-icon :icon="['far','envelope']" class="text-white text-3xl font-thin hover:scale-105 transition-all duration-200 ease" /></a>
      <a href="https://www.linkedin.com/in/mathieulepuil/" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le profil LinkedIn de Mathieu Le Puil"><font-awesome-icon :icon="['fab','linkedin']" class="text-white text-3xl font-thin hover:scale-105 transition-all duration-200 ease" /></a>
      <a href="https://www.github.com/MathieuLePuil" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le profil GitHub de Mathieu Le Puil"><font-awesome-icon :icon="['fab','github']" class="text-white text-3xl font-thin hover:scale-105 transition-all duration-200 ease" /></a>
      <a href="https://www.twitter.com/MathieuLePuil" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le profil X (Twitter) de Mathieu Le Puil"><font-awesome-icon :icon="['fab','x-twitter']" class="text-white text-3xl font-thin hover:scale-105 transition-all duration-200 ease" /></a>
      <div class="h-14 w-1 bg-white"></div>
    </div>
    <ul class="background z-10 hidden lg:!block">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
</template>

<style scoped>
:root {
    --animate-delay: 0.5s;
}

.img-photo {
    --animate-delay: 1s;
}

.presentation {
    --animate-delay: 1.5s;
}

.mail {
    --animate-delay: 2s;
}

.green-circle {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #35f106;
  border-radius: 50%;
}

.flash-green {
  color: #35f106;
}

.red-circle {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #FC1723;
  border-radius: 50%;
}

.flash-red {
  color: #FC1723;
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

.background {
  opacity: 10%;
  position: fixed;
  width: 99vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.background li {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #dddddd;
  color: transparent;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 20s ease-in forwards infinite;
  z-index: 10;
}
.background li:nth-child(0) {
  animation-delay: 0s;
  left: 12vw;
  top: 81vh;
}

.background li:nth-child(1) {
  animation-delay: 2s;
  left: 33vw;
  top: 6vh;
}

.background li:nth-child(2) {
  animation-delay: 4s;
  left: 75vw;
  top: 61vh;
}

.background li:nth-child(3) {
  animation-delay: 6s;
  left: 20vw;
  top: 28vh;
}

.background li:nth-child(4) {
  animation-delay: 8s;
  left: 67vw;
  top: 83vh;
}

.background li:nth-child(5) {
  animation-delay: 10s;
  left: 84vw;
  top: 16vh;
}

.background li:nth-child(6) {
  animation-delay: 12s;
  left: 64vw;
  top: 19vh;
  border-color: #ffffff;
}

.background li:nth-child(7) {
  animation-delay: 14s;
  left: 6vw;
  top: 99vh;
  border-color: #ffffff;
}

.background li:nth-child(8) {
  animation-delay: 16s;
  left: 27vw;
  top: 57vh;
}

.background li:nth-child(9) {
  animation-delay: 18s;
  left: 52vw;
  top: 70vh;
}

.background li:nth-child(10) {
  animation-delay: 20s;
  left: 96vw;
  top: 39vh;
}

.background li:nth-child(11) {
  animation-delay: 22s;
  left: 47vw;
  top: 44vh;
  border-color: #ffffff;
}
</style>
<script setup></script>
