<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="px-lg-7 px-4 pt-10 pb-5">
        <h1 class="display-1 text-dark mb-4 text-center">Book<span class="text-primary">in</span></h1>
        <div class="mb-4 text-center">
          <img src="assets/images/Book_Lover_TwoColor.png" width="250"/>
        </div>
        <div>
          <a href="/login"><button class="btn btn-block btn-primary-light text-primary rounded-pill mb-3 w-100">Connecion</button></a>
          <a href="/register"><button class="btn btn-block btn-primary text-white rounded-pill w-100">Inscription</button></a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'First',
  components: { IonContent, IonPage }
}
</script>