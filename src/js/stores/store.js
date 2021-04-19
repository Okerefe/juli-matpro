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
        wells: [
             // new Well("Well 1", 55, 1500, 0.03, 1.47, 0.37, 473.5, 187, 964, 415.51, 18, -3, 44, 2200, "Exponential", 50, 70, 12, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0, 5,5,4,5, [{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
             // new Well("Well 2", 41, 1500, 0.03, 1.14, 0.3, 202.8, 106, 418, 415.51, 20, 0.33, 44, 592, "Exponential", 50, 70, 12, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 5,5,4,5, [{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
             // new Well("Well 3", 50, 1500, 0.03, 1.72, 0.3, 583.5, 65, 262, 415.51, 15.4, 0.33, 44, 991, "Exponential", 50, 70, 12, 0, 0, 0, 5, 6, 0, 1, 1, 0, 0, 5,5,4,5, [{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
             // new Well("Well 4", 30, 1500, 0.03, 1.4, 0.385, 241.3, 110, 165, 415.51, 13.2, 2, 44, 825, "Exponential", 50, 70, 12, 0, 0, 0, 4, 6, 0, 1, 0, 0, 0, 4,5,3,4, [{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),

            // new Well( 'well4',1.69, 0.70, 10.04, 5.59, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
            // new Well( 'well2',3.83, 0.65, 31.82, 10.90, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
            // new Well( 'well3',3.91, 0.59, 16.12, 9.49, 0, 0, 0, 5, 6, 0, 1, 1, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
            // new Well( 'well1',7.13, 0.62, 88.26, 19.00, 0, 0, 0, 4, 6, 0, 1, 0, 0, 0, 4,5,3,4,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
        ],

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