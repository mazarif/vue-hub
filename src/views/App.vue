<script setup>
import UnAmi from './components/UnAmi.vue'
import AllFriends from './components/AllFriends.vue'
import Header from './components/Header.vue'
import PokeApi from './components/PokeApi.vue'
// import GetRequest from './components/GetRequest.vue'
</script>

<template>
  <PokeApi></PokeApi>
  <Header></Header>
  <router-link to='/pokeapi'><p>PokeApi</p></router-link>
  <h1>PokeApi ici</h1>
  <router-view></router-view>
  <all-friends></all-friends>
  <GetRequest></GetRequest>
</template>
