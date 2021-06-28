<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container mt-6">
        <div>
          <ion-toolbar>
            <ion-title size="large">Profile</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-title size="large"><h2 class="mt-3">thomas@gmail.com</h2></ion-title>
          </ion-toolbar>
        </div>

        <ion-card>
          <ion-card-header style="background-color: #00D6D8">
            <ion-card-title style="font-size:20px; text-align:center">Pro 17,99€</ion-card-title>
          </ion-card-header>
        </ion-card>

        <ion-content>
          <ion-list>
            <button>Gérer mon abonnement</button>
          </ion-list>
        </ion-content>

        <div class="ml-3 mt-3">
          <h6><a href="#">Gérer mon abonnement</a></h6>
          <h6><a href="#" style="text-color:black">Modifier mes informations</a></h6>
          <a class="text-danger" href="/login">Déconnexion</a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { mapActions, mapGetters } from "vuex";

export default  {
  name: 'Profile',
  components: { IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['login']),
  },
  mounted(){
    this.login
  }
}
</script>