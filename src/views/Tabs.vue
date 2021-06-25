<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Accueil</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="news" href="/tabs/news">
          <ion-icon :icon="menu" />
          <ion-label>Actualité</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon :icon="search" />
          <ion-label>Recherche</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="contact" href="/tabs/contact">
          <ion-icon :icon="call" />
          <ion-label>Contact</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="person" />
          <ion-label>Profil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, menu, search, call, person, } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      home,
      menu,
      search,
      call,
      person,
    }
  }
}
</script>