<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container mt-6">
        <div>
          <ion-toolbar>
            <ion-title size="large">Contact</ion-title>
          </ion-toolbar>
        </div>

        <div class="container mx-auto">
          <div class="alert alert-success" role="alert" v-if="msg.success">
            {{msg.success}}
          </div>
          <div class="alert alert-danger" role="alert" v-if="msg.error">
            {{msg.error}}
          </div>
        </div>

        <div class="mt-3">
          <div class="container mx-auto">
            <form @submit.prevent="sendForm(form)">
              <div class="form-row">
                <div class="form-group col-lg-4 col-md-12 col-sm-12 pr-2">
                  <input class="form-control rounded" type="text" placeholder="Nom" v-model="form.lastname">
                </div>
                <div class="form-group col-lg-4 col-md-12 col-sm-12 px-2">
                  <input class="form-control rounded" type="text" placeholder="Prénom" v-model="form.firstname">
                </div>
                <div class="form-group col-lg-4 col-md-12 col-sm-12 pl-2">
                  <input class="form-control rounded" type="text" placeholder="Email" v-model="form.email">
                </div>
              </div>
              <div class="form-group mb-5">
                <textarea class="form-control rounded" rows="6" placeholder="Message" v-model="form.body"></textarea>
              </div>
              <button href="#" class="btn btn-primary text-white text-primary mb-3 w-100" type="submit">Envoyer</button>
            </form>
          </div>

          <div class="rounded mt-3 mb-5 col-lg-8 col-md-10 col-sm-12 mx-auto">
              <img src="assets/images/Google_Map.png">
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonTitle, IonToolbar } from '@ionic/vue';
import {mapActions, mapGetters} from "vuex";

export default  {
  name: 'Contact',
  components: { IonContent, IonPage, IonTitle, IonToolbar },
  data() {
    return {
      form: {}
    };
  },
  computed: {
    ...mapGetters(['msg'])
  },
  methods: {
    ...mapActions(['sendMessage']),
    sendForm(form) {
      this.sendMessage(form)
    }
  },
  mounted(){
    this.msg.success = ''
    this.msg.error = ''
  }
}
</script>