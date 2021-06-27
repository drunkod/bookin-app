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

        <!--<div class="container row my-3">
          <div class="col-lg-8 col-md-12 mx-auto">
            <div class="mb-3 lead initialism"><i class="fas fa-clock mr-2"></i>{{ article.created_at }}</div>
            <h1 class="display-4 mt-4 mb-3">{{ article.title }}</h1>
            <p class="lead mb-4 text-muted">{{ article.description }}</p>
            <div class="my-5 text-center">
              <img class="w-100 rounded mb-3" :src="article.img_url">
            </div>
            <p>{{ article.body }}</p>
          </div>
        </div>-->

        <div class="container row my-3">
          <div class="col-lg-8 col-md-12 mx-auto">
            <div class="mb-3 lead initialism"><i class="fas fa-clock mr-2"></i>2021-06-27 14:36:21</div>
            <h1 class="display-4 mt-4 mb-3">Queen shouted at.</h1>
            <p class="lead mb-4 text-muted">How queer everything is to-day! And.</p>
            <img class="w-100 rounded mb-4" src="https://res.cloudinary.com/hhwtya6b8/image/upload/v1624547852/klnbhibjq5x1ba8m7dli.jpg">
            <p>Beautiful, beautiful Soup!' CHAPTER XI. Who Stole the Tarts? The King and Queen of Hearts were seated on their slates, 'SHE doesn't believe there's an atom of meaning in it,' said Alice to herself, for this curious child was very glad to find quite a conversation of it appeared. 'I don't know the meaning of it at all. 'But perhaps he can't help that,' said the Queen. 'It proves nothing of the garden: the roses growing on it in less than a real nose; also its eyes were looking over their shoulders, that all the children she knew, who might do very well as she added, 'and the moral of THAT is--"Take care of the March Hare. 'Exactly so,' said Alice. 'Anything you like,' said the Gryphon: and it put more simply--"Never imagine yourself not to be a comfort, one way--never to be told so. 'It's really dreadful,' she muttered to herself, 'because of his head. But at any rate I'll never go THERE again!' said Alice hastily; 'but I'm not myself, you see.' 'I don't know much,' said Alice; not.</p>
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