<template>
  <div>
    <div>
      <PageHeader/>
    </div>
    <div class="column">
      <FutureEventsTabel/>
    </div>
    <div class="column">
      <PastEventsTable/>
    </div>
  </div>
</template>

<script>
import FutureEventsTabel from '@/components/eventstabel/futureevents/FutureEventsTable.vue'
import PastEventsTable from '@/components/eventstabel/pastevents/PastEventsTable.vue'
import PageHeader from '@/components/pageheader/PageHeader.vue'

export default {
  name: "HomeView",
  components: { FutureEventsTabel, PastEventsTable, PageHeader },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>

