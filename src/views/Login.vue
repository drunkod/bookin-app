<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="px-lg-7 px-4 pt-10 pb-5">
        <a href="/first">
          <i class="fas fa-arrow-left"></i>
        </a>
        <div class="mb-4">
          <h2>Connexion</h2>
        </div>

        <div class="alert alert-success" role="alert" v-if="msg.success">
          {{msg.success}}
        </div>
        <div class="alert alert-danger" role="alert" v-if="msg.error">
          {{msg.error}}
        </div>

        <form @submit.prevent="loginUser(form)">
          <div class="form-group mb-2">
            <input class="form-control rounded-pill" style="background: #F6F7F9; border-color:#F6F7F9;" type="email" placeholder="E-mail" v-model="form.email">
          </div>
          <div class="form-group mb-3">
            <input class="form-control rounded-pill" style="background: #F6F7F9; border-color:#F6F7F9;" type="password" placeholder="Mot de passe" v-model="form.password">
          </div>
          <div class="form-check mb-4">
            <label class="form-check-label text-muted">
              <input class="form-check-input" type="radio">
              <span class="small">Garder ma session</span>
            </label>
          </div>
          <button class="btn btn-block btn-primary text-white rounded-pill mb-4 w-100" type="submit">Se connecter</button>
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
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import { mapActions, mapGetters } from "vuex";

export default  {
  name: 'Login',
  components: { IonContent, IonPage },
  data() {
    return {
      form: {}
    };
  },
  computed: {
    ...mapGetters(['msg'])
  },
  methods: {
    ...mapActions(['login']),
    loginUser(form){
      this.login(form)
    }
  },
  mounted(){
    this.msg.success = ''
    this.msg.error = ''
  }
}
</script>