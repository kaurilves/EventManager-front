<template>
    <div>
      <div>
        <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToHomeView()">AVALEHT</button>
        <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToAddEvent()">ÜRITUSE LISAMINE</button>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "NavBar",
    components: {},
    data: function () {
      return {
      }
    },
    methods: {
        navigateToHomeView: function(){
            this.$router.push({ name:'homeView' })
        },
        navigateToAddEvent: function(){
            this.$router.push({ name:'addEventView'})
        }

    },
}
    
  </script>
  
  <style>
  
  </style>
  
  