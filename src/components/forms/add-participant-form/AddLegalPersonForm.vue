<template>
  <div>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Ettevõtte nimi:</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="participantCreate.name">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Reg.kood:</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="participantCreate.idNumber">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Maksmisviis:</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="participantCreate.paymentTypeId">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Osalejate arv:</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="participantCreate.participantsCount">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Lisainfo:</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="participantCreate.additionalInfo">
        </div>
      </div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToHomeView()">TAGASI</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="createParticipant()">LISA</button>
    </form>
  </div>
</template>
<script>

export default {
  name: 'AddLegalPersonForm',
  components: {},
  data: function () {
    return {
      eventId: this.$route.query.eventId,
      participantCreate: {
        name: '',
        idNumber: '',
        paymentTypeId: '',
        participantsCount: '',
        additionalInfo: '',
        personType: 'LEGALPERSON'
      }

    }
  },
  methods: {
    createParticipant: function () {
      this.$http.post("/participant/{eventId}", this.participantCreate, {
                params: {
                    eventId: this.eventId
                }
            }).then(response => {
        this.participantCreate = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    navigateToHomeView: function () {
      this.$router.push({ name: 'homeView' })
    },

  },
}
</script>