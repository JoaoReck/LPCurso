<template>
  <q-page class="flex-top bg-amber-2">
    <h1 class="headline">{{ usuario1 }}</h1>
    <p class="tagline">
      The perfect widgets.
      <span class="punchline">Forever.</span>
    </p>
    <div>
      <div
        class="center"
        style="
          text-align: center;
          font-weight: bold;
          font-size: medium;
          padding-top: 20px;
        "
      >
        <div>
          <span>Título do Produto</span>
        </div>
        <div>
          <span>com descrição breve</span>
        </div>
        <div class="center" style="text-align: center; font-size: small">
          <span>Descrição do Produto com detalhes</span>
        </div>
      </div>
      <q-card
        class="my-card no-shadow"
        style="
          margin-top: 20px;
          background: linear-gradient(
            90deg,
            rgba(242, 201, 110, 1) 0%,
            rgba(242, 190, 84, 1) 15%,
            rgba(255, 244, 0, 1) 100%
          );
        "
      >
        <div class="row">
          <div class="col">
            <div
              style="
                text-align: center;
                padding-top: 20px;
                color: white;
                font-weight: bold;
              "
            >
              <span>Promoção Imperdível</span>
            </div>
            <div style="text-align: center">
              <span style="font-size: 20px; color: white; font-weight: bold"
                >50% OFF</span
              >
            </div>
            <div style="text-align: center">
              <span style="font-size: 10px; color: white"
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.</span
              >
            </div>
            <div style="text-align: center; padding-top: 20px">
              <q-btn color="white" text-color="pink" label="Aproveite Agora" />
            </div>
          </div>
          <div class="col">
            <q-img
              style="margin-top: 20px; height: 100%"
              src="../assets/mulher sorrindo.png"
            ></q-img>
          </div>
        </div>

        <q-card-section> </q-card-section>
      </q-card>

      <div class="row" style="margin-top: 50px">
        <div class="col-2"></div>
        <div
          class="col-2"
          style="background-color: black; height: 1px; margin-top: 10px"
        ></div>
        <div
          class="col-4"
          style="text-align: center; margin-left: 5px; margin-right: 5px"
        >
          <span> Melhores Escolhas </span>
        </div>
        <div
          class="col-2"
          style="background-color: black; height: 1px; margin-top: 10px"
        ></div>
        <div class="col-2"></div>
      </div>

      <div class="row">
        <div class="col" style="margin: 10px">
          <transition
            appear
            enter-active-class="animated slideInDown slower repeat"
            leave-active-class="animated slideInDown slower repeat"
          >
            <q-card flat>
              <q-img
                style="min-height: 160px"
                src="../assets/produto1.jpg"
              ></q-img>
              <q-btn
                style="width: 100%"
                color="white"
                text-color="pink"
                label="R$ 259,90"
              />
            </q-card>
          </transition>
        </div>
        <div class="col" style="margin: 10px">
          <transition
            class="slower"
            appear
            enter-active-class="animated slideInUp"
          >
            <q-card flat>
              <q-img
                style="min-height: 160px"
                src="../assets/produto2.jpg"
              ></q-img>
              <q-btn
                style="width: 100%"
                color="white"
                text-color="pink"
                label="R$ 399,90"
              />
            </q-card>
          </transition>
        </div>
        <div class="col" style="margin: 10px">
          <transition
            class="slower"
            appear
            enter-active-class="animated slideInDown"
          >
            <q-card flat>
              <q-img
                style="min-height: 160px"
                src="../assets/produto3.jpg"
              ></q-img>
              <q-btn
                style="width: 100%"
                color="white"
                text-color="pink"
                label="R$ 899,90"
              />
            </q-card>
          </transition>
        </div>
      </div>

      <q-card
        class="my-card no-shadow"
        style="
          margin-top: 50px;
          background: linear-gradient(
            90deg,
            rgba(242, 201, 110, 1) 0%,
            rgba(242, 190, 84, 1) 15%,
            rgba(255, 244, 0, 1) 100%
          );
        "
      >
        <div class="row">
          <div class="col">
            <div
              style="
                text-align: center;
                padding-top: 20px;
                color: white;
                font-weight: bold;
              "
            >
              <span style="font-size: 20px">Ofertas da Semana</span>
            </div>
            <div style="text-align: center; padding-top: 20px; color: white">
              <span style="font-size: 15px; margin: 10px"
                >Conheça todas as ofertas da semana por aqui apenas com um
                clique</span
              >
            </div>
            <div
              style="text-align: left; padding-top: 30px; padding-left: 20px"
            >
              <transition
                appear
                enter-active-class="animated rotateIn"
                leave-active-class="animated rotateIn"
              >
                <q-btn color="white" text-color="pink" label="Leia mais" />
              </transition>
            </div>
          </div>
          <div class="col">
            <q-img
              fill
              style="height: 100%; opacity: 70%"
              src="../assets/mulher megafone.png"
            ></q-img>
          </div>
        </div>

        <q-card-section> </q-card-section>
      </q-card>

      <div>
        <div style="text-align: center; margin-top: 30px">
          <span style="font-size: 10px"
            >Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.</span
          >
        </div>
        <div style="text-align: center; margin-top: 10px">
          <span style="font-weight: bold">Mídias Sociais :</span>
        </div>
        <div class="center" style="text-align: center; height: 200px">
          <q-img
            style="width: 30px; height: 30px; margin: 10px"
            src="../assets/instagram.png"
          ></q-img>
          <q-img
            style="width: 30px; height: 30px; margin: 10px"
            src="../assets/facebook.png"
          ></q-img>
          <q-img
            style="width: 30px; height: 30px; margin: 10px"
            src="../assets/site.png"
          ></q-img>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      usuario1: "salsicha",
    };
  },
  created() {},
  activated() {},
};
</script>
