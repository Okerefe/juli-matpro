<template>
    <div>
        <h3>{{ well.name }}</h3>

        <well-information :well="well" :disabled="disabled"/>

        <technical-parameters :well="well" :disabled="disabled"/>

        <workover-complexity :well="well" :disabled="disabled"/>

        <decline-value :well="well" :disabled="disabled"/>

        <economic-details :well="well" :disabled="disabled"/>

        <production-profile v-if="Array.isArray(well.prodProfile)" :well="well" :key="well.profileUpdate" :disabled="disabled"/>

        <production-chart :well="well" v-if="well.labelsPlot().length > 1" :key="well.updateChart +'ddd'"/>
<!---->
        <span style="font-weight: 600;">Irr Value: </span><irr-value :well="well" v-if="well.prodProfile.length > 1" :key="well.irrUpdate"/><br/>

        <button type="button" class="special" data-wellid="1" v-if="disabled == true" v-on:click.prevent="disabled = false">Edit Well</button>
        <button type="button" class="special" data-wellid="1" style="background: green" v-if="disabled !== true" v-on:click.prevent="disabled = true">Save Well</button>

        <br/>
        <br/>
        <hr/>
        <hr/>
        <hr/>
        <br/>
        <br/>
        <br/>

    </div>
</template>

<script>

    import EconomicDetails from "./EconomicDetails";
    import DeclineValue from "./DeclineValue";
    import WorkoverComplexity from "./WorkoverComplexity";
    import WellInformation from "./WellInformation";
    import TechnicalParameters from "./TechnicalParameters";
    import ProductionProfile from "./ProductionProfile";
    import ProductionChart from "./ProductionChart";
    import IrrValue from "./IrrValue";

    export default {
        props: ['well'],

        data () {
            return {
                workOverComplexity: 1,
                disabled : true
            }
        },

        components: {
            EconomicDetails,
            DeclineValue,
            WorkoverComplexity,
            WellInformation,
            TechnicalParameters,
            ProductionProfile,
            ProductionChart,
            IrrValue,
        },

        methods: {
            plusOne(num) {
              return ++num;
            },
        },

        created() {
        }
    }
</script>