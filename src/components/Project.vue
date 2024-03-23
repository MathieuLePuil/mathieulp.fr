<template>
  <section
    id="projects"
    class="lg:!h-screen h-full pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-30"
  >
    <div class="flex items-center pb-20 lg:pb-0">
      <h2
        class="text-xl sm:text-3xl mt-10 lg:!text-6xl ml-[10%] text-white font-bold text-center"
      >
        {{ $t("projects") }}
      </h2>
    </div>
    <div class="gallery-container grid grid-cols-1 md:grid-cols-3 gap-4 z-30">
      <div
        class="image-container relative hover:scale-105 transition-all duration-200 ease"
        @click="hideClickIndicator"
      >
        <img
          class="h-auto max-w-full rounded-lg border-white border-2"
          src="../assets/img/portfolio.webp"
          alt=""
        />
        <div
          class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-1 md:space-y-2"
          style="background: rgb(255, 255, 255, 0.95)"
        >
          <h3 class="font-bold text-xl fira-code">Portfolio</h3>
          <p class="text-sm">{{ $t("portfolio") }}</p>
          <a href="https://mathieulp.fr/" target="_blank" class=""
            ><i class="fa-solid fa-caret-right mr-2"></i
            >{{ $t("websitelink") }}</a
          >
        </div>
        <i
          class="fa-solid fa-hand-pointer click-indicator"
          v-if="showClickIndicator"
        ></i>
      </div>
      <div
        class="image-container relative hover:scale-105 transition-all duration-200 ease"
        @click="hideClickIndicator"
      >
        <img
          class="h-auto max-w-full rounded-lg border-white border-2"
          src="../assets/img/codeclipper.webp"
          alt=""
        />
        <div
          class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-1 md:space-y-2"
          style="background: rgb(255, 255, 255, 0.95)"
        >
          <h3 class="font-bold text-xl fira-code">CodeClipper</h3>
          <p class="text-sm">{{ $t("codeclipper") }}</p>
          <a href="https://codeclipper.dev/" target="_blank" class="CodeClipper"
            ><i class="fa-solid fa-caret-right mr-2"></i
            >{{ $t("websitelink") }}</a
          >
        </div>
      </div>
      <div
        class="image-container relative hover:scale-105 transition-all duration-200 ease"
        @click="hideClickIndicator"
      >
        <img
          class="h-auto max-w-full rounded-lg border-white border-2"
          src="../assets/img/MySymfonyTemplate.webp"
          alt=""
        />
        <div
          class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-1 md:space-y-2"
          style="background: rgb(255, 255, 255, 0.95)"
        >
          <h3 class="font-bold text-xl fira-code">MySymfonyTemplate</h3>
          <p class="text-sm">{{ $t("mysymfonytemplate") }}</p>
          <a
            href="https://github.com/MathieuLePuil/MySymfonyTemplate"
            target="_blank"
            class="MySymfonyTemplate"
            ><i class="fa-solid fa-caret-right mr-2"></i
            >{{ $t("websitelink") }}</a
          >
        </div>
      </div>
      <div
        class="image-container relative hover:scale-105 transition-all duration-200 ease"
        @click="hideClickIndicator"
      >
        <img
          class="h-auto max-w-full rounded-lg border-white border-2"
          src="../assets/img/popeye.webp"
          alt=""
        />
        <div
          class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-1 md:space-y-2"
          style="background: rgb(255, 255, 255, 0.95)"
        >
          <h3 class="font-bold text-xl fira-code">Popeye</h3>
          <p class="text-sm">{{ $t("popeye") }}</p>
          <a href="https://popeye-troyes.fr/" target="_blank" class="Popeye"
            ><i class="fa-solid fa-caret-right mr-2"></i
            >{{ $t("websitelink") }}</a
          >
        </div>
      </div>
      <div
        class="image-container relative hover:scale-105 transition-all duration-200 ease"
        @click="hideClickIndicator"
      >
        <img
          class="h-auto max-w-full rounded-lg border-white border-2"
          src="../assets/img/pocmagiline.webp"
          alt=""
        />
        <div
          class="image-overlay absolute top-0 left-0 w-full h-full bg-white flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-1 md:space-y-2"
          style="background: rgb(255, 255, 255, 0.95)"
        >
          <h3 class="font-bold text-xl fira-code">POC Magiline</h3>
          <p class="text-sm">{{ $t("pocmagiline") }}</p>
          <a
            href="https://poc-magiline.vercel.app/"
            target="_blank"
            class="POC Magiline"
            ><i class="fa-solid fa-caret-right mr-2"></i
            >{{ $t("websitelink") }}</a
          >
        </div>
      </div>
      <div
        class="image-container relative hover:scale-105 transition-all duration-200 ease"
        @click="hideClickIndicator"
      >
        <img
          class="h-auto max-w-full rounded-lg border-white border-2"
          src="../assets/img/exerdevai.webp"
          alt=""
        />
        <div
          class="image-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-col justify-around opacity-0 transition-opacity duration-300 ease rounded-lg px-5 space-y-1 md:space-y-2"
          style="background: rgb(255, 255, 255, 0.95)"
        >
          <h3 class="font-bold text-xl fira-code">ExerDevAI</h3>
          <p class="text-sm">{{ $t("exerdevai") }}</p>
          <a href="https://exerdevai.dev/" target="_blank" class="ExerDevAI"
            ><i class="fa-solid fa-caret-right mr-2"></i
            >{{ $t("websitelink") }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-container:hover .image-overlay {
  opacity: 1;
}

.image-title,
.image-description,
.image-link {
  margin: 10px;
}
</style>

<style>
.gallery-container {
  margin: 0 100px;
}

@media (max-width: 500px) {
  .gallery-container {
    margin: 0 50px;
  }
}

h2 {
  position: relative;
}

h2::before {
  content: "";
  position: absolute;
  top: 40%;
  left: 47%;
  width: 100%;
  height: 60%;
  background: #6366f1;
  transform: translate(-43%, 5%);
  z-index: -1;
}

.image-container {
  position: relative;
  cursor: pointer;
}

@media (min-width: 1025px) {
  .click-indicator {
    display: none !important;
  }
}

@media (max-width: 1024px) {
  .click-indicator {
    display: block !important;
  }
}

.click-indicator {
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-100%, -100%);
  font-size: 4rem;
  color: #fff;
  animation: clickAnimation 2s infinite;
  z-index: 10;
  pointer-events: none;
  opacity: 1;
}

@keyframes clickAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script>
export default {
  data() {
    return {
      showClickIndicator: true,
    };
  },
  methods: {
    hideClickIndicator() {
      this.showClickIndicator = false;
    },
  },
};
</script>
