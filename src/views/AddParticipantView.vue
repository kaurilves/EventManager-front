<template>
  <div>
    <div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToAddOrder">AVALEHT</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToSearchSenderOrders">ÜRITUSE
        LISAMINE</button>
    </div>
    <div class="column">
      <FutureEventsTabel/>
    </div>
    <div class="column">
      <PastEventsTabel/>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
