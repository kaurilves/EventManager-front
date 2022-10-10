<template>
  <div>
    <h1>Ürituse lisamine</h1>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Ürituse nimi</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="eventCreate.name">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Toimumisaeg</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="eventCreate.date" placeholder="pp.kk.aaaa hh:mm">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Koht</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="eventCreate.address">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Lisainfo</label>
        <div class="col-sm-2">
          <input class="form-control" v-model="eventCreate.additionalInfo">
        </div>
      </div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToSearchSenderOrders">TAGASI</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="createNewEvent">LISA</button>
    </form>
  </div>
</template>
<script>

export default {
  name: 'AddEventForm',
  components: {},
  data: function () {
    return {
      eventCreate: {
        name: '',
        date: '',
        address: '',
        additionalInfo: '',
      }

    }
  },
  methods: {
    createEvent: function () {
      this.$http.post("/event", this.eventCreate).then(response => {
         console.log(response.data)
        this.eventCreate = response.data
        this.toHomeView()
      }).catch(error => {
        console.log(error)
      })
    },
    createNewEvent: function () {
      this.createEvent()
    },
    toHomeView: function () {
      this.$router.push({ name: 'homeView' })
    },

  },
}
</script>
</script>