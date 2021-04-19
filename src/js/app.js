import Vue from 'vue';
import Vuex from 'vuex';

import WellForm from './components/WellForm.vue';
import DisabledWell from './components/DisabledWell.vue';
import AddedWellsList from './components/AddedWellsList.vue';
import WellResults from "./components/WellResults";
import WellMonths from './components/WellMonths.vue';
import store from "./stores/store";

Vue.use(Vuex);
window.Event = new Vue;

const app = new Vue({
    el: '#root',
    store,
    components: {
        'well-form': WellForm,
        'disabled-well': DisabledWell,
        'added-wells-list': AddedWellsList,
        'well-results': WellResults,
        'well-months': WellMonths,
    },

    data() {
        return {
            formCompletedStatus: false,
        }
    },

    methods: {
        analyzeWells() {
            this.formCompletedStatus = true;
        }
    },
});
