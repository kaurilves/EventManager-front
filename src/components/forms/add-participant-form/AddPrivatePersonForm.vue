<template>
  <div>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Ees- ja
          perenimi:</label>

        <div class="col-sm-2">
          <input class="form-control" v-model="participantCreate.name">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Isikukood:</label>
        <div class="col-sm-2">
          <input class="form-control" value="number" v-model="participantCreate.idNumber">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Maksmisviis:</label>
        <div class="col-sm-2">
          <select default type="text" data-bs-toggle="dropdown" aria-expanded="false"
            v-model="participantCreate.paymentTypeId">
            <option disabled="" selected>Vali makseviis</option>
            <option placeholder="Vali makseviis" v-for="paymentType in paymentTypes" :value="paymentType.id">{{
            paymentType.name }}</option>
          </select>
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
  name: 'AddPrivatePersonForm',
  components: {},
  props: {
  },
  data: function () {
    return {
      eventId: this.$route.query.eventId,
      changePersonType: '',
      participantCreate: {
        name: '',
        idNumber: '',
        paymentTypeId: '',
        participantsCount: 1,
        additionalInfo: '',
        personType: 'PRIVATEPERSON'
      },
      paymentTypes: [{}],

    }
  },
  methods: {
    createParticipant: function () {
      this.$http.post("/participant/add/" + this.eventId, this.participantCreate, {
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
    getAllPaymentTypes: function () {
      this.$http.get("/payments", {
      }).then(response => {
        this.paymentTypes = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
    this.getAllPaymentTypes()
  }
}
</script>