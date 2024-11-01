<template>
  <q-page style="max-width: 100%; overflow-x: hidden" class="flex-top">
    <div class="row">
      <div class="col-6">
        <q-img
          style="max-height: 51vh; min-height: 51vh"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          no-native-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">Caption</div>
        </q-img>
      </div>
      <div class="col-3 q-pl-xs">
        <div class="q-mb-sm">
          <q-img
            style="max-height: 25vh; min-height: 25vh"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            no-native-menu
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>
        </div>
        <div class="">
          <q-img
            style="max-height: 25vh; min-height: 25vh"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            no-native-menu
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>
        </div>
      </div>
      <div class="col-3 q-pl-xs">
        <div class="q-mb-sm">
          <q-img
            style="max-height: 25vh; min-height: 25vh"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            no-native-menu
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>
        </div>
        <div class="">
          <q-img
            style="max-height: 25vh; min-height: 25vh"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            no-native-menu
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>
        </div>
      </div>
    </div>
    <div class="row q-pt-xl">
      <div class="col-2"></div>
      <div class="col-8">
        <span style="font-weight: bold; font-family: Varela Round"></span>
      </div>
      <div class="col-2"></div>
    </div>

    <div class="row q-pt-xl">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="row justify-center" style="">
          <div v-for="(it, i) in ListaNoticias" v-bind:key="i">
            <div class="q-pa-xs" style="min-width: 15vw">
              <q-img
                style="max-height: 25vh; min-height: 25vh"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                no-native-menu
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  {{ it.titulo }}
                </div>
              </q-img>
            </div>
          </div>
          <!-- <div class="col-3 bg-purple">.col</div>
          <div class="col-3 bg-yellow"></div>
          <div class="col-3 bg-pink">.col</div>
          <div class="col-3 bg-deep-purple">.col</div> -->
        </div>
      </div>
      <div class="col-2"></div>
    </div>

    <!-- <div class="row">
      <div class="col">.col</div>
      <div class="col-12 col-md-auto">
        .col-12 .col-md-auto (Variable width content)
      </div>
      <div class="col">.col</div>
    </div> -->
    <!-- <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
      <div class="absolute-bottom text-subtitle1 text-center">Caption</div>
    </q-img> -->
  </q-page>
</template>

<script>
export default {
  name: "EconomizarDinheiro",
  data() {
    return {
      ListaNoticias: [],
      Noticia: {},
    };
  },
  created() {
    var self = this;
    self.ListaNoticias = [];
    for (let i = 0; i < 10; i++) {
      self.Noticia = {};
      self.Noticia.titulo = "titulo" + i;
      self.ListaNoticias.push(self.Noticia);
    }
  },
  activated() {},
  methods: {},
};
</script>
