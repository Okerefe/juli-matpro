<template>
    <div>
        <br>
        <h4>Production Bar..</h4>
        <div>
            <vue-chartist :data="data" :options="options" type="Bar"></vue-chartist>
        </div>

    </div>
</template>

<script>
    import VueChartist from 'v-chartist';

    export default {
        name: 'production-bar',

        props: ["wellAnalyzer"],

        components: {
            'vue-chartist': VueChartist,
        },

        created() {
        },

        data() {
            return {
                data: {
                    labels: this.labels(),
                    // labels: ['XS', 'S', 'M', 'L'],
                    series: this.series(),
                    // series: [20, 60, 120, 80],
                },
                options: {
                    distributeSeries: true,
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
                let series = [];
                this.wellAnalyzer.wells.forEach((well) =>{
                    series.push(well.relProd);
                });
                console.log('proddddd' + series);
                return series;
            },

            labels() {
                let labels = [];
                this.wellAnalyzer.wells.forEach((well) =>{
                    labels.push(well.name);
                });
                return labels;

            }
        },
    };
</script>

<style>

    .ct-bar{
        stroke-width: 100px;
    }

    .ct-series-a {
        stroke: #8B0000;
    }
    .ct-series-b {
        stroke: #00a86b;
    }
    .ct-series-c {
        stroke: #FF6414;
    }
    .ct-series-d {
        stroke: #004953;
    }

    /*.ct-bar:nth-of-type(4n+1) {*/
    /*    stroke: #71A28A;*/
    /*}*/

    /*.ct-bar:nth-of-type(4n+2) {*/
    /*    stroke: #FF6414;*/
    /*}*/
    /*.ct-bar:nth-child(2) {*/
    /*    stroke: #FF6414 !important;*/
    /*}*/

    /*.ct-bar:nth-of-type(4n+3) {*/
    /*    stroke: #EFB200;*/
    /*}*/

    /*.ct-bar:nth-of-type(4n+4) {*/
    /*    stroke: #91A453;*/
    /*}*/

    @keyframes dashoffset-seven {
        0% {
            stroke-dashoffset: 7px;
        }
        100% {
            stroke-dashoffset: 0px;
        }
    }

    .ct-series.ct-series-a .ct-line {
        stroke: #8B0000;
    }

    .ct-series.ct-series-a .ct-point {
        stroke: #8B0000;
    }


    .ct-series.ct-series-b .ct-line {
        stroke: #FF0000;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }

    .ct-series.ct-series-b .ct-point {
        stroke: #FF0000;
        stroke-width: 5px;
    }

    .ct-series.ct-series-b .ct-line {
        stroke: #FF0000;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    .ct-series.ct-series-c .ct-line {
        stroke: #004225;
    }

    .ct-series.ct-series-c .ct-point {
        stroke: #004225;
    }


    .ct-series.ct-series-d .ct-line {
        stroke: #00a86b;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-d .ct-point {
        stroke: #00a86b;
        stroke-width: 5px;
    }

    .ct-series.ct-series-d .ct-line {
        stroke: #00a86b;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    .ct-series.ct-series-e .ct-line {
        stroke: #0ff;
    }

    .ct-series.ct-series-e .ct-point {
        stroke: #0ff;
    }


    .ct-series.ct-series-f .ct-line {
        stroke: #40e0d0;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-f .ct-point {
        stroke: #40e0d0;
        stroke-width: 5px;
    }

    .ct-series.ct-series-f .ct-line {
        stroke: #40e0d0;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    .ct-series.ct-series-g .ct-line {
        stroke: #d0f0c0;
    }

    .ct-series.ct-series-g .ct-point {
        stroke: #d0f0c0;
    }


    .ct-series.ct-series-h .ct-line {
        stroke: #004953;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-h .ct-point {
        stroke: #004953;
        stroke-width: 5px;
    }

    .ct-series.ct-series-h .ct-line {
        stroke: #004953;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }

</style>