<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div>
          <form class="form-inline mt-4 my-2 my-lg-0" type="submit">
            <input class="form-control rounded-pill bg-white" type="search" placeholder="Recherche" aria-label="Recherche">
          </form>
          <div class="mt-6 pb-3">
            <h3>Actualités</h3>
          </div>
        </div>

        <ion-card>
          <ion-card-header style="background-color: #EDEFF3">
            <ion-card-title style="font-size:20px">Lorem ipsum dolor</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <div class="row mt-3">
              <ion-img src="assets/images/Book_Cover_1.png" width="4"/>
              <div class="col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel.
                <div class="mt-2 text-muted small"><i class="far fa-clock mr-2"></i>Il y'a 2 heures</div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header style="background-color: #EDEFF3">
            <ion-card-title style="font-size:20px">Lorem ipsum dolor</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <div class="row mt-3">
              <ion-img src="assets/images/Book_Cover_2.png" width="4"/>
              <div class="col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel.
                <div class="mt-2 text-muted small"><i class="far fa-clock mr-2"></i>Il y'a 2 heures</div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header style="background-color: #EDEFF3">
            <ion-card-title style="font-size:20px">Lorem ipsum dolor</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <div class="row mt-3">
              <ion-img src="assets/images/Book_Cover_3.png" width="4"/>
              <div class="col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel.
                <div class="mt-2 text-muted small"><i class="far fa-clock mr-2"></i>Il y'a 2 heures</div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <div class="row pt-3 pb-3">
          <div class="col">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item ml-auto"><a class="page-link text-muted" href="javaScript:void(0)">Précedent</a></li>
                <li class="page-item"><a class="page-link text-dark" href="javaScript:void(0)">1</a></li>
                <li class="page-item"><a class="page-link text-dark" href="javaScript:void(0)">2</a></li>
                <li class="page-item"><a class="page-link text-dark" href="javaScript:void(0)">3</a></li>
                <li class="page-item mr-auto"><a class="page-link text-muted" href="javaScript:void(0)">Suivant</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab2',
  components: { IonContent, IonPage }
}
</script>