<template>
    <td>{{ well.npvValue(profIndex, npv) }}</td>

</template>

<script>

    export default {
        props: ["well", "profIndex", "npv"],

        components: {
        },

        created() {

        },
        data() {
            return {

            }
        },

        computed: {
        },
        methods: {

        },
    };
</script>