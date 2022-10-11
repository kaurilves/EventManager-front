<template>
  <div>
    <br>
    <table class="table table-hover">
      <ParticipantTableHeader/>
      <ParticipantTableBody/>
    </table>
  </div>
</template>

<script>
import ParticipantTableHeader from './ParticipantTableHeader.vue';
import ParticipantTableBody from './ParticipantTableBody.vue';

export default {
  name: "ParticipantTable",
  components: { ParticipantTableHeader, ParticipantTableBody },
}
</script>