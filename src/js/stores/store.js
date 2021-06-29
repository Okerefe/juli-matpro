/**
 * Todo
 *  Complete Docs
 * Module Contains
 *
 */
import Well from '../models/Well';
import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        wells: [],
    },
    mutations: {
        addToWell(state, well) {
            state.wells.push(well);
        },
    },
    actions: {

    },
    getters: {
        wells(state) {
            return state.wells;
        }
    }
});
export default store;