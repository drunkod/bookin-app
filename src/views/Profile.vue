<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container mt-6">
        <div>
          <ion-toolbar>
            <ion-title size="large">Profile</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-title size="large"><h2 class="mt-3">Thomas Eyaa</h2></ion-title>
          </ion-toolbar>
        </div>

        <ion-card>
          <ion-card-header style="background-color: #00D6D8">
            <ion-card-title style="font-size:20px; text-align:center">Basic 7,99€</ion-card-title>
          </ion-card-header>
        </ion-card>

        <div class="ml-3 mt-3">
          <h6>Gérer mon abonnement</h6>
          <h6>Modifier mes informations</h6>
          <a class="text-danger" href="/login" @click.prevent="logout">Déconnexion</a>
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
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
</script>