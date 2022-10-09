<template>
  <div>
    <br>
    <h1>Toimunud üritused</h1>
    <table class="table table-hover">
      <PastEventsTableHeader/>
      <PastEventsTabelBody/>
    </table>
  </div>
</template>

<script>
import PastEventsTableHeader from "./PastEventsTableHeader.vue";
import PastEventsTabelBody from "./PastEventsTabelBody.vue";
export default {
  name: "FutureEventsTable",
  components: {PastEventsTableHeader, PastEventsTabelBody },
}
</script>