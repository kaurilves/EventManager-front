<template>
    <div>
      <br>
      <h1>Tulevad üritused</h1>
      <table class="table table-hover">
        <FutureEventsTableHeader/>
        <FutureEventsTableBody/>
      </table>
    </div>
  </template>
  
  <script>
  
import FutureEventsTableHeader from "./FutureEventsTableHeader.vue";
import FutureEventsTableBody from "./FutureEventsTableBody.vue";
  export default {
    name: "FutureEventsTable",
    components: { FutureEventsTableHeader, FutureEventsTableBody },
  }
  </script>