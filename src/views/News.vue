<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container mt-6">
        <div>
          <ion-toolbar>
            <ion-title size="large">Actualité</ion-title>
          </ion-toolbar>
        </div>

        <div class="container my-3" v-for="article in news" :key="article.id">
          <div class="card rounded-lg overflow-hidden">
            <img class="card-img-top" :src="article.img_url">
            <div class="card-body px-5 pt-4">
              <div class="mt-2 mb-3 text-muted small"><i class="far fa-clock mr-2"></i>{{ article.created_at }}</div>
              <router-link :to="{ path: '/article/'+ article.id }">
                <p class="h5 text-dark stretched-link">{{ article.title }}</p>
              </router-link>
              <p class="text-muted my-2">{{ article.description }}</p>
            </div>
          </div>
        </div>
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
import { IonPage, IonContent, IonTitle, IonToolbar } from '@ionic/vue';
import { mapActions, mapGetters } from "vuex";

export default  {
  name: 'News',
  components: { IonContent, IonPage, IonTitle, IonToolbar },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['news']),
    ...mapActions(['showNews']),
  },
  mounted(){
    this.showNews
  }
}
</script>