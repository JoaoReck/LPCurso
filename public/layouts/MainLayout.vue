<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container style="position: relative">
      <router-view />
    </q-page-container>
    <q-footer
      v-if="widthScreen > 1024"
      elevated
      class="text-primary"
      style="background-color: rgba(10, 23, 55, 0.5)"
    >
      <div class="row">
        <div class="col-12 col-md">
          <span
            class="material-symbols-outlined"
            style="font-size: 100px; color: #f19e39"
          >
            school
          </span>
          <span
            class="text-amber-6"
            style="font-size: x-large; font-weight: bold"
          >
            Mina de Ouro</span
          >
        </div>
        <div
          class="col-12 col-md q-pt-md"
          style="font-size: large; text-align: end"
        >
          <span class="text-amber-6"> DE R$997,00 </span>
          <br />
          <span class="text-white">POR APENAS 12X </span>
          <span class="text-amber-6">DE R$49,70</span>
        </div>
        <div class="col-12 col-md q-pt-md q-pl-md">
          <q-btn
            label="GARANTIR MINHA VAGA!"
            color="amber-10"
            style="font-size: medium"
          ></q-btn>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-12 col-md" style="text-align: center">
          <span
            class="material-symbols-outlined"
            style="font-size: 100px; color: #f19e39"
          >
            school
          </span>
          <span
            class="text-amber-6"
            style="font-size: x-large; font-weight: bold"
          >
            Mina de Ouro</span
          >
        </div>
        <div
          class="col-12 col-md text-white"
          style="font-size: large; font-weight: bold"
        >
          <span class="text-amber-6"> DE R$997,00 </span>
          <br />
          <span>POR APENAS 12X </span>
          <span class="text-amber-6">DE R$49,70</span>
        </div>
        <div class="col-12">
          <q-btn
            label="GARANTIR MINHA VAGA!"
            color="amber-10"
            style="font-size: medium"
          ></q-btn>
        </div>
      </div> -->
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useWindowSize } from "@vueuse/core";

defineOptions({
  name: "MainLayout",
  data() {
    return {
      widthScreen: 0,
    };
  },
  created() {},
  mounted() {
    var self = this;
    window.addEventListener("resize", self.resizeScreen);
  },
  destroyed() {
    window.removeEventListener("resize", self.resizeScreen);
  },
  methods: {
    resizeScreen() {
      var self = this;
      const { width } = useWindowSize();
      self.widthScreen = width;
    },
  },
});

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
