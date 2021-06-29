<template>
    <!--    Well Form HTML Template-->
    <form id="well-form" @submit.prevent="submitMonth">
        <h3>Fill Well Details</h3>

        <well-information :well="well"/>

        <technical-parameters :well="well"/>

        <workover-complexity :well="well"/>

        <decline-value :well="well"/>

        <economic-details :well="well"/>

        <production-profile v-if="well.prodProfile.length > 1" :well="well" :key="well.profileUpdate"/>

        <production-chart :well="well" v-if="well.prodProfile.length > 1" :key="well.updateChart"/>
<!--        <production-chart :well="well" :key="well.updateChart + 'eewfw'"/>-->
<!--        <production-chart :well="well" :key="well.updateChart"/>-->

        <span style="font-weight: 600;">Irr Value: </span><irr-value :well="well" v-if="well.prodProfile.length > 1" :key="well.irrUpdate"/><br/>

        <br/>
        <button name="submit" v-if="well.seriesPlot().length > 1" type="submit" class="special" id="submitwell" data-wellid="1">Add Well</button>
    </form>
</template>

<script>

    import store from "../stores/store";
    import Well from "../models/Well";
    import ProductionProfile from "./ProductionProfile";
    import ProductionChart from "./ProductionChart";
    import TechnicalParameters from "./TechnicalParameters";
    import WellInformation from "./WellInformation";
    import WorkoverComplexity from "./WorkoverComplexity";
    import DeclineValue from "./DeclineValue";
    import EconomicDetails from "./EconomicDetails";
    import ProductionBar from "./ProductionBar";
    import IrrValue from "./IrrValue";

    export default {
        components: {
            ProductionBar,
            EconomicDetails,
            DeclineValue,
            WorkoverComplexity,
            WellInformation,
            TechnicalParameters,
            ProductionProfile,
            ProductionChart,
            IrrValue,
        },

        data() {

            return {
                well: new Well(),
                months: [{'value': ''},], // Initializes the Months Array with one Value
                prodProfileKey: 0,
            }
        },

        methods: {
            hideModal() {
                this.isVisible = false;
            },

            showProdProfile() {
                return isArray(this.well.prodProfile);
            },

            submitMonth() {
                this.well.months = this.months;

                store.commit('addToWell', this.well);
                this.well = {};
                this.well = new Well();
                this.initializeWellValues();
                this.months = [{'value': ''},];
            },

            initializeWellValues() {
                this.well.yearlyOperateCost = [];
                this.well.npvs = [];
                this.well.updateChart = 1;
            },

            addMonth() {
                this.months = this.months.concat({'value': ''});
            },


            revenueValue(i) {
              if(i == 0) {
                  return 0;
              }
              return '';
            },
        },

        created() {
            this.initializeWellValues();
            this.well.months = this.months;
            // let well1 = new Well("WELL XX 01", 55, 1500, 0.03, 1.47, 0.8117, 473.5, 187, 364, 415.51, 18, 3, 44, 2200, "Exponential", 250, 0.000519, 12, 0, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0, 70503150, [1000000,1000000,1000000],[{'value' : 0},{'value' : 20},{'value' : 30},], 5,4,55, 0, 25, 5, 35, 'percent', 34,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]);
            // let well2 = new Well("WELL XX 02", 41, 1500, 0.03, 1.14, 1.434, 202.8, 106, 418, 415.51, 20, 0.33, 44, 592, "Exponential", 250, 0.000568, 12, 1, 0, 0, 5, 0, 2, 1, 0, 0, 0, 5,20024840,[1000000,1000000,1000000],[{'value': 10}, {'value': 20}, {'value': 30},{'value': 40},{'value': 50}], 5,4,55, 0,25, 5, 35, 'percent',  0,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]);
            // // this.well = well1;
            // let well3 = new Well("WELL XX 03", 50, 1500, 0.03, 1.72, 1.327, 583.5, 65, 262, 415.51, 15.4, 2, 44, 991, "Exponential", 250, 0.000547, 12, 0, 0, 0, 5, 6, 0, 1, 1, 0, 0, 5,30118300,[1000000,1000000,1000000],[{'value': 10}, {'value': 20}, {'value': 30},{'value': 40},{'value': 50}], 5,4,55, 0, 25, 5, 35, 'percent',  0,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]);
            // let well4 = new Well("WELL XX 04", 30, 1500, 0.03, 1.4, 0.317, 241.3, 110, 165, 415.51, 13.2, 2, 44, 825, "Exponential", 250, 0.000533, 12, 0, 0, 0, 4, 6, 0, 1, 0, 0, 0, 4,25107170,[1000000,1000000,1000000],[{'value': 10}, {'value': 20}, {'value': 30},{'value': 40},{'value': 50}], 5,4,55, 0, 25, 5, 35, 'percent',  0,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]);
            // store.commit('addToWell', well1);
            // store.commit('addToWell', well2);
            // store.commit('addToWell', well3);
            // store.commit('addToWell', well4);
        }
    }
</script>

<style>

</style>