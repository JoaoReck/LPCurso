<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-purple-9 text-white" height-hint="98">
      <q-toolbar>
        <q-img
          src="../assets/Investidor Premium4.png"
          style="height: 125px; max-width: 135px; margin-left: 50px"
        />
        <div class="q-ml-xl">
          <q-btn
            @mouseover="passoumouse(1)"
            @mouseleave="tiroumouse()"
            rounded
            flat
            size="18px"
            :style="style1"
            label="Finanças"
          />
          <q-btn
            @mouseover="passoumouse(2)"
            @mouseleave="tiroumouse"
            rounded
            flat
            size="18px"
            :style="style2"
            label="Bancos"
            class="q-ml-xl"
          />
          <q-btn
            @mouseover="passoumouse(3)"
            @mouseleave="tiroumouse"
            rounded
            flat
            size="18px"
            :style="style3"
            label="Ganhar Dinheiro"
            class="q-ml-xl"
          />
          <q-btn
            @mouseover="passoumouse(4)"
            @mouseleave="tiroumouse"
            rounded
            flat
            size="18px"
            :style="style4"
            label="Economizar Dinheiro"
            class="q-ml-xl"
          />
          <q-btn
            @mouseover="passoumouse(5)"
            @mouseleave="tiroumouse"
            rounded
            flat
            size="18px"
            :style="style5"
            label="Empregos"
            class="q-ml-xl"
          />
          <q-btn
            @mouseover="passoumouse(6)"
            @mouseleave="tiroumouse"
            rounded
            flat
            size="18px"
            :style="style6"
            label="Estudar"
            class="q-ml-xl"
          />
        </div>
      </q-toolbar>
    </q-header>
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
      style1: ";font-family: Varela Round",
      style2: ";font-family: Varela Round",
      style3: ";font-family: Varela Round",
      style4: ";font-family: Varela Round",
      style5: ";font-family: Varela Round",
      style6: ";font-family: Varela Round",
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
    passoumouse(botao) {
      var self = this;
      self.style1 = ";font-family: Varela Round";
      self.style2 = ";font-family: Varela Round";
      self.style3 = ";font-family: Varela Round";
      self.style4 = ";font-family: Varela Round";
      self.style5 = ";font-family: Varela Round";
      self.style6 = ";font-family: Varela Round";
      switch (botao) {
        case 1:
          self.style1 = "background-color: #02de3dcc;font-family: Varela Round";
          break;
        case 2:
          self.style2 = "background-color: #ffef0dcc;font-family: Varela Round";
          break;
        case 3:
          self.style3 = "background-color: #02de3dcc;font-family: Varela Round";
          break;
        case 4:
          self.style4 = "background-color: #ff0000cc;font-family: Varela Round";
          break;
        case 5:
          self.style5 = "background-color: #000000cc;font-family: Varela Round";
          break;
        case 6:
          self.style6 = "background-color: #0298decc;font-family: Varela Round";
          break;
      }
    },
    tiroumouse() {
      var self = this;
      self.style1 = "background-color: ;font-family: Varela Round";
      self.style2 = "background-color: ;font-family: Varela Round";
      self.style3 = "background-color: ;font-family: Varela Round";
      self.style4 = "background-color: ;font-family: Varela Round";
      self.style5 = "background-color: ;font-family: Varela Round";
      self.style6 = "background-color: ;font-family: Varela Round";
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
