<template>
    <div>
        <h2>Results</h2>
        <article id="chartContainer" style="height: 360px; width: 100%;"></article>
<!--        <article id="chartContainer"></article>-->

        <br/><br/>
        <br/><br/>
        <br/><br/>
        <div class="flex flex-2">
            <article>
                <h4>Ranking of Well based on Technical Parameters</h4>
                <table>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Well</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(well, i) in wellAnalyzer.wellRank()" :key="i">
                        <td>Rank {{ plusOne(i) }}</td>
                        <td>{{ well.name }}</td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <br/><br/>
            </article>
            <article>
                <h4>Matrix Acidizing Wells</h4>
                <table v-if="wellAnalyzer.manyDefectWells().length">
                    <thead>
                    <tr>
                        <th>Well</th>
                        <th>No. of Defects</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(well, i) in wellAnalyzer.manyDefectWells()" :key="i">
                        <td>{{ well.name }}</td>
                        <td>{{ well.defects }}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="2">
                            The following wells are not qualified for Matrix Acidizing and
                            were taking away from the process.
                        </td>
                    </tr>
                    </tfoot>
                </table>
                <p v-else>No Wells Present Here.</p>
            </article>

        </div>
        <br/><br/>
        <div class="flex flex-2">
            <article>
                <h4>Wells with Easy WorkOver Complexity</h4>
                <table v-if="wellAnalyzer.easyWorkOver().length">
                    <thead>
                    <tr>
                        <th>Well</th>
                        <th>COF</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(well, i) in wellAnalyzer.easyWorkOver()" :key="i">
                        <td>{{ well.name }}</td>
                        <td>{{ well.cof }}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="2">
                            These wells have Easy work over complexity Coiled Tubing.
                        </td>
                    </tr>
                    </tfoot>
                </table>
                <p v-else>No Wells Present Here.</p>
                <br/><br/>
            </article>

            <article>
                <h4>Wells with Difficult WorkOver Complexity</h4>
                <table v-if="wellAnalyzer.diffWorkOver().length">
                    <thead>
                    <tr>
                        <th>Well</th>
                        <th>COF</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(well, i) in wellAnalyzer.diffWorkOver()" :key="i">
                        <td>{{ well.name }}</td>
                        <td>{{ well.cof }}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="2">Choose BullHeading for this</td>
                    </tr>
                    </tfoot>
                </table>
                <p v-else>No Wells Present Here.</p>
                <br/><br/>
            </article>
        </div>

        <h2>Economic Analysis</h2>
        <table>
            <thead>
            <tr>
                <th>Indicators</th>
                <th v-for="(well, i) in wellAnalyzer.wellRank()" :key="i">
                    {{ well.name }}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(param, i) in econsParams" :key="i">
                <td>{{ param.textName }}</td>
                <td v-for="(well, i) in wellAnalyzer.wells" :key="i">
                    {{ well[param.varName] }}
                </td>
            </tr>
            </tbody>
        </table>
        <br/>
        <div style="text-align: end">
            <a href="/" class="special button">Analyze Other Wells</a>
        </div>
    </div>
</template>

<script>
    import WellAnalyzer from "../models/WellAnalyzer";
    import store from "../stores/store";

    export default {
        data() {
            return {
                econsParams: [
                    {varName: "totalRev", textName: "Total Revenue($)"},
                    {varName: "totalCost", textName: "Total Cost($)"},
                    {varName: "payBackPeriod", textName: "Payback Period (Month)"},
                    {varName: "profitIndex", textName: "Profitability Index"},
                    {varName: "investReturn", textName: "Return on Investment (%)"},
                    {varName: "npv", textName: "NPV (%)"},
                ],
                chartOptions: {
                    theme: "light1",
                    title: {
                        text: "Well Production Gain"
                    },
                },
                chart : null
            };
        },

        computed: {
            wellAnalyzer() {
                let wells = store.getters.wells;
                let cloneWell = [...wells]; //deep copy here
                return new WellAnalyzer(cloneWell);
            },
        },

        methods: {
            plusOne(num) {
                return ++num;
            },

        },

        created() {
        },
        mounted() {
            this.chart = new CanvasJS.Chart("chartContainer", this.chartOptions);
            this.chart.options.data = this.wellAnalyzer.canvasChartData();
            this.chart.render();
        },
    };
</script>