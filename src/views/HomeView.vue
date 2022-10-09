<template>
  <div>
    <div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToAddOrder">AVALEHT</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToSearchSenderOrders">ÜRITUSE
        LISAMINE</button>
    </div>
    <div class="row">
      <div class="col-sm">
        <FutureEventsTabel />
      </div>
      <div class="col-sm">
        <PastEventsTable />
      </div>
    </div>
  </div>
</template>

<script>
import FutureEventsTabel from '@/components/eventstabel/futureevents/FutureEventsTable.vue'
import PastEventsTable from '@/components/eventstabel/pastevents/PastEventsTable.vue'

export default {
  name: "HomeView",
  components: { FutureEventsTabel, PastEventsTable },
  data: function () {
    return {
    }
  },
  methods: {
    navigateToHomeView: function () {
      this.$router.push({ name: 'homeView' })

    },
    navigateToAddEvent: function () {
      this.$router.push({ name: 'addEventView' })

    },
  }
}
</script>

<style>

</style>

