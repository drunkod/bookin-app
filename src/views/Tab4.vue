<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div>
          <div class="mt-6 pb-3">
            <h3>Contact</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 col-md-10 col-sm-12 mx-auto">
            <form method="post" action="/sendMessage">
              <div class="form-row">
                <div class="form-group col-lg-4 col-md-12 col-sm-12 pr-2">
                  <input class="form-control rounded" type="text" name="lastname" placeholder="Nom">
                </div>
                <div class="form-group col-lg-4 col-md-12 col-sm-12 px-2">
                  <input class="form-control rounded" type="text" name="firstname" placeholder="Prénom">
                </div>
                <div class="form-group col-lg-4 col-md-12 col-sm-12 pl-2">
                  <input class="form-control rounded" type="text"  name="email" placeholder="Email">
                </div>
              </div>
              <div class="form-group mb-5">
                <textarea class="form-control rounded" rows="6" name="body" placeholder="Message"></textarea>
              </div>
              <button class="btn btn-primary text-white text-primary mb-3 w-100" type="submit">Envoyer</button>
            </form>
          </div>

          <div class="col-lg-8 col-md-10 col-sm-12 mx-auto">
            <div class="rounded mt-8 mb-8" id="map" style="margin: auto; height: 400px; !important"></div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab4',
  components: { IonContent, IonPage }
}
</script>