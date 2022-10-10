<template>
  <div>
    <div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomeView">AVALEHT</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAddEventForm">ÜRITUSE LISAMINE</button>
    </div>
    <div class="row">
      <div class="col-sm" v-if="divDisplayEventTables">
        <FutureEventsTable />
        <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAddEventForm">ÜRITUSE
        LISAMINE</button>
      </div>
      <div class="col-sm" v-if="divDisplayEventTables">
        <PastEventsTable/>
      </div>
    </div>

    <div class="row" v-if="divDisplayAddEventForm">
      <AddEventForm/>
    </div>
  </div>
</template>

<script>
import FutureEventsTable from '@/components/tables/eventtables/futureevents/FutureEventsTable.vue'
import PastEventsTable from '@/components/tables/eventtables/pastevents/PastEventsTable.vue'
import AddEventForm from '@/components/forms/addeventform/AddEventForm.vue'



export default {
  name: "HomeView",
  components: { FutureEventsTable, PastEventsTable, AddEventForm },
  data: function () {
    return {
      divDisplayEventTables: true,
      divDisplayAddEventForm: false,
    }
  },
  methods: {
    displayEventTables: function () {
      this.hideAllDivs()
      this.divDisplayEventTables = true
    },
    displayAddEventForm: function () { 
      this.hideAllDivs()
      this.divDisplayAddEventForm = true
    },
    hideAllDivs: function () {
      this.divDisplayEventTables = false
      this.divDisplayAddEventForm = false
      
    },
    toHomeView: function () {
      this.$router.push({ name: 'homeView' })
      this.divDisplayEventTables()

    },
  }
}
</script>

<style>

</style>

