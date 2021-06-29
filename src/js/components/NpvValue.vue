<template>
    <td>{{ commas(well.npvValue(profIndex, npv)) }}</td>

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
            commas(n) {
                var parts=n.toString().split(".");
                return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
            }

        },
    };
</script>