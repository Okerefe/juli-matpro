<template>
    <div>
        <br>
        <h4>Production Chart..</h4>

        <div v-if="!disabled">
            <vue-chartist :data="data" :options="options" type="Line"></vue-chartist>
        </div>

        <div style="opacity: 0.6;" v-else>
            <vue-chartist :data="data" :options="options" type="Line"></vue-chartist>
            <br/>
            <br/>

        </div>
    </div>
</template>

<script>
    import VueChartist from 'v-chartist';

    export default {
        name: 'production-chart',

        props: ["well", "disabled", "wellAnalyzer", "analyze"],

        components: {
            'vue-chartist': VueChartist,
        },

        created() {
            // let npvs = [];
            // console.log(this.well.npvs.length);
            // for(let i = 0; i < this.well.npvs.length; i++) {
            //     npvs.push(`${this.well.npvs[i].value}%`);
            //     console.log(this.well.npvs[i].value);
            // }
            // console.log('labels');
            // console.log(npvs);
            // this.npvs = npvs;
        },

        data() {
            return {
                data: {
                    // labels: this.labels(),
                    labels: [0,10,20,30,40,50,60,70,80,90,100,120],
                    // series: this.series(),
                    series: this.series(),
                },
                options: {
                    fullWidth: true,
                    chartPadding: {
                        right: 40,
                        left: 40
                    },
                    height: 500,
                },
            };
        },
        computed: {
        },
        methods: {
            series()  {
                if(this.analyze == true) {
                    let series = [];
                    this.wellAnalyzer.wells.forEach((well) =>{
                        series.push(well.seriesPlot());
                    });
                    return series;
                } else {
                    return [this.well.seriesPlot()];

                }
                // wells.npvs.
            },

            labels() {
                if(this.analyze === true) {
                    return this.wellAnalyzer.wells[1].labelsPlot()
                } else {
                    return this.well.labelsPlot();
                }
            }
        },
    };
</script>

<style>
    @keyframes dashoffset-seven {
        0% {
            stroke-dashoffset: 7px;
        }
        100% {
            stroke-dashoffset: 0px;
        }
    }

    /*.ct-series.ct-series-a .ct-line {*/
    /*    stroke: #8B0000;*/
    /*}*/

    /*.ct-series.ct-series-a .ct-point {*/
    /*    stroke: #8B0000;*/
    /*}*/


    .ct-series.ct-series-a .ct-line {
        stroke: #8B0000;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }

    .ct-series.ct-series-a .ct-point {
        stroke: #8B0000;
        stroke-width: 5px;
    }

    .ct-series.ct-series-a .ct-line {
        stroke: #8B0000;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    /*.ct-series.ct-series-c .ct-line {*/
    /*    stroke: #004225;*/
    /*}*/

    /*.ct-series.ct-series-c .ct-point {*/
    /*    stroke: #004225;*/
    /*}*/


    .ct-series.ct-series-b .ct-line {
        stroke: #00a86b;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-b .ct-point {
        stroke: #00a86b;
        stroke-width: 5px;
    }

    .ct-series.ct-series-b .ct-line {
        stroke: #00a86b;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    /*.ct-series.ct-series-e .ct-line {*/
    /*    stroke: #0ff;*/
    /*}*/

    /*.ct-series.ct-series-e .ct-point {*/
    /*    stroke: #0ff;*/
    /*}*/


    .ct-series.ct-series-c .ct-line {
        stroke: #FF6414;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-c .ct-point {
        stroke: #FF6414;
        stroke-width: 5px;
    }

    .ct-series.ct-series-c .ct-line {
        stroke: #FF6414;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    /*.ct-series.ct-series-g .ct-line {*/
    /*    stroke: #d0f0c0;*/
    /*}*/

    /*.ct-series.ct-series-g .ct-point {*/
    /*    stroke: #d0f0c0;*/
    /*}*/


    .ct-series.ct-series-d .ct-line {
        stroke: #004953;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-d .ct-point {
        stroke: #004953;
        stroke-width: 5px;
    }

    .ct-series.ct-series-d .ct-line {
        stroke: #004953;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }

</style>