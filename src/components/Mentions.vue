<template>
  <div class="w-full h-full flex flex-col items-center mt-16">
    <h2 class="text-4xl sm:!text-6xl text-white font-bold">
      {{ $t("mentions") }}
    </h2>
  </div>

  <div class="w-[70%] mx-[15%]">
    <p class="mt-16 text-white">{{ $t("mentions1") }}</p>

    <h3 class="text-white text-xl font-bold mt-16">{{ $t("mentions2") }} :</h3>
    <p class="text-white mt-5 font-lg">
      {{ $t("mentions3") }}<br />{{ $t("mentions4") }}<br />{{ $t("mentions5")
      }}<br />{{ $t("mentions6") }}
    </p>

    <h3 class="text-white text-xl font-bold mt-16">{{ $t("mentions7") }} :</h3>
    <p class="text-white mt-5 font-lg">
      {{ $t("mentions8") }}<br />{{ $t("mentions9") }}<br /><br />{{
        $t("mentions10")
      }}
    </p>

    <h3 class="text-white text-xl font-bold mt-16">{{ $t("mentions11") }} :</h3>
    <p class="text-white mt-5 font-lg mb-[5%]">
      {{ $t("mentions12") }}<br />{{ $t("mentions13") }}<br />{{
        $t("mentions14")
      }}
    </p>
  </div>

  <div class="w-full flex justify-center mb-5">
    <p class="text-xs sm:text-sm text-white">
      &copy; {{ getCurrentYear() }} - {{ $t("footer") }} - Mathieu Le Puil |
      <router-link
        to="/mentions-legales"
        class="text-xs sm:text-sm hover:underline"
        >{{ $t("mentions") }}</router-link
      >
    </p>
  </div>
</template>
<script setup>
const getCurrentYear = () => new Date().getFullYear();
</script>
