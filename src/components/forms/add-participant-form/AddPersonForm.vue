<template>
    <div>
        <div>
            <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayLegalPersonForm()">Ettevõte</button>
            <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayPrivatePersonForm()">Eraisik</button>
        </div>
        <div v-if="divDisplayPrivatePersonForm">
            <AddPrivatePersonForm/>
        </div>
        <div v-if="divDisplayLegalPersonForm">
            <AddLegalPersonForm />
        </div>
    </div>
</template>
  
<script>
import AddPrivatePersonForm from './AddPrivatePersonForm.vue';
import AddLegalPersonForm from './AddLegalPersonForm.vue';

export default {
    name: "AddPersonForm",
    components: {AddPrivatePersonForm, AddLegalPersonForm },
    data: function () {
        return {
            divDisplayLegalPersonForm: false,
            divDisplayPrivatePersonForm: true,
        }
    },
    methods: {
        displayLegalPersonForm: function (){
            this.divDisplayLegalPersonForm = true;
            this.divDisplayPrivatePersonForm = false;
        },
        displayPrivatePersonForm: function (){
            this.divDisplayLegalPersonForm = false;
            this.divDisplayPrivatePersonForm = true;
        },
    }
}
</script>
  
  