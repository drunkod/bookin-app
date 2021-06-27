<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="px-lg-7 px-4 pt-10 pb-5">
        <a href="/first">
          <i class="fas fa-arrow-left"></i>
        </a>
        <div class="mb-4">
          <h2>Payement</h2>
        </div>

        <div class="alert alert-success" role="alert" v-if="msg.success">
          {{msg.success}}
        </div>
        <div class="alert alert-danger" role="alert" v-if="msg.error">
          {{msg.error}}
        </div>

        <form method="post" >
          <div class="form-group">
            <input type="text" class="form-control" id="name" name="name" placeholder="Nom et prénom indiqués sur la carte">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="card" name="card" placeholder="Numéro de carte">
          </div>
          <div class="form-group mb-5">
            <input type="text" class="form-control" id="coupon" name="coupon" placeholder="Code promo">
          </div>
          <a class="btn btn-primary text-white text-primary mb-3 w-100" type="submit" href="/tabs/">Payer maintenant</a>
        </form>
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