<template>
    <tbody>
        <tr v-for="event in events">
            <td></td>
            <td>{{event.name}}</td>
            <td>{{event.address}}</td>
            <td>{{event.eventDate}}</td>
            <td>
                <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                    v-on:click="toEventView(event.eventId)">Osavõtjad
                </button>
            </td>
        </tr>
    </tbody>
</template>
<script>
export default {
    name: 'PastEventsTableBody',
    data: function () {
        return {
            events: [{}],
        }
    },
    methods: {
        findAllPastEvents: function () {
            this.$http.get("/events/past", {
            }
            ).then(response => {
                console.log(response.data)
                this.events = response.data
            }).catch(error => {
                console.log(error)
            })
        },
        toEventView: function (eventId) {
            this.$router.push({ name: 'eventView', query: { eventId: eventId } })
        },
    },
    mounted() {
        this.findAllPastEvents();
    }
}

</script>