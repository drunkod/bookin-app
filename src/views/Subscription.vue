<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <div class="mb-4">
          <h1 class="display-2">Abonnement</h1>
        </div>
        <ion-slides pager="true">
          <ion-slide>
            <div class="card bg-gray-light border-radius-10 mx-2">
              <div class="card-body px-6 pt-6">
                <div class="mb-5 row">
                  <h3>Basic</h3>
                  <h3 class="text-primary ml-5">7,99€/mois</h3>
                </div>
                <div>
                  <div class="mb-2 d-flex align-items-start">
                    <div class="text-primary">
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span class="ml-3">Téléchargements illimités</span>
                  </div>
                  <div class="mb-2 d-flex align-items-start">
                    <div class="text-primary mr-3">
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span class="ml-3">Lorem ipsum dolor sit amet</span>
                  </div>
                  <div class="mb-2 d-flex align-items-start">
                    <div class="text-danger mr-3">
                      <i class="fas fa-times-circle fa-lg"></i>
                    </div>
                    <span class="ml-3">Lorem ipsum dolor sit amet</span>
                  </div>
                  <div class="mb-2 d-flex align-items-start">
                    <div class="text-danger mr-3">
                      <i class="fas fa-times-circle fa-lg"></i>
                    </div>
                    <span class="ml-3">Lorem ipsum dolor sit amet</span>
                  </div>
                </div>
              </div>
              <div class="card-footer bg-gray-light border-0 px-6 pb-3">
                <a class="btn btn-primary text-white w-100 mb-3" href="/tabs/">Continuer</a>
              </div>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="card bg-gray-light border-radius-10 mx-2">
              <div class="card-body px-6 pt-6">
                <div class="mb-5 row">
                  <h3>Pro</h3>
                  <h3 class="text-primary ml-7">17,99€/mois</h3>
                </div>
                <div>
                  <div class="mb-2 d-flex align-items-start">
                    <div class="text-primary">
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span class="ml-3">Téléchargements illimités</span>
                  </div>
                  <div class="mb-2 d-flex align-items-start">
                    <div class="text-primary mr-3">
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                  <div class="mb-2 d-flex align-items-start">
                    <div class="text-primary mr-3">
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                  <div class="mb-2 d-flex align-items-start">
                    <div class="text-primary mr-3">
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                </div>
              </div>
              <div class="card-footer bg-gray-light text-white border-0 px-6 pb-3">
                <a class="btn btn-primary text-white w-100 mb-3" href="/tabs/">Continuer</a>
              </div>
            </div>
          </ion-slide>
        </ion-slides>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonSlides, IonSlide } from '@ionic/vue';

export default  {
  name: 'Tab5',
  components: { IonContent, IonPage, IonSlides, IonSlide },

}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 30px;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
}
</style>