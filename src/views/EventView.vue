<template>
    <div>
        <h1>ÜRITUSE INFO</h1>
        <div>
            <NavBar />
        </div>
        <div>
            <EventInfo />
        </div>
        <div>
            <ParticipantTable />
        </div>
        <div>
            <AddPersonForm />
        </div>
        <div>
        <PageFooter />
      </div>
    </div>
</template>
  
<script>

import NavBar from '@/components/page/NavBar.vue'
import EventInfo from '@/components/forms/event-info-form/EventInfo.vue';
import ParticipantTable from '@/components/tables/participants-tabel/ParticipantTable.vue';
import PageFooter from '@/components/page/PageFooter.vue';
import AddPersonForm from '@/components/forms/add-participant-form/AddPersonForm.vue';

export default {
    name: "HomeView",
    components: { NavBar, EventInfo, ParticipantTable, PageFooter, AddPersonForm },
    data: function () {
        return {
        }
    },
}
</script>
  
  