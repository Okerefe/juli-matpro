<template>
    <div>
        <added-well v-for="well in wells" :well = "well" :key="`${well.name}${well.pias}`"></added-well>
    </div>
</template>

<script>
    import AddedWell from './AddedWell.vue';
    import store from "../stores/store";

    export default {
        store,

        data() {
            return {

            }
        },

        components: {
          'added-well' : AddedWell
        },

        computed: {

          wells() {
              return store.getters.wells;
          }
        },

        methods: {
            plusOne(num) {
              return ++num;
            },
        },
    }
</script>