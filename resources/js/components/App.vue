<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <router-view></router-view>
      <p>{{ message }}</p>
      <button @click="updateMessage">Atualizar Mensagem</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    computed: {
    message() {
      return this.$store.getters.message;
    }
    },
    methods: {
      updateMessage() {
        this.$store.dispatch('updateMessage', 'Nova mensagem do Vuex');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione seu CSS aqui */
  </style>