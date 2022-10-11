<template>
    <tbody>
        <tr v-for="participant in participants">
            <td></td>
            <td>{{participant.name}}</td>
            <td>{{participant.idNumber}}</td>
            <td>
                <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                    v-on:click="toParticipantUpdate()">Vaata
                </button>
                <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                    v-on:click="deleteParticipant(participant.id)">Kustuta
                </button>
            </td>
        </tr>
    </tbody>
</template>
<script>

export default {
    name: 'ParticipantTableBody',
    data: function () {
        return {

            eventId: this.$route.query.eventId,
            participants: [{
            }],
        }
    },
    methods: {
        findEventsParticipants: function () {
            this.$http.get("/participant/participants/" + this.eventId
            ).then(response => {
                console.log(response.data)
                this.participants = response.data
            }).catch(error => {
                console.log(error)
            })
        },
        deleteParticipant: function (id) {
            this.$http.delete("/participant/" + id
            ).then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        toParticipantUpdate: function () {
            this.$router.push({ name: 'participantView', query: { id: id, eventId } })
        },
    },
    mounted() {
        this.findEventsParticipants();
    }
}

</script>