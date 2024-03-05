<template>
  <!-- <div class="container"> -->
    <!-- <h1 class="text-center">Les Amis</h1>
    <ul class="list-group"> -->
      <!--! Avec v-for on boucle sur le tableau lesAmis -->
      <!--! Puis avec les v-bind on injecte les données de lesAmis dans les props -->
      <!-- * On vient de créer un composant dynamique -->
      <!-- <UnAmi 
      v-for="unAmi in lesAmis" 
      :key="unAmi.id" 
      :id="unAmi.id" 
      :unAmiName="unAmi.name" 
      :unAmiPhone="unAmi.phone"
      :unAmiMail="unAmi.email"
      :premium="unAmi.premium"
  @mon-event-premium="afficherStatusPremium">
      </UnAmi>
    </ul> -->
  <!-- </div> -->
</template>

<script lang='js'>
import { defineComponent } from 'vue'
import UnAmi from './UnAmi.vue'
export default defineComponent({
components: {
  UnAmi
},
  data() {
      return {
          lesAmis: [
      {
          id: 'lasticot',
          name: 'COCO L ASTICOT',
          phone: '01234 5678 991',
          email: 'coco@lasticot.com',
          premium:true
      },
      {
          id: 'janine',
          name: 'Janine DeLavega',
          phone: '09876 543 221',
          email: 'janine@delavega.com',
          premium:true
      }
  ],
      };
  },
methods: {
  afficherStatusPremium(leIdDansUnAmi){
    const unAmiIdentified = this.lesAmis.find(unAmiATrouver => unAmiATrouver.id === leIdDansUnAmi);
    unAmiIdentified.premium = !unAmiIdentified.premium;
    console.log('amiIdentified : ', unAmiIdentified)
  }
},
});
</script>