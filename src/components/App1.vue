<script setup>
import AllFriends from './components/AllFriends.vue'
import UnAmi from './components/UnAmi.vue'
const lesAmis =
   [
    {
      id: 'lasticot',
      name: 'COCO L ASTICOT',
      phone: '01234 5678 991',
      email: 'coco@lasticot.com',
    },
    {
      id: 'janine',
      name: 'Janine DeLavega',
      phone: '09876 543 221',
      email: 'janine@delavega.com',
    },
    {
      id:'jojo',
      name:"jojoLeBarjo",
      phone:'123 12346 24',
      email:'jojo@barjo.com',
    },
    {
      id:'kimonoSurUnFrigo',
      name:"Steven Seagal",
      phone:'+338765477',
      email:'steven@seagal.com',
    },
  ]
;

// Exportation de la fonction data
</script>

<template>
  <!-- <AllFriends></AllFriends> -->
  <UnAmi 
		v-for="unAmi in lesAmis" 
		:key="unAmi.id" 
		:leNom="unAmi.name" 
		:lePhone="unAmi.phone"
		:leMail="unAmi.email"
		:premium="true">
		</UnAmi>

</template>

<style scoped>
.main {
  background-color: aquamarine;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
