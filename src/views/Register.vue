<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
        <div class="card-block px-lg-7 px-4 pt-10 pb-5">
          <div class="mb-4">
            <h2>Inscription</h2>
          </div>
          <form>
            <div class="form-group mb-2">
              <input class="form-control rounded-pill" style="background: #F6F7F9; border-color:#F6F7F9;" type="name" placeholder="Nom">
            </div>
            <div class="form-group mb-2">
              <input class="form-control rounded-pill" style="background: #F6F7F9; border-color:#F6F7F9;" type="email" placeholder="E-mail">
            </div>
            <div class="form-group mb-3">
              <input class="form-control rounded-pill" style="background: #F6F7F9; border-color:#F6F7F9;" type="password" placeholder="Mot de passe">
            </div>
            <div class="form-check mb-4">
              <label class="form-check-label text-muted">
                <input class="form-check-input" type="radio">
                <span class="small">Je souhaite m’inscrire à la Newsletter</span>
              </label>
            </div>
            <a class="btn btn-primary text-white rounded-pill mb-4 w-100" href="/subscription" type="submit">Créer un compte</a>
          </form>
          <div>
            <div class="col text-center pb-3">
              <span class="text-muted">OU</span>
            </div>
          </div>
          <div class="btn-group justify-content-center w-100">
            <div class="mb-2 px-2">
              <a class="icon rounded-circle btn btn-facebook" href="#"><i class="fab fa-facebook-f"></i></a>
            </div>
            <div class="mb-2 px-2">
              <a class="icon rounded-circle btn btn-google" href="#"><i class="fab fa-google"></i></a>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer class="align-items-center">
      <p class="text-muted small text-center">En créant un compte, vous acceptez nos <a href="#">conditions d’utilisation</a> et notre <a href="#">politique de confidentialité</a></p>
    </ion-footer>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'Register',
  components: { IonContent, IonPage }
}
</script>