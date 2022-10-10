<template>
  <div>
    <br>
    <h1>Toimunud üritused</h1>
    <table class="table table-hover">
      <PastEventsTableHeader/>
      <PastEventsTableBody/>
    </table>
  </div>
</template>

<script>
import PastEventsTableHeader from "./PastEventsTableHeader.vue";
import PastEventsTableBody from "./PastEventsTableBody.vue";

export default {
  name: "PastEventsTable",
  components: { PastEventsTableHeader, PastEventsTableBody },
}
</script>