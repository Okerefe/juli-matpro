<template>
    <div>
        <h2>Results</h2>

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
                <h4>No Matrix Acidizing Wells</h4>
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


        <h4>Economic Ranking</h4>
        <table>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Well</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(well, i) in wellAnalyzer.economicRank()" :key="i">
                <td>Rank {{ plusOne(i) }}</td>
                <td>{{ well.name }}</td>
            </tr>
            </tbody>
            <tfoot></tfoot>
        </table>




        <br/>
        <h4>Economic Analysis</h4>
        <table>
            <thead>
            <tr>
                <th>Well Name</th>
                <th v-for="(well, i) in wellAnalyzer.unOrderedWells" :key="i">
                    {{ well.name }}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(param, i) in econsParams" :key="i">
                <td>{{ param.textName }}</td>
                <td v-for="(well, i) in wellAnalyzer.unOrderedWells" :key="i">
                    {{ well[param.varName] }}
                </td>
            </tr>

            <tr>
                <td>
                    Irr Value
                </td>
                <td v-for="(well, a) in wellAnalyzer.unOrderedWells">
                    <irr-value :key="well.vis"  :well="well" :color="colors[a]" :multi="true"/>
                </td>
            </tr>
            </tbody>
        </table>
        <br/>


        <production-bar :wellAnalyzer="wellAnalyzer"/>

        <br/>
        <article>

            <h4>Wells Rank Based On Production</h4>
            <table>
                <thead>
                <tr>
                    <th>Well</th>
                    <th>Production (bbls)</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(well, i) in wellAnalyzer.wells" :key="i">
                    <td>{{ well.name }}</td>
                    <td>{{ commas(well.relProd) }}</td>
                </tr>
                </tbody>
<!--                <tfoot>-->
<!--                <tr>-->
<!--                    <td colspan="2">-->
<!--                        These wells have Easy work over complexity Coiled Tubing.-->
<!--                    </td>-->
<!--                </tr>-->
<!--                </tfoot>-->
            </table>
            <br/><br/>
        </article>



        <production-chart :wellAnalyzer="wellAnalyzer" :analyze="true"/>

    <span v-for="(well, a) in wellAnalyzer.wells" :key = "well.vis">
        <div style="height: 15px; width: 15px; background: red; display: inline-block;" :style="'background :' + colors[a]"></div>
        <p style="display: inline-block; line-height: 20px; height: 20px;">{{ well.name }}</p>
        <br/>
    </span>

<!--        <h4>IRR Values..</h4>-->
<!--        <irr-value v-for="(well, a) in wellAnalyzer.wells" :key = "well.vis"  :well="well" :color="colors[a]" :multi="true"/>-->

        <div style="text-align: end">
            <a href="/" class="special button">Analyze Other Wells</a>
        </div>
    </div>
</template>

<script>
    import WellAnalyzer from "../models/WellAnalyzer";
    import store from "../stores/store";
    import ProductionChart from "./ProductionChart";
    import ProductionBar from "./ProductionBar";
    import IrrValue from "./IrrValue";

    export default {

        components: {
            ProductionChart,
            ProductionBar,
            IrrValue,
        },

        data() {
            return {
                econsParams: [
                    {varName: "totalRev", textName: "Total Revenue($)"},
                    {varName: "payBackPeriod", textName: "Payback Period (Months)"},
                    {varName: "profitIndex", textName: "Profit Index"},
                    {varName: "npvTens", textName: "NPV ($)"},
                ],
                colors : ["#8B0000","#00a86b","#FF6414","#004953"],
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
                let clonedWells = [...wells]; //deep copy here
                // console.log("clonedWells.....");
                // clonedWells.forEach((well) =>{
                //     console.log(well.name);
                // });

                console.log(clonedWells);
                return new WellAnalyzer(clonedWells);
            },
        },

        methods: {
            plusOne(num) {
                return ++num;
            },
            commas(n) {
                var parts=n.toString().split(".");
                return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
            }

        },

        created() {
        },
        mounted() {
            // this.chart = new CanvasJS.Chart("chartContainer", this.chartOptions);
            // this.chart.options.data = this.wellAnalyzer.canvasChartData();
            // this.chart.render();
        },
    };
</script>