<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container mt-6">
        <div>
          <a href="/tabs/news">
            <i class="fas fa-arrow-left"></i>
          </a>
          <ion-toolbar>
            <ion-title size="large">Article</ion-title>
          </ion-toolbar>
        </div>

        <div class="container row my-3">
          <div class="col-lg-8 col-md-12 mx-auto">
            <div class="mb-3 lead initialism"><i class="fas fa-clock mr-2"></i>{{ article.created_at }}</div>
            <h1 class="display-4 mt-4 mb-3">{{ article.title }}</h1>
            <p class="lead mb-4 text-muted">{{ article.description }}</p>
            <div class="my-5 text-center">
              <img class="w-100 rounded mb-3" src="{{article.img_url }}">
            </div>
            <p>{{ article.body }}</p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonTitle, IonToolbar } from '@ionic/vue';
import { mapActions, mapGetters } from "vuex";

export default  {
  name: 'Article',
  components: { IonContent, IonPage, IonTitle, IonToolbar  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['article']),
    ...mapActions(['showOneNews'])
  },
  mounted(){
    console.log(this.$route.params.id)
    this.showOneNews(this.$route.params.id)
  }
}
</script>