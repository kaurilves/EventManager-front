<template>
    <div>
        <div>
            <NavBar />
        </div>
        <h1>LISA ÜRITUS</h1>
        <div>
            <AddEventForm />
        </div>
        <div>
            <PageFooter />
        </div>
    </div>
</template>
  
<script>

import NavBar from '@/components/page/NavBar.vue'
import AddEventForm from '@/components/forms/add-event-form/AddEventForm.vue';
import PageFooter from '@/components/page/PageFooter.vue';


export default {
    name: "HomeView",
    components: { NavBar, AddEventForm, PageFooter },
    data: function () {
        return {
        }
    },
}
</script>
  
  