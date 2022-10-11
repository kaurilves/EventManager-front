<template>
  <div>
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
          <input class="form-control" v-model="eventCreate.eventDate" placeholder="pp.kk.aaaa hh:mm">
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
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToHomeView()">TAGASI</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="createEvent()">LISA</button>
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
        address: '',
        eventDate: '',
        additionalInfo: '',
      }

    }
  },
  methods: {
    createEvent: function () {
      this.$http.post("/events/create", this.eventCreate).then(response => {
        this.eventCreate = response.data
        this.navigateToHomeView()
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
</script>