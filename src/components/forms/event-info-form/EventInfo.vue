<template>
    <div>
        <table class="table">
            <tbody>
                <tr>
                    <td><strong>Ürituse nimi:</strong></td>
                    <td> {{ event.name }}</td>
                </tr>
                <tr>
                    <td> <strong> Aeg:</strong></td>
                    <td> {{ event.eventDate }} </td>
                </tr>
                <tr>
                    <td> <strong> Koht: </strong> </td>
                    <td> {{ event.address}} </td>
                </tr>
                <tr>
                    <td><strong> Lisainfo: </strong> </td>
                    <td> {{ event.additionalInfo }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    name: 'EventInfo',
    components: {},
    data: function () {
        return {
            eventId: this.$route.query.eventId,
            event: {
                name: '',
                eventDate: '',
                address: '',
                additionalInfo: '',
            }
        }
    },
    methods: {
        getEvent() {
            this.$http.get("/events/event/" + this.eventId
            ).then(response => {
                this.event = response.data
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        navigateToHomeView: function () {
            this.$router.push({ name: 'homeView' })
        },
    },
    mounted() {
        this.getEvent();
    }
}
</script>
  </script>