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
            <ion-card-title style="font-size:20px">Basic 7,99€</ion-card-title>
          </ion-card-header>
        </ion-card>

        <ion-toolbar>
          <ion-toolbar>
            <h6>Gérer mon abonnement</h6>
            <h6>Modifier mes informations</h6>
            <h6 class="text-danger">Déconnexion</h6>
          </ion-toolbar>
        </ion-toolbar>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab5',
  components: { IonToolbar, IonTitle, IonContent, IonPage }
}
</script>