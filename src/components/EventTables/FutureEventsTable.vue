<template>
    <div>
      <h1>Tulevased üritused</h1>
      <table class="table table-hover">
        <AvailableOrdersTableHeader/>
        <AvailableOrdersTableBody/>
      </table>
    </div>
  </template>
  
  <script>
  import AvailableOrdersTableBody from "@/components/courier/AvailableOrdersTableBody";
  export default {
    name: 'FutureEventsTabel',
    components: {AvailableOrdersTableHeader, AvailableOrdersTableBody},
  }
  </script>
  
  