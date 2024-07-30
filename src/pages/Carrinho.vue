<template>
  <div class="animate-fade">
    <q-layout>
      <q-toolbar color="white">
        <q-toolbar-title
          class="text-black"
          style="font-family: 'Hind', sans-serif; font-size: 22px"
        >
          Carrinho
        </q-toolbar-title>
        <q-btn
          @click="Back"
          color="black"
          flat
          round
          dense
          size="20px"
          icon="close"
        />
      </q-toolbar>
      <div class="row">
        <div class="gt-xs col-xs-1 col-sm-1 col-md-2 col-lg-3 col-xl-3"></div>
        <div class="col">
          <div class="col" style="margin: 10px">
            <!-- <q-list no-border>
              <span v-for="(it, i) in ListaCarrinho" v-bind:key="i">
                <q-item style="margin-left: -10px">
                  <div style="margin-right: 10px">
                    <span>{{ it.Quantidade }}x</span>
                  </div>
                  <q-item-main>
                    <div class="ellipsis" style="max-width: 200px">
                      <span style="font-size: 17px">{{ it.Nome }}</span>
                    </div>
                  </q-item-main>
                  <div class="ellipsis" style="max-width: 100px">
                    <span>{{ it.Preco }}</span>
                  </div>
                  <q-btn
                    @click="Apagar(it)"
                    class="no-shadow"
                    style="margin-right: -15px"
                  >
                    <q-icon
                      color="orange-14"
                      size="25px"
                      name="ion-trash"
                    ></q-icon>
                  </q-btn>
                </q-item>
                <q-item-separator />
                <div></div>
              </span>
            </q-list> -->
            <div style="margin-top: 20px">
              <span style="font-family: 'Hind', sans-serif; font-size: 22px"
                >Pedido</span
              >
            </div>
            <!-- <div
              class="q-mt-lg"
              v-for="(inp, is) in listaperguntas"
              v-bind:key="is"
            >
              <span>{{ inp.inputplace }}</span>
              <q-input color="black" v-model="inp.resposta"></q-input>
            </div> -->
            <!-- <div style="margin-top:20px">
                  <q-input v-model="Cliente.Nome" @input="Digitou" color="black" float-label="Nome e sobrenome *"></q-input>
                  <br>
                  <q-input v-model="Cliente.Telefone" @input="Digitou" color="black" float-label="Numero para Contato *"></q-input>
                  <br>
                  <q-input v-model="Cliente.Endereco" @input="Digitou" color="black" float-label="Endereço *"></q-input>
                  <br>
                  <q-input v-model="Descricao" @input="Digitou" color="black" type="textarea" placeholder="Ex: Sabores, Tamanhos, Especificações etc.." :max-height="50" float-label="Descrição"></q-input>
                </div> -->
            <div class="row justify-center" v-if="SpinnerPerguntas">
              <q-spinner color="black" size="40px"></q-spinner>
            </div>
            <div class="q-mt-xl row justify-center">
              <q-btn
                @click="EnviarPedido"
                color="orange-14"
                no-caps
                style="width: 50%"
                >Continuar</q-btn
              >
            </div>
            <q-inner-loading :visible="visible">
              <q-spinner size="40px" color="black"></q-spinner>
            </q-inner-loading>
          </div>
        </div>
        <div class="gt-xs col-xs-1 col-sm-1 col-md-2 col-lg-3 col-xl-3"></div>
      </div>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "Carrinho",
  data() {
    return {
      SpinnerPerguntas: false,
      listaperguntas: [],
      ListaCarrinho: [],
      visible: false,
      Descricao: "",
      Cliente: {
        Nome: "",
        Telefone: "",
        Endereco: "",
      },
      PreenchaCampos: false,
    };
  },
  created() {},
  activated() {
    // var self = this;
    // if (self.$store.carrinho.length > 0) {
    //   self.ListaCarrinho = self.$store.carrinho;
    // } else {
    //   self.BuscaCarrinho();
    // }
    // self.BuscarPerguntas();
  },
  methods: {
    Back() {
      // this.$router.go(-1);
    },
    BuscaCarrinho() {
      // var self = this;
      // var storage = self.$q.localStorage.get.item("lstcarrinho");
      // if (storage) {
      //   self.$store.carrinho = storage;
      //   self.ListaCarrinho = storage;
      // }
    },
    Digitou() {
      // var self = this;
      // self.PreenchaCampos = false;
    },
    BuscarPerguntas() {
      // var self = this;
      // self.SpinnerPerguntas = true;
      // self.listaperguntas = [];
      // var emp = self.$q.localStorage.get.item("emp");
      // self.$db
      //   .collection("Empresas")
      //   .doc(emp)
      //   .collection("BasePerguntas")
      //   .doc(emp)
      //   .get()
      //   .then(function (docRef) {
      //     var dados = docRef.data();
      //     if (dados) {
      //       if (dados.ListaPerguntas) {
      //         dados.ListaPerguntas.forEach((element) => {
      //           self.listaperguntas.push(element);
      //         });
      //       }
      //     }
      //     self.SpinnerPerguntas = false;
      //   });
    },
    Apagar(it) {
      // var self = this;
      // var index = self.$store.carrinho.indexOf(it);
      // if (index > -1) {
      //   self.$store.carrinho.splice(index, 1);
      // }
      // if (self.$store.carrinho.length < 1) {
      //   self.$router.go(-1);
      // }
      // self.$q.localStorage.set("lstcarrinho", self.$store.carrinho);
    },
    EnviarPedido() {
      // var self = this;
      // var teste = false;
      // self.listaperguntas.forEach((element) => {
      //   if (!element.resposta) {
      //     teste = true;
      //   }
      // });
      // if (!teste) {
      //   debugger;
      //   self.$store.perguntaspedido = [];
      //   self.$store.perguntaspedido = self.listaperguntas;
      //   self.$q.localStorage.set("lstperguntas", self.listaperguntas);
      //   self.$router.push("/InformarDados");
      // } else {
      //   alert("preencha os campos");
      // }
      // if (self.Cliente.Nome !== '' && self.Cliente.Telefone !== '' && self.Cliente.Endereco !== '') {
      //   self.visible = true
      //   self.PreenchaCampos = false
      //   self.Cliente.id = self.$store.user.uid
      //   var Pedido = {
      //     ListaProdutos: self.ListaCarrinho,
      //     Cliente: self.Cliente,
      //     Pedido: {
      //       Andamento: 1,
      //       Horario: 'há 10 min',
      //       Descricao: self.Descricao
      //     },
      //     EmpresaId: self.$q.localStorage.get.item('emp')
      //   }
      //   self.$db.collection('Empresas').doc(self.$store.emp)
      //     .collection('Pedidos').add(Pedido).then(function (docRef)
    },
  },
};
</script>
