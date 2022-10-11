<template>
  <div>
    <h1>PEALEHT</h1>
    <div>
      <NavBar/>
    </div>
    <div class="row">
      <div class="col-sm">
        <FutureEventsTable />
        <button style="margin: 5px" class="btn btn-outline-dark">ÜRITUSE
        LISAMINE</button>
      </div>
      <div class="col-sm">
        <PastEventsTable/>
      </div>
      <div>
        <PageFooter />
      </div>
    </div>
  </div>
</template>

<script>
import FutureEventsTable from '@/components/tables/events-tables/future-events/FutureEventsTable.vue'
import PastEventsTable from '@/components/tables/events-tables/past-events/PastEventsTable.vue'
import NavBar from '@/components/page/NavBar.vue'
import PageFooter from '@/components/page/PageFooter.vue'



export default {
  name: "HomeView",
  components: { FutureEventsTable, PastEventsTable, NavBar, PageFooter },
  data: function () {
    return {
    }
  },
}
</script>

