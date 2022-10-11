<template>
    <div>
      <h1>OSAVÕTJA INFO</h1>
      <div>
        <NavBar/>
      </div>
      <div>
      </div>
      <div>
        <PageFooter />
      </div>
    </div>
  </template>
  
  <script>
import NavBar from '@/components/page/NavBar.vue';
import PageFooter from '@/components/page/PageFooter.vue';
  
  
  
  export default {
    name: "ParticipantView",
    components: { NavBar, PageFooter },
    data: function () {
      return {
      }
    },
  }
  </script>
  
  