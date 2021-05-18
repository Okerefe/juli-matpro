<template>
    <div class="row" style="overflow: auto;">
        <h3>Production Profile</h3>
        <table>
            <thead>
            <tr>
                <th>Time (Yrs)</th>
                <th>Production Rate (bbl/d)</th>
                <th>Production (bbl)</th>
                <th>Yearly Operating Cost ($)</th>
                <th>Yearly Revenue ($)</th>
                <th>NCF ($)</th>

                <th v-for="(npv, i) in well.npvs" :key = "i">NPV ({{ npv.value }}%)</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(profile, i) in well.prodProfile" :key = "i">
                <td>Year {{ profile.time }}</td>
                <td>{{ profile.prodRate }}</td>
                <td>{{ profile.production }}</td>
                <td style="min-width: 140px;">
                    <input
                        type="text"
                        :ref="'operateCost_' + 'i'"
                        :placeholder="'Year ' + profile.time"
                        :value="operateCostValue(i)"
                        @input="saveOperateCost(i, $event)"
                        required/>
                </td>
                <td>{{ profile.revenue }}</td>
                 <td>{{ profile.ncf }}</td>
<!--                <td>{{ // well.prodProfile[i].ncf }}</td>-->

<!--                Each of the <td> Below represents Each NPV for Each Column-->
<!--                We still have to use the i for that row for each Column-->
                    <npv-value v-for="(npv, b) in well.npvs" :key = "b + `${npvValueKey}`" :profIndex = "i" :npv="npv" :well="well"></npv-value>
<!--                <td v-for="(npv, b) in well.npvs" :key = "b">{{ well.npvValue(i, npv) }}</td>-->
            </tr>
            <tr>
                <td style="font-weight: bolder;"><p style="margin: 0; padding: 0;font-weight: bolder;">Total NPV</p></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="font-weight: bolder;" v-for="(npv, c) in well.npvs" :key = "c">
                    <p style="margin: 0; padding: 0;font-weight: bolder;">{{ well.totalNpvValue(npv) }}</p></td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>

    import NpvValue from "./NpvValue";
    export default {
        name: 'production-profile',
        components: {
            'npv-value': NpvValue,
        },

        props: ["well"],

        data() {
            return {
                npvValueKey: 1,
            };
        },
        computed: {
        },
        methods: {
            saveOperateCost(i, event) {
                this.well.yearlyOperateCost[i] = event.target.value;
                this.npvValueKey++;
                // Event.$emit('operateCost', i, event.target.value);
                // let el = 'operateCost_'+ i;
                // this.$refs[el].$el.focus();
            },

            npvValue(i, npv) {
                return (this.well.prodProfile[i].ncf/ Math.pow((1 + (npv.value/100)), this.well.prodProfile[i].time)).toFixed(4);

            },

            totalNpvValue(npv) {
                let value = 0;
                for (let i = 0; i < this.well.prodProfile.length; i++) {
                    let npve = this.npvValue(i, npv);
                    console.log(npve);
                    value += parseInt(npve);
                }
                // console.log('total' + value + "\n");
                if(!isNaN(value)) {
                    return value.toFixed(4);
                }
            },

            operateCostValue(i) {
                return this.well.yearlyOperateCost[i];
            }
        },
    };
</script>