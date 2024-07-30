<template>
  <q-page style="max-width: 100%; overflow-x: hidden" class="flex-top">
    <!-- <div class="q-pa-md example-row-stacked-to-horizontal">
      <div class="row">
        <div class="col-12 col-md">
          <q-card class="my-card">
            <q-card-section>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.'
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md">
          <q-card class="my-card">
            <q-card-section>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.'
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md">
          <q-card class="my-card">
            <q-card-section>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.'
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md">
          <q-card class="my-card">
            <q-card-section>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.'
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md">
          <q-card class="my-card">
            <q-card-section>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.'
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div> -->
    <!-- 1 PARTE -->
    <div class="row" style="background: linear-gradient(#000000, #434343)">
      <div class="col-12 q-pa-xl col-md" style="background-color: transparent">
        <div>
          <span
            class="material-symbols-outlined"
            style="font-size: 150px; color: #f19e39"
          >
            school
          </span>
          <br />
          <span class="text-white" style="font-size: xx-large"
            >Construa sua própria
          </span>
          <span class="text-amber-10" style="font-size: xx-large"
            >mina de ouro
          </span>
          <br />
          <span class="text-white" style="font-size: xx-large"
            >vendendo qualquer produto físico pela internet!</span
          >
          <br />
          <span class="text-white" style="margin-top: 5px; font-size: medium"
            >Eu vou te ensinar as estratégias comprovadas que transformaram
            minha vida e podem transformar a sua também.</span
          >
          <br />
          <div class="row justify-center q-mt-lg">
            <q-btn
              label="EU QUERO MUDAR DE VIDA"
              color="amber-10"
              glossy
              style="font-size: x-large; margin-top: 20px"
            ></q-btn>
          </div>
        </div>
      </div>
      <div
        class="col-12 col-md"
        style="background-color: transparent; position: relative"
      >
        <div>
          <img
            @mouseover="mouseOver"
            src="../assets/feliz.png"
            style="opacity: 85%; width: 80%"
          />
        </div>
        <div class="row">
          <div
            class="col-12 col-md"
            style="position: absolute; top: 3%; left: 5%"
          >
            <transition
              v-show="isAnimation"
              appear
              pulse
              enter-active-class="animated pulse slow"
              leave-active-class="animated pulse slow"
            >
              <q-img
                height="200px"
                width="200px"
                src="../assets/chat box.png"
                :ratio="1"
              />
            </transition>
          </div>
          <div
            class="col-12 col-md"
            style="position: absolute; top: 40%; left: 20%"
          >
            <transition
              v-show="isAnimation"
              appear
              enter-active-class="animated pulse"
              leave-active-class="animated pulse"
            >
              <q-img
                height="200px"
                width="200px"
                src="../assets/chat box.png"
                :ratio="1"
              />
            </transition>
          </div>
          <div
            class="col-12 col-md"
            style="position: absolute; top: 10%; left: 50%"
          >
            <transition
              v-show="isAnimation"
              appear
              enter-active-class="animated pulse slower"
              leave-active-class="animated pulse slower"
            >
              <q-img
                height="200px"
                width="200px"
                src="../assets/chat box.png"
                :ratio="1"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
    <!-- 2 PARTE -->
    <div class="row" style="background: linear-gradient(#434343, #000000)">
      <div class="col-12 col-md">
        <div>
          <transition appear enter-active-class="animated slideInDown slower">
            <q-img
              @mouseover="mouseOver"
              src="../assets/mao.png"
              height="60vh"
              style="opacity: 85%"
            />
          </transition>
        </div>
      </div>
      <div class="col-12 col-md q-mt-xl">
        <transition
          appear
          enter-active-class="animated slideInDown slower delay-1s"
        >
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-btn style="" round color="amber-10" icon="check" />
              </q-item-section>
              <q-item-section
                class="text-white"
                style="font-weight: bold; font-size: large"
                >Nunca vendeu nada na internet mas deseja criar seu próprio
                negócio na internet e viver disso</q-item-section
              >
            </q-item>

            <q-separator
              color="amber-10"
              style="height: 100px; width: 3px; margin-left: 35px"
              vertical
            ></q-separator>

            <q-item>
              <q-item-section avatar>
                <q-btn style="" round color="amber-10" icon="check" />
              </q-item-section>
              <q-item-section
                class="text-white"
                style="font-weight: bold; font-size: large"
                >Já vende algo na internet, mas ainda não sabe como transformar
                isso em um negócio que fatura milhões.</q-item-section
              >
            </q-item>

            <q-separator
              color="amber-10"
              style="height: 100px; width: 3px; margin-left: 35px"
              vertical
            ></q-separator>

            <q-item>
              <q-item-section avatar>
                <q-btn style="" round color="amber-10" icon="check" />
              </q-item-section>
              <q-item-section
                class="text-white"
                style="font-weight: bold; font-size: large"
                >Já trabalha com internet há algum tempo e quer aprender o que
                foi feito nos bastidores do maior lançamento da América
                Latina.</q-item-section
              >
            </q-item>
          </q-list>
        </transition>
        <div class="row justify-center q-ma-lg">
          <q-btn
            label="ISSO É PRA MIM"
            color="amber-10"
            glossy
            style="font-size: x-large"
          ></q-btn>
        </div>
      </div>
    </div>
    <!-- 3 PARTE -->
    <div class="row" style="padding-top: 10vh">
      <div class="col-12 col-md" style="text-align: center">
        <span style="font-size: xx-large"
          >99% das pessoas, gasta rios de dinheiro com um marketing
          ineficaz.</span
        >
      </div>
    </div>

    <div style="margin-top: 10px">
      <div class="col-12 col-md q-pa-xl" style="text-align: center">
        <span style="font-size: medium"
          >Por que você deve estar preparado? Frente à fragilidade do mercado
          econômico, qualquer situação que interfira no fluxo, como aumentos
          bruscos nas taxas de juros, picos de inflação acima do esperado e uma
          escalada anormal de tensões geopolíticas, está levando a economia
          mundial à recessão. Mesmo que o cenário mude e tudo se normalize, o
          dinheiro nunca será distribuído de forma uniforme. Suas expectativas
          de conseguir uma casa própria ou um veículo estarão ainda mais
          distantes do que você imagina. É por isso que você precisa das
          estratégias certas para se destacar e prosperar. Eu vou te mostrar
          como.
        </span>
      </div>
    </div>

    <div class="row" style="margin-top: 10px">
      <div class="col-12 col-md q-pa-md" style="text-align: center">
        <span class="text-amber-5" style="font-size: xx-large"
          >Não é mais novidade que o mercado mudou, olha isso...</span
        >
      </div>
    </div>

    <div class="row q-pa-xl">
      <div class="col-12 col-md q-pa-md">
        <q-card class="bg-orange-12">
          <q-card-section>
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: white"
            >
              trending_up
            </span>
          </q-card-section>
          <q-card-section>
            <span class="text-white" style="font-size: xx-large">
              Anos 2010 - 2020
            </span>
          </q-card-section>
          <q-card-section>
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: white"
            >
              check
            </span>
            <span class="text-white" style="font-size: medium">
              Lançamentos com ROI absurdo
            </span>
            <br />
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: white"
            >
              check
            </span>
            <span class="text-white" style="font-size: medium">
              Lucros altos todos os meses
            </span>
            <br />
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: white"
            >
              check
            </span>
            <span class="text-white" style="font-size: medium">
              Altas taxas de abertura
            </span>
            <br />
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: white"
            >
              check
            </span>
            <span class="text-white" style="font-size: medium">
              Concorrência baixa
            </span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md q-pa-md">
        <q-card class="bg-blue-grey-10">
          <q-card-section>
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: white"
            >
              trending_down
            </span>
          </q-card-section>
          <q-card-section>
            <span class="text-white" style="font-size: xx-large">
              Atualmente
            </span>
          </q-card-section>
          <q-card-section>
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: #f19e39"
            >
              check
            </span>
            <span class="text-white" style="font-size: medium">
              Lançamentos que quase não se pagam
            </span>
            <br />
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: #f19e39"
            >
              check
            </span>
            <span class="text-white" style="font-size: medium">
              Operações com margens apertadas
            </span>
            <br />
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: #f19e39"
            >
              check
            </span>
            <span class="text-white" style="font-size: medium">
              Taxas de abertura ridículas
            </span>
            <br />
            <span
              class="material-symbols-outlined"
              style="font-size: 30px; color: #f19e39"
            >
              check
            </span>
            <span class="text-white" style="font-size: medium">
              Oceanos azuis se transformaram em mares sangrentos
            </span>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md q-pl-xl q-pr-xl" style="text-align: center">
        <div>
          <span style="font-size: medium"
            >Isso está acontecendo porque eles estão focados em estratégias de
            <b>COPIA E COLA</b> de fórmulas antigas. Isso não funciona mais
            porque não existe mais bobo na internet.
          </span>
        </div>
      </div>
    </div>
    <!-- 4 PARTE -->
    <div class="q-mt-lg">
      <div class="row">
        <div class="col-12 col-md" style="text-align: center">
          <q-parallax
            style="min-height: 70vh; max-height: 70vh"
            src="../assets/carro.jpg"
          >
            <h1 class="text-white" style="font-weight: bold">
              Vai PERDER essa CHANCE ?
            </h1>
          </q-parallax>
        </div>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col-12 col-md">
          <q-parallax src="../assets/dinheiro1.jpg" style="">
            <h1 class="text-white"></h1>
          </q-parallax>
        </div>
      </div>
    </div>
    <div class="col-12 bg-black">
      <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        class="bg-grey-9 shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/cat.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/linux-avatar.png"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/material.png"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/donuts.png"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <!-- 5 PARTE -->
    <!-- <div
      class="row"
      style="
        min-height: 70vh;
        max-height: 70vh;
        background: linear-gradient(#000000, #434343);
      "
    >
      <div class="col-2" style="background-color: transparent"></div>
      <div class="col-4" style="background-color: transparent">
        <div style="padding-top: 5vh">
          <br />
          <span class="text-white" style="font-size: xx-large"
            >O que Você Vai Aprender:
          </span>
          <br />
          <q-btn
            label="EU QUERO TUDO ISSO!!!"
            color="amber-10"
            glossy
            style="font-size: x-large; margin-top: 20px"
          ></q-btn>
        </div>
      </div>
      <div class="col" style="background-color: transparent">
        <div style="padding-top: 5vh">
          <q-scroll-area
            :thumb-style="thumbStyle"
            :bar-style="barStyle"
            style="height: 60vh; max-width: 40vw"
          >
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-btn padding="lg" color="amber-10">
                    <span style="font-weight: bold; font-size: large"
                      >1</span
                    ></q-btn
                  >
                </q-item-section>
                <q-item-section
                  class="text-white"
                  style="font-weight: bold; font-size: large"
                >
                  <q-card style="background-color: #434343">
                    <q-card-section>
                      <span style="font-size: x-large; font-weight: bold"
                        >Marketing de Precisão:</span
                      >
                      <br />
                      <span style="font-size: medium">
                        Eu vou te ensinar a dominar as plataformas do Google e
                        Facebook para direcionar suas campanhas com precisão
                        laser.</span
                      >
                    </q-card-section>
                  </q-card>
                  <div style="text-align: center">
                    <q-icon
                      size="xl"
                      name="keyboard_arrow_down"
                      color="white"
                    ></q-icon></div
                ></q-item-section>
              </q-item>

              <q-separator
                color="amber-10"
                style="height: 50px; width: 3px; margin-left: 45px"
                vertical
              ></q-separator>

              <q-item>
                <q-item-section avatar>
                  <q-btn padding="lg" color="amber-10">
                    <span style="font-weight: bold; font-size: large"
                      >2</span
                    ></q-btn
                  >
                </q-item-section>
                <q-item-section
                  class="text-white"
                  style="font-weight: bold; font-size: large"
                >
                  <q-card style="background-color: #434343">
                    <q-card-section>
                      <span style="font-size: x-large; font-weight: bold"
                        >Marketing de Precisão:</span
                      >
                      <br />
                      <span style="font-size: medium">
                        Eu vou te ensinar a dominar as plataformas do Google e
                        Facebook para direcionar suas campanhas com precisão
                        laser.</span
                      >
                    </q-card-section>
                  </q-card>
                  <div style="text-align: center">
                    <q-icon
                      size="xl"
                      name="keyboard_arrow_down"
                      color="white"
                    ></q-icon></div
                ></q-item-section>
              </q-item>

              <q-separator
                color="amber-10"
                style="height: 50px; width: 3px; margin-left: 45px"
                vertical
              ></q-separator>

              <q-item>
                <q-item-section avatar>
                  <q-btn padding="lg" color="amber-10">
                    <span style="font-weight: bold; font-size: large"
                      >3</span
                    ></q-btn
                  >
                </q-item-section>
                <q-item-section
                  class="text-white"
                  style="font-weight: bold; font-size: large"
                >
                  <q-card style="background-color: #434343">
                    <q-card-section>
                      <span style="font-size: x-large; font-weight: bold"
                        >Marketing de Precisão:</span
                      >
                      <br />
                      <span style="font-size: medium">
                        Eu vou te ensinar a dominar as plataformas do Google e
                        Facebook para direcionar suas campanhas com precisão
                        laser.</span
                      >
                    </q-card-section>
                  </q-card>
                  <div style="text-align: center">
                    <q-icon
                      size="xl"
                      name="keyboard_arrow_down"
                      color="white"
                    ></q-icon></div
                ></q-item-section>
              </q-item>

              <q-separator
                color="amber-10"
                style="height: 50px; width: 3px; margin-left: 45px"
                vertical
              ></q-separator>

              <q-item>
                <q-item-section avatar>
                  <q-btn padding="lg" color="amber-10">
                    <span style="font-weight: bold; font-size: large"
                      >4</span
                    ></q-btn
                  >
                </q-item-section>
                <q-item-section
                  class="text-white"
                  style="font-weight: bold; font-size: large"
                >
                  <q-card style="background-color: #434343">
                    <q-card-section>
                      <span style="font-size: x-large; font-weight: bold"
                        >Marketing de Precisão:</span
                      >
                      <br />
                      <span style="font-size: medium">
                        Eu vou te ensinar a dominar as plataformas do Google e
                        Facebook para direcionar suas campanhas com precisão
                        laser.</span
                      >
                    </q-card-section>
                  </q-card>
                  <div style="text-align: center">
                    <q-icon
                      size="xl"
                      name="keyboard_arrow_down"
                      color="white"
                    ></q-icon></div
                ></q-item-section>
              </q-item>

              <q-separator
                color="amber-10"
                style="height: 50px; width: 3px; margin-left: 45px"
                vertical
              ></q-separator>

              <q-item>
                <q-item-section avatar>
                  <q-btn padding="lg" color="amber-10">
                    <span style="font-weight: bold; font-size: large"
                      >5</span
                    ></q-btn
                  >
                </q-item-section>
                <q-item-section
                  class="text-white"
                  style="font-weight: bold; font-size: large"
                >
                  <q-card style="background-color: #434343">
                    <q-card-section>
                      <span style="font-size: x-large; font-weight: bold"
                        >Marketing de Precisão:</span
                      >
                      <br />
                      <span style="font-size: medium">
                        Eu vou te ensinar a dominar as plataformas do Google e
                        Facebook para direcionar suas campanhas com precisão
                        laser.</span
                      >
                    </q-card-section>
                  </q-card>
                  <div style="text-align: center">
                    <q-icon
                      size="xl"
                      name="keyboard_arrow_down"
                      color="white"
                    ></q-icon></div
                ></q-item-section>
              </q-item>

              <q-separator
                color="amber-10"
                style="height: 50px; width: 3px; margin-left: 45px"
                vertical
              ></q-separator>

              <q-item>
                <q-item-section avatar>
                  <q-btn padding="lg" color="amber-10">
                    <span style="font-weight: bold; font-size: large"
                      >6</span
                    ></q-btn
                  >
                </q-item-section>
                <q-item-section
                  class="text-white"
                  style="font-weight: bold; font-size: large"
                >
                  <q-card style="background-color: #434343">
                    <q-card-section>
                      <span style="font-size: x-large; font-weight: bold"
                        >Marketing de Precisão:</span
                      >
                      <br />
                      <span style="font-size: medium">
                        Eu vou te ensinar a dominar as plataformas do Google e
                        Facebook para direcionar suas campanhas com precisão
                        laser.</span
                      >
                    </q-card-section>
                  </q-card>
                  <div style="text-align: center">
                    <q-icon
                      size="xl"
                      name="keyboard_arrow_down"
                      color="white"
                    ></q-icon></div
                ></q-item-section>
              </q-item>

              <q-separator
                color="amber-10"
                style="height: 50px; width: 3px; margin-left: 45px"
                vertical
              ></q-separator>

              <q-item>
                <q-item-section avatar>
                  <q-btn padding="lg" color="amber-10">
                    <span style="font-weight: bold; font-size: large"
                      >7</span
                    ></q-btn
                  >
                </q-item-section>
                <q-item-section
                  class="text-white"
                  style="font-weight: bold; font-size: large"
                >
                  <q-card style="background-color: #434343">
                    <q-card-section>
                      <span style="font-size: x-large; font-weight: bold"
                        >Marketing de Precisão:</span
                      >
                      <br />
                      <span style="font-size: medium">
                        Eu vou te ensinar a dominar as plataformas do Google e
                        Facebook para direcionar suas campanhas com precisão
                        laser.</span
                      >
                    </q-card-section>
                  </q-card></q-item-section
                >
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </div> -->
    <!-- 6 PARTE -->
    <!-- <div class="row" style="padding-bottom: 5vh; min-width: 100vw">
      <div class="col"></div>
      <div class="col-12" style="text-align: center">
        <h1 class="text-amber-10" style="font-weight: bold">
          Chegou a hora de tomar a decisão!
        </h1>
        <div>
          <span style="font-size: medium">
            Você está com o futuro em suas mãos. Chegou a hora de tomar a
            decisão que te deixará mais perto de faturar 5, 6 digitos por mês
            vendendo produtos físicos online. Com minha Masterclass Print On
            Demand, eu vou te ensinar as estratégias e técnicas para construir o
            negócio que vai transformar a sua vida.
          </span>
        </div>
      </div>
      <div class="col"></div>
    </div> -->
    <!-- <div class="row q-pt-xl bg-dark">
      <div class="col"></div>
      <div class="col-6">
        <q-card class="bg-grey-10" flat bordered>
          <q-card-section>
            <div class="row">
              <div class="col">
                <h3 style="text-align: center" class="text-white">
                  OFERTA ESPECIAL
                </h3>
                <div style="text-align: center">
                  <span style="font-size: medium; color: white"
                    >Essa oferta se encerra hoje!</span
                  >
                </div>
                <div class="q-pt-lg q-pl-lg">
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span class="text-white" style="font-size: medium">
                    Marketing de Precisão
                  </span>
                  <br />
                  <q-separator
                    class="bg-white"
                    style="height: 1px; width: 80%; opacity: 0.6"
                  ></q-separator>
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span class="text-white" style="font-size: medium">
                    Produtos Vencedores:
                  </span>
                  <br />
                  <q-separator
                    class="bg-white"
                    style="height: 1px; width: 80%; opacity: 0.6"
                  ></q-separator>
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span class="text-white" style="font-size: medium">
                    Apoio Contínuo
                  </span>
                  <br />
                  <q-separator
                    class="bg-white"
                    style="height: 1px; width: 80%; opacity: 0.6"
                  ></q-separator>
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span class="text-white" style="font-size: medium">
                    Comunidade Exclusiva
                  </span>
                  <br />
                  <q-separator
                    class="bg-white"
                    style="height: 1px; width: 80%; opacity: 0.6"
                  ></q-separator>
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span class="text-white" style="font-size: medium">
                    Marketing de Conteúdo
                  </span>
                  <br />
                  <q-separator
                    class="bg-white"
                    style="height: 1px; width: 80%; opacity: 0.6"
                  ></q-separator>
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span class="text-white" style="font-size: medium">
                    Google Ads e Facebook Ads
                  </span>
                  <br />
                  <q-separator
                    class="bg-white"
                    style="height: 1px; width: 80%; opacity: 0.6"
                  ></q-separator>
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span class="text-white" style="font-size: medium">
                    Seleção de Produtos de Alta Demanda
                  </span>
                  <br />
                  <q-separator
                    class="bg-white"
                    style="height: 1px; width: 80%; opacity: 0.6"
                  ></q-separator>
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span
                    class="text-white"
                    style="font-size: medium; font-weight: bold"
                  >
                    +BÔNUS
                  </span>
                  <br />
                  <q-separator
                    class="bg-white"
                    style="height: 1px; width: 80%; opacity: 0.6"
                  ></q-separator>
                  <span
                    class="material-symbols-outlined text-positive"
                    style="font-size: 30px"
                  >
                    check
                  </span>
                  <span
                    class="text-white"
                    style="font-size: medium; font-weight: bold"
                  >
                    + PRODUTOS EXCLUSIVOS COM ATÉ 99% DE COMISSÃO
                  </span>
                </div>
              </div>
              <q-separator
                vertical
                style="opacity: 0.6; width: 1px; height: 50vh; margin-top: 5vh"
                class="bg-white"
              ></q-separator>
              <div class="col">
                <div style="text-align: center" class="q-pt-xl">
                  <span class="text-amber-10" style="font-size: xx-large"
                    >DE R$997,00</span
                  >
                  <br />
                  <span class="text-white" style="font-size: xx-large"
                    >POR APENAS 12X DE</span
                  >
                  <br />
                  <div class="q-pt-md">
                    <span class="text-white" style="font-size: xx-large"
                      >R$49,70</span
                    >
                  </div>
                  <br />
                  <div class="q-pt-kg">
                    <span
                      class="text-grey-5"
                      style="font-size: medium; font-weight: bold"
                      >Ou à vista R$497,00</span
                    >
                  </div>
                  <br />
                  <transition
                    v-show="isAnimation"
                    appear
                    enter-active-class="animated pulse"
                    leave-active-class="animated pulse"
                  >
                    <q-btn
                      @mouseover="mouseOver"
                      glossy
                      label="GARANTIR MINHA VAGA!"
                      color="amber-10"
                      style="font-size: xx-large"
                    ></q-btn>
                  </transition>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section> </q-card-section>
        </q-card>
      </div>
      <div class="col"></div>
    </div> -->
    <!-- 7 PARTE -->
    <!-- <div class="row bg-dark">
      <div class="col"></div>
      <div class="col" style="text-align: center; margin-top: 50px">
        <span style="color: white; font-weight: bold; font-size: xx-large"
          >Nossos Contatos</span
        >
        <div class="q-pt-lg">
          <q-btn
            @mouseover="mouseOverContato('facebook')"
            @mouseleave="mouseLeaveContato()"
            style="margin-right: 20px"
            :text-color="textColorFacebook"
            round
            size="15px"
            icon="ion-logo-facebook"
          />

          <q-btn
            @mouseover="mouseOverContato('whatsapp')"
            @mouseleave="mouseLeaveContato()"
            :text-color="textColorWhatsapp"
            style="margin-right: 20px"
            round
            size="15px"
            icon="ion-logo-whatsapp"
          />
          <q-btn
            @mouseover="mouseOverContato('instagram')"
            @mouseleave="mouseLeaveContato()"
            :text-color="textColorInstagram"
            style="margin-right: 20px"
            round
            size="15px"
            icon="ion-logo-instagram"
          />
          <q-btn
            @mouseover="mouseOverContato('email')"
            @mouseleave="mouseLeaveContato()"
            :text-color="textColorEmail"
            style="margin-right: 20px"
            round
            size="15px"
            icon="ion-mail"
          />
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="bg-dark" style="min-height: 10vh"></div> -->
    <!-- PAGE SCROLLER -->
    <!-- <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="dark" style="opacity: 70%" />
    </q-page-scroller> -->
  </q-page>
</template>
<script>
import { ref } from "vue";
export default {
  name: "LPCurso",
  data() {
    return {
      usuario1: "salsicha",
      isAnimation: true,
      slide: ref(1),
      autoplay: ref(true),
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#F19E39",
        width: "5px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#F19E39",
        width: "9px",
        opacity: 0.2,
      },
      textColorFacebook: "grey-5",
      textColorWhatsapp: "grey-5",
      textColorInstagram: "grey-5",
      textColorEmail: "grey-5",
    };
  },
  created() {},
  activated() {},
  methods: {
    mouseOver() {
      var self = this;
      self.isAnimation = false;
      setInterval(() => {
        self.isAnimation = true;
      }, 500);
    },
    mouseOverContato(contato) {
      var self = this;
      switch (contato) {
        case "facebook":
          self.textColorFacebook = "amber-10";
          break;
        case "whatsapp":
          self.textColorWhatsapp = "amber-10";
          break;
        case "instagram":
          self.textColorInstagram = "amber-10";
          break;
        case "email":
          self.textColorEmail = "amber-10";
          break;
      }
    },
    mouseLeaveContato() {
      var self = this;
      self.textColorFacebook = "grey-5";
      self.textColorWhatsapp = "grey-5";
      self.textColorInstagram = "grey-5";
      self.textColorEmail = "grey-5";
    },
  },
};
</script>
