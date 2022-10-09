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
                <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                    v-on:click="deleteEvent(event.evenId)">
                    Kustuta
                </button>
            </td>
        </tr>
    </tbody>
</template>
<script>
export default {
    name: 'FutureEventsTableBody',
    data: function () {
        return {
            eventId: 0,
            events: [{}],

        }
    },
    methods: {
        findALLFutureEvents: function () {
            this.$http.get("http://localhost:5500/events/future", {
            }
            ).then(response => {
                console.log(response.data)
                this.events = response.data
            }).catch(error => {
                console.log(error)
            })
        },
        deleteEvent: function (eventId) {
            this.$http.delete("http://localhost:5500/events", {
                params:{
                    eventId: eventId
                }
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
        this.findALLFutureEvents();
    }
}
</script>